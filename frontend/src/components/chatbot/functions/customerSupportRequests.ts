export async function getResponse (userMessage: string) {

    try {

        const getSupportRequest = async () => {

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