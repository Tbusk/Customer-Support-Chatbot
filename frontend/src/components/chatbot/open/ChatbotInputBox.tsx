import {Message} from "../ChatBot.tsx";
import handleChatbotInput from "../functions/chatbotInputHandling.ts";

export interface ChatbotInputBoxProps {
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

export default function ChatbotInputBox(props: ChatbotInputBoxProps) {

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Type your message..."
                className="s p-2 bg-zinc-600 text-white text-sm px-5 rounded-3xl focus:outline-none focus:ring-1 focus:ring-stone-200 text-wrap w-full lg:w-full"
                onKeyDown={event => handleChatbotInput({event: event, messages: props.messages, setMessages: props.setMessages})}
            />
            <div className="py-1">
                <p className="text-wrap text-gray-400 w-full lg:w-full text-center" style={{fontSize: '11px'}}>
                    Customer Support is powered by AI, so surprises and mistakes are possible.
                </p>
            </div>
        </div>
    );
}