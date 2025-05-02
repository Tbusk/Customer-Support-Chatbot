import ReactMarkdown from "react-markdown";
import {Text} from "@radix-ui/themes";
import {Message} from "../ChatBot.tsx";
import * as React from "react";

export interface ChatbotUserMessageProps {
    message: Message;
    propKey: React.Key;
}

export default function UserMessage(props: ChatbotUserMessageProps) {
    return (
        <div key={props.propKey} className="content-start flex flex-col items-end px-3">
            <div className="bg-stone-800 p-3 rounded-lg mb-2 text-sm text-gray-300 border border-r-8 border-r-slate-300 border-slate-500">
                <ReactMarkdown>{props.message.text}</ReactMarkdown>
            </div>
            <Text className="text-gray-400 mt-0 mb-2" style={{fontSize:'11px'}}>
                {props.message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
            </Text>
        </div>
    );
}