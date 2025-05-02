
/**
 * Sends a user message to the chatbot API and retrieves the response.
 *
 * @async
 * @function getResponse
 * @param {string} userMessage - The message text sent by the user to the chatbot.
 * @returns {Promise<string | undefined>} The chatbot's response as a string, or undefined if an error occurs.
 */
export async function getResponse (userMessage: string) {

    try {

        const getSupportRequest = async () => {

            // Uses the API URL and method from environment variables specified in the .env file.
            const response = await fetch(import.meta.env.VITE_CHATBOT_API_URL, {
                method: import.meta.env.VITE_CHATBOT_API_METHOD,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message: userMessage})
            });

            if (!response.ok) {
                throw new Error('There seems to be an issue with one of our services. Please try again later.');
            }
            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            return data.response;
        }
        return await getSupportRequest();

    } catch (error: unknown) {
        console.error('Error fetching response:', error);
    }
}