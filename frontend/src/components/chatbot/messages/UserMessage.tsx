import ReactMarkdown from "react-markdown";
import {Text} from "@radix-ui/themes";
import {Message} from "../ChatBot.tsx";
import * as React from "react";
import remarkGfm from "remark-gfm";

/**
 * Properties for the UserMessage component.
 * @interface UserMessageProps
 * @property {Message} message - The message object containing text, sender, and timestamp.
 * @property {React.Key} propKey - A unique key for rendering the component in a list.
 */
export interface UserMessageProps {
    message: Message;
    propKey: React.Key;
}

/**
 * UserMessage component.
 * Renders a user message in the chatbot interface, including the message text and timestamp in the form of `00:00 [AM/PM] | [Sender]`.
 *
 * @param {UserMessageProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered UserMessage component.
 */
export default function UserMessage(props: UserMessageProps) {
    return (
        <div key={props.propKey} className="content-start flex flex-col items-end px-3 py-2">
            <div className="bg-stone-800 px-3 rounded-lg mb-2 text-sm text-gray-300 border border-r-8 border-r-slate-300 border-slate-500">
                {/* class markdown is needed so tailwindcss doesn't remove styling */}
                <div className="markdown">

                    {/* Render the message text using ReactMarkdown from `react-markdown` library for Markdown support */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.message.text}</ReactMarkdown>
                </div>
            </div>

            <Text className="text-gray-400 mt-2" style={{fontSize:'11px'}}>
                {/* Display the timestamp and sender of the message in the form of `00:00 [AM/PM] | [Sender]`*/}
                {props.message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} | {props.message.sender}
            </Text>
        </div>
    );
}