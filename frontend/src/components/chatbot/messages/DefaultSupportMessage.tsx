import SupportMessage from "./SupportMessage.tsx";
import * as React from "react";
import {Message} from "../ChatBot.tsx";

export interface DefaultSupportMessageProps {
    propKey: React.Key;
}

export default function DefaultSupportMessage(props: DefaultSupportMessageProps) {

    const supportMessage:string = 'How can we assist you today?';
    const sender: string = 'Support';
    const timestamp: Date = new Date();

    const message:Message = {text: supportMessage, sender: sender, timestamp: timestamp};

    return (
        <SupportMessage propKey={props.propKey} message={message} />
    );
}