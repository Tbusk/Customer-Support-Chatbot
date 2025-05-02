import {Message} from "../ChatBot.tsx";
import handleChatbotInput from "../functions/chatbotInputHandling.ts";


/**
 * Properties for the ChatbotInputBox component.
 * @interface ChatbotInputBoxProps
 * @property {Message[]} messages - Array of messages in the chatbot conversation.
 * @property {(messages: Message[]) => void} setMessages - Function to update the array of messages.
 */
export interface ChatbotInputBoxProps {
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

/**
 * ### ChatbotInputBox component.
 * Renders a pill-shaped grey elongated input box for the user to type messages and handles input events.
 *
 * Uses the handleChatbotInput function from `chatbotInputHandling` to process input events and update messages.
 *
 * @param {ChatbotInputBoxProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChatbotInputBox component.
 */
export default function ChatbotInputBox(props: ChatbotInputBoxProps) {

    return (
        <div className="p-4">

            {/* Input field for typing messages */}
            <input
                type="text"
                placeholder="Type your message..."
                className="s p-2 bg-zinc-600 text-white text-sm px-5 rounded-3xl focus:outline-none focus:ring-1 focus:ring-stone-200 text-wrap w-full lg:w-full"
                onKeyDown={event => handleChatbotInput({event: event, messages: props.messages, setMessages: props.setMessages})}
            />
            <div className="py-1">

                {/* Informational text about AI-powered customer support */}
                <p className="text-wrap text-gray-400 w-full lg:w-full text-center" style={{fontSize: '11px'}}>
                    Customer Support is powered by AI, so surprises and mistakes are possible.
                </p>
            </div>
        </div>
    );
}