import DefaultSupportMessage from "../messages/DefaultSupportMessage.tsx";
import SupportMessage from "../messages/SupportMessage.tsx";
import UserMessage from "../messages/UserMessage.tsx";
import {useEffect, useRef} from "react";
import {Message} from "../ChatBot.tsx";

export interface ChatbotMessageAreaProps {
    messages: Message[];
}

export default function ChatbotMessageArea(props: ChatbotMessageAreaProps) {

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [props.messages]);


    return (
        <div className="flex-grow overflow-y-auto bg-zinc-700 sm:border-t sm:border-b sm:border-slate-600 ">
            <div className="pt-3">
                <DefaultSupportMessage propKey={0}/>

                {props.messages.map((message, index) => (
                    message.sender === 'support' ? (
                        <SupportMessage propKey={index + 1} message={message} />
                    ) : (
                        <UserMessage propKey={index + 1} message={message} />
                    )
                ))
                }

                <div ref={bottomRef} className="h-0"></div>
            </div>
        </div>
    );
}