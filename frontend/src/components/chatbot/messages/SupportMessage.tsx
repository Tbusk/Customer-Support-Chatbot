import {Text} from "@radix-ui/themes";
import {Message} from "../ChatBot.tsx";
import ReactMarkdown from "react-markdown";
import * as React from "react";

/**
 * Properties for the SupportMessage component.
 * @interface SupportMessageProps
 * @property {Message} message - The message object containing text, sender, and timestamp.
 * @property {React.Key} propKey - A unique key for rendering the component in a list.
 */
export interface SupportMessageProps {
    message: Message;
    propKey: React.Key;
}

/**
 * SupportMessage component.
 * Renders a support message in the chatbot interface, including the message text and timestamp in the form of `00:00 [AM/PM] | [Sender]`.
 *
 * @param {SupportMessageProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SupportMessage component.
 */
export default function SupportMessage(props: SupportMessageProps) {
    return (
        <div key={props.propKey} className="content-start flex flex-col items-start px-3">
            <div className="bg-stone-800 px-3 rounded-lg mb-2 text-sm text-gray-200 border border-slate-500 border-l-slate-400 border-l-8">
                <div className="flex flex-wrap text-wrap break-words">

                    {/* class markdown is needed so tailwindcss doesn't remove styling */}
                    <div className="markdown">
                        {/* Render the message text using ReactMarkdown from `react-markdown` library for Markdown support */}
                        <ReactMarkdown children={props.message.text} />
                    </div>
                </div>
            </div>
            <Text className="text-gray-400  mt-0 mb-2" style={{fontSize:'11px'}}>

                {/* Display the timestamp and sender of the message in the form of `00:00 [AM/PM] | [Sender]`*/}
                {props.message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} | {props.message.sender}
            </Text>
        </div>
    );
}