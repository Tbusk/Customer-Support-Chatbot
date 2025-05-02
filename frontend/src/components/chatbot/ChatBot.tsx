import {useState} from "react";
import ChatbotClosed from "./closed/ChatbotClosed.tsx";
import ChatbotOpen from "./open/ChatbotOpen.tsx";

export interface Message {
    text: string,
    sender: string,
    timestamp: Date
}

export default function ChatBot() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);

    return (
        <div className="grid place-content-end h-screen m-0 p-0">
            {!isOpen ? (
                <ChatbotClosed setIsOpen={setIsOpen} isOpen={isOpen}/>
            ) : (
                <ChatbotOpen setIsOpen={setIsOpen} isOpen={isOpen} messages={messages} setMessages={setMessages} />
            )}
        </div>
    );
}