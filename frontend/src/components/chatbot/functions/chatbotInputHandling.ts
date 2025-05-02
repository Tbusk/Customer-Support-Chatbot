import {Message} from "../ChatBot.tsx";
import {getResponse} from "./customerSupportRequests.ts";
import * as React from "react";

export interface ChatbotInputFunctionProps {
    event: React.KeyboardEvent<HTMLInputElement>;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

export default async function handleChatbotInput(props: ChatbotInputFunctionProps) {
    if(props.event.key === 'Enter'){
        props.event.preventDefault();
        const input = props.event.target as HTMLInputElement;

        if (input.value.trim()) {

            const messagesWithNewUserMessage:Message[] = [...props.messages, createNewMessage(input.value.trim(), 'user')];
            props.setMessages(messagesWithNewUserMessage)

            const userMessage = input.value.trim();
            input.value = '';

            const messagesWithLoadingMessage: Message[] = [...messagesWithNewUserMessage, createNewMessage('...', 'support')];
            props.setMessages(messagesWithLoadingMessage);

            const data: string = await getResponse(userMessage);

            const updatedMessages = messagesWithLoadingMessage.filter(msg => msg.text !== '...');
            props.setMessages([...updatedMessages, createNewMessage(data, 'support')]);
        }
    }
}

function createNewMessage(text: string, sender: string): Message {
    return {
        text: text,
        sender: sender,
        timestamp: new Date()
    };
}