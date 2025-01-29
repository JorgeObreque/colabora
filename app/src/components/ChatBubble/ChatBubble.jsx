import React from "react";
import "./ChatBubble.css";

const ChatBubble = ({ text }) => {
  return (
    <div className="position-relative p-3 bg-white  rounded chatbubble-main my-2">
      <p className="mb-0">{text}</p>
      {/* <div
        className="position-absolute"
        style={{
          bottom: "-10px",
          left: "20px",
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid #FFFFFF"
        }}
      ></div> */}
    </div>
  );
};

export default ChatBubble;