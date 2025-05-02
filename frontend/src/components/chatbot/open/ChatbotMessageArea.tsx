import DefaultSupportMessage from "../messages/DefaultSupportMessage.tsx";
import SupportMessage from "../messages/SupportMessage.tsx";
import UserMessage from "../messages/UserMessage.tsx";
import {useEffect, useRef} from "react";
import {Message} from "../ChatBot.tsx";

/**
 * Properties for the ChatbotMessageArea component.
 * @interface ChatbotMessageAreaProps
 * @property {Message[]} messages - Array of messages in the chatbot conversation.
 */
export interface ChatbotMessageAreaProps {
    messages: Message[];
}

/**
 * ChatbotMessageArea component.
 * Renders the message area of the chatbot, displaying messages from both the user and support.
 * Automatically scrolls to the bottom when new messages are added.
 *
 * @param {ChatbotMessageAreaProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChatbotMessageArea component.
 */
export default function ChatbotMessageArea(props: ChatbotMessageAreaProps) {

    // Reference to the bottom of the message area for auto-scrolling
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scrolls to the bottom of the message area when messages change
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [props.messages]);


    return (
        <div className="flex-grow overflow-y-auto bg-zinc-700 border-t border-b border-slate-600 ">
            <div className="pt-3">

                {/* Default support message displayed at the top */}
                <DefaultSupportMessage propKey={0}/>

                {/* Maps through the messages array and renders either a SupportMessage or UserMessage */}
                {props.messages.map((message, index) => (
                    message.sender === 'Support' ? (
                        <SupportMessage propKey={index + 1} message={message} />
                    ) : (
                        <UserMessage propKey={index + 1} message={message} />
                    )
                ))
                }

                {/* Invisible div used as a reference for auto-scrolling */}
                <div ref={bottomRef} className="h-0"></div>
            </div>
        </div>
    );
}