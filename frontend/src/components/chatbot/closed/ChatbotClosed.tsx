import {IconButton} from "@radix-ui/themes";
import chatIcon from "../assets/chat-icon.svg"

export interface ChatbotClosedProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

export default function ChatbotClosed(props: ChatbotClosedProps) {
    return (
        <div className="p-5">
            <IconButton className="rounded-full bg-stone-800 text-white p-2" onClick={() => props.setIsOpen(!props.isOpen)} >
                <img src={chatIcon} alt="Chat Icon" className="size-10 hover:size-10.5"/>
            </IconButton>
        </div>
    );
}