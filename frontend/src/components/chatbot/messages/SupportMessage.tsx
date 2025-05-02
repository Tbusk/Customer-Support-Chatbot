import {Text} from "@radix-ui/themes";
import {Message} from "../ChatBot.tsx";
import ReactMarkdown from "react-markdown";
import * as React from "react";

export interface ChatbotSupportMessageProps {
    message: Message;
    propKey: React.Key;
}

export default function SupportMessage(props: ChatbotSupportMessageProps) {
    return (
        <div key={props.propKey} className="content-start flex flex-col items-start px-3">
            <div className="bg-stone-800 p-3 rounded-lg mb-2 text-sm text-gray-200 border border-slate-500 border-l-slate-400 border-l-8">
                <ReactMarkdown>{props.message.text}</ReactMarkdown>
            </div>
            <Text className="text-gray-400  mt-0 mb-2" style={{fontSize:'11px'}}>
                {props.message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} | {props.message.sender}
            </Text>
        </div>
    );
}