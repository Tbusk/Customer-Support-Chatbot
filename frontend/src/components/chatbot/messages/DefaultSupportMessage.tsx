import SupportMessage from "./SupportMessage.tsx";
import * as React from "react";
import {Message} from "../ChatBot.tsx";

/**
 * Properties for the DefaultSupportMessage component.
 * @interface DefaultSupportMessageProps
 * @property {React.Key} propKey - A unique key for rendering the component in a list.
 */
export interface DefaultSupportMessageProps {
    propKey: React.Key;
}

/**
 * DefaultSupportMessage component.
 * Renders a default support message in the chatbot interface by creating a predefined message object
 * and passing it to the SupportMessage component.
 *
 * @param {DefaultSupportMessageProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered DefaultSupportMessage component.
 */
export default function DefaultSupportMessage(props: DefaultSupportMessageProps) {

    //  default support message details
    const text: string = 'How can we assist you today?';
    const sender: string = 'Support';
    const timestamp: Date = new Date();

    // Construct the message object
    const message:Message = {text: text, sender: sender, timestamp: timestamp};

    return (
        // Render the SupportMessage component with the message object
        <SupportMessage propKey={props.propKey} message={message} />
    );
}