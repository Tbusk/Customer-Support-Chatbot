import {useState} from "react";
import ChatbotClosed from "./closed/ChatbotClosed.tsx";
import ChatbotOpen from "./open/ChatbotOpen.tsx";

/**
 * Interface representing a message in the chatbot conversation.
 * @interface Message
 * @property {string} text - The content of the message.
 * @property {string} sender - The sender of the message (e.g., "User" or "Support").
 * @property {Date} timestamp - The timestamp when the message was sent.
 */
export interface Message {
    text: string,
    sender: string,
    timestamp: Date
}

/**
 * ChatBot component.
 * Manages the open/closed state of the chatbot and renders either the closed or open chatbot UI.
 *
 * @returns {JSX.Element} The rendered ChatBot component.
 */
export default function ChatBot() {

    // State to track whether the chatbot is open or closed
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // State to store the array of messages in the chatbot conversation
    const [messages, setMessages] = useState<Message[]>([]);

    return (
        <div className="grid place-content-end h-screen m-0 p-0">

            {/* Conditionally render the closed or open chatbot UI based on the isOpen state */}
            {!isOpen ? (
                <ChatbotClosed setIsOpen={setIsOpen} isOpen={isOpen}/>
            ) : (
                <ChatbotOpen setIsOpen={setIsOpen} isOpen={isOpen} messages={messages} setMessages={setMessages} />
            )}
        </div>
    );
}