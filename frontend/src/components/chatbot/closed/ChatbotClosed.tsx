import {IconButton} from "@radix-ui/themes";
import chatIcon from "../assets/chat-icon.svg"


/**
 * Properties for the ChatbotClosed component.
 * @interface ChatbotClosedProps
 * @property {(isOpen: boolean) => void} setIsOpen - Function to toggle the chatbot's open/closed state.
 * @property {boolean} isOpen - Current state of the chatbot (true if open, false if closed).
 */
export interface ChatbotClosedProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

/**
 * ChatbotClosed component.
 * Displays a button that toggles the chatbot's open/closed state.
 *
 * @param {ChatbotClosedProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered ChatbotClosed component.
 */
export default function ChatbotClosed(props: ChatbotClosedProps) {
    return (
        <div className="p-5">

            {/* IconButton with a chat icon that toggles the chatbot's state when clicked */}
            <IconButton className="rounded-full bg-stone-800 text-white p-2" onClick={() => props.setIsOpen(!props.isOpen)} >

                {/* Chat icon image, about a penny in size. Sligthly grows in size upon hover. */}
                <img src={chatIcon} alt="Chat Icon" className="size-10 hover:size-10.5"/>

            </IconButton>
        </div>
    );
}