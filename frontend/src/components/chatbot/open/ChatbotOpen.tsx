import {Message} from "../ChatBot.tsx";
import * as React from "react";
import ChatbotOpenHeader from "./ChatbotOpenHeader.tsx";
import ChatbotInputBox from "./ChatbotInputBox.tsx";
import ChatbotMessageArea from "./ChatbotMessageArea.tsx";

export interface ChatbotOpenProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export default function ChatbotOpen(props: ChatbotOpenProps) {

    return (
        <div className="sm:pr-8 sm:pb-8">
            <div className="flex flex-col h-screen w-screen sm:w-80 sm:h-120 bg-stone-800 sm:rounded-2xl">

                <ChatbotOpenHeader setIsOpen={props.setIsOpen} isOpen={props.isOpen} />

                <ChatbotMessageArea messages={props.messages} />

                <ChatbotInputBox messages={props.messages} setMessages={props.setMessages} />

            </div>
        </div>
    );
}