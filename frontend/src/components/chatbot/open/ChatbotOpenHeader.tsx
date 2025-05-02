import chatIcon from "../assets/chat-icon.svg";
import {Text} from "@radix-ui/themes";
import {Cross1Icon, MinusIcon} from "@radix-ui/react-icons";

/**
 * Properties for the ChatbotOpenHeader component.
 * @interface ChatbotOpenHeaderProps
 * @property {(isOpen: boolean) => void} setIsOpen - Function to toggle the chatbot's open/closed state.
 * @property {boolean} isOpen - Current state of the chatbot (true if open, false if closed).
 */
export interface ChatbotOpenHeaderProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

/**
 * Properties for the ChatbotOpenHeader component.
 * @interface ChatbotOpenHeader
 * @property {(isOpen: boolean) => void} setIsOpen - Function to toggle the chatbot's open/closed state.
 * @property {boolean} isOpen - Current state of the chatbot (true if open, false if closed).
 */
export default function ChatbotOpenHeader(props: ChatbotOpenHeaderProps) {
    return (
        <div className="p-4 sm:mb-0 h-15  pt-0">
            <div className="flex justify-between place-content-start py-3 text-white">

                {/* Left section: Chat icon and title */}
                <div className="flex items-center">
                    <img src={chatIcon} alt="Chat Icon" className="size-8"/>
                    <Text className="px-2 font-bold " style={{fontSize: '16px'}}>
                        Customer Support
                    </Text>
                </div>

                {/* Right section: Minimize and close icons */}
                <div className="flex items-center pl-4">
                    <MinusIcon className="w-9 h-5 pr-2 text-gray-200 hover:text-blue-300" onClick={() => props.setIsOpen(!props.isOpen)} />
                    <Cross1Icon className="w-5 h-4 hover:text-blue-300" onClick={() => props.setIsOpen(!props.isOpen)} />
                </div>
            </div>
        </div>
    );
}