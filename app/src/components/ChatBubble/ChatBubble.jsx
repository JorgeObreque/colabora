import React from "react";
import "./ChatBubble.css";

const ChatBubble = ({ text }) => {
  return (
    <div className="position-relative p-3 bg-white  rounded chatbubble-main my-2">
      <p className="mb-0">{text}</p>
    </div>
  );
};

export default ChatBubble;