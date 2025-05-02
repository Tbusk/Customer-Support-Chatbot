import {Message} from "../ChatBot.tsx";
import * as React from "react";
import ChatbotOpenHeader from "./ChatbotOpenHeader.tsx";
import ChatbotInputBox from "./ChatbotInputBox.tsx";
import ChatbotMessageArea from "./ChatbotMessageArea.tsx";

/**
 * Properties for the ChatbotOpen component.
 * @interface ChatbotOpenProps
 * @property {(isOpen: boolean) => void} setIsOpen - Function to toggle the chatbot's open/closed state.
 * @property {boolean} isOpen - Current state of the chatbot (true if open, false if closed).
 * @property {Message[]} messages - Array of messages in the chatbot conversation.
 * @property {React.Dispatch<React.SetStateAction<Message[]>>} setMessages - Function to update the array of messages.
 */
export interface ChatbotOpenProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

/**
 * ChatbotOpen component.
 * Renders the open state of the chatbot, including the header, message area, and input box.
 *
 * @param {ChatbotOpenProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChatbotOpen component.
 */
export default function ChatbotOpen(props: ChatbotOpenProps) {

    return (
        <div className="sm:pr-3 sm:pb-8">
            <div className="flex flex-col h-screen w-screen sm:w-80 sm:h-120 bg-stone-800 sm:rounded-2xl">

                {/* Header section of the chatbot */}
                <ChatbotOpenHeader setIsOpen={props.setIsOpen} isOpen={props.isOpen} />

                {/* Message area displaying the conversation */}
                <ChatbotMessageArea messages={props.messages} />

                {/* Input box for typing and sending messages */}
                <ChatbotInputBox messages={props.messages} setMessages={props.setMessages} />

            </div>
        </div>
    );
}