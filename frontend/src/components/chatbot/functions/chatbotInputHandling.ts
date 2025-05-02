import {Message} from "../ChatBot.tsx";
import {getResponse} from "./customerSupportRequests.ts";
import * as React from "react";

/**
 * Properties for the handleChatbotInput function.
 * @interface ChatbotInputFunctionProps
 * @property {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event triggered by the user.
 * @property {Message[]} messages - The current array of messages in the chatbot conversation.
 * @property {(messages: Message[]) => void} setMessages - Function to update the array of messages.
 */
export interface ChatbotInputFunctionProps {
    event: React.KeyboardEvent<HTMLInputElement>;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

/**
 * Handles user input in the chatbot interface.
 * Processes the input when the 'Enter' key is pressed, updates the message list, and fetches a response from the chatbot API.
 *
 * @async
 * @function handleChatbotInput
 * @param {ChatbotInputFunctionProps} props - The properties containing the event, messages, and setMessages function.
 * @returns {Promise<void>} A promise that resolves when the input handling is complete.
 */
export default async function handleChatbotInput(props: ChatbotInputFunctionProps) {
    if(props.event.key === 'Enter'){
        props.event.preventDefault();
        const input = props.event.target as HTMLInputElement;

        if (input.value.trim()) {

            // Add the user's message to the message list using the spread operator
            const messagesWithNewUserMessage:Message[] = [...props.messages, createNewMessage(input.value.trim(), 'User')];
            props.setMessages(messagesWithNewUserMessage)

            // clears chat input field while waiting for a response
            const userMessage = input.value.trim();
            input.value = '';

            // Add a loading message to indicate the chatbot is processing
            const messagesWithLoadingMessage: Message[] = [...messagesWithNewUserMessage, createNewMessage('...', 'Support')];
            props.setMessages(messagesWithLoadingMessage);

            // Fetch the chatbot's response
            const data: string = await getResponse(userMessage);

            // Remove the loading message and add the chatbot's response
            const updatedMessages = messagesWithLoadingMessage.filter(msg => msg.text !== '...');
            props.setMessages([...updatedMessages, createNewMessage(data, 'Support')]);
        }
    }
}

/**
 * Creates a new message object.
 *
 * @function createNewMessage
 * @param {string} text - The content of the message.
 * @param {string} sender - The sender of the message (e.g., 'User' or 'Support').
 * @returns {Message} The newly created message object.
 */
function createNewMessage(text: string, sender: string): Message {
    return {
        text: text,
        sender: sender,
        timestamp: new Date()
    };
}