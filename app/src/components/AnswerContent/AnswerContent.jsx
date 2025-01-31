import ChatBubble from "../ChatBubble/ChatBubble";
import { FaRegUser } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
const AnswerContent = () =>{
    const data = {
        text        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        solveText   : "Si, la empresa solucionó mi problema"
    }
    return (
        <>
            <div className="d-flex justify-content-between py-4 px-4">
                <div className="claim text-start">
                    <b>La persona reclamó:</b>
                    <ChatBubble text={data.text}/>
                    <FaRegUser size={"3em"} />
                </div>
                <div className="mt-5 answer text-start d-flex flex-column align-items-end">
                    <b>Banco Falabella respondió</b> 
                    <ChatBubble text={data.text}/>
                    <FaHeadset size={"3em"}/>
                </div>
            </div>
            <div className="d-flex justify-content-between py-4 px-4">
                <div className="claim text-start">
                    <b>¿La empresa resolvió el problema?</b>
                    <ChatBubble text={data.solveText}/>
                    <FaRegUser size={"3em"} />
                </div>
            </div>
        </>
        
    );
}

export default AnswerContent;
