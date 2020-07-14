import React, { useState, useRef } from "react";

import Draggable from "react-draggable";

import { BsFillChatDotsFill } from "react-icons/bs";

import messenger from "../assets/images/fb-messenger.svg";
import zalo from "../assets/images/zalo.png";
import Jello from "react-reveal/Jello";

function ChatBox() {
  const [isShowChat, setShow] = useState(false);
  const lhGroup = useRef(null);
  const drag = useRef(null);

  const setPosition = (x, y) => {
    const lh_group = lhGroup.current;
    lh_group.style.position = "fixed";
    lh_group.style.left = x + 66 + "px";
    lh_group.style.top = y + 4 + "px";
  };
  const handleDrag = (e, data) => {
    const position = data.node.getBoundingClientRect();
    setPosition(position.left, position.top);
  };
  const handleMouseDown = (e, data) => {
    const position = drag.current.getBoundingClientRect();
    setPosition(position.left, position.top);
    return setShow(!isShowChat);
  };

  return (
    <div>
      <Draggable
        handle=".handle"
        scale={1}
        onDrag={handleDrag}
        onMouseDown={handleMouseDown}
      >
        <div className="lien-he handle" ref={drag}>
          <Jello forever>
            <div
              style={{
                backgroundColor: "rgba(255, 82, 82, 1)",
                border: "1px solid black",
                borderRadius: "50%",
                padding: "6px 10px 8px 8px",
                cursor: "pointer",
                margin: "0 8px",
              }}
              title="Contact Us"
            >
              <BsFillChatDotsFill color="white" size={30}></BsFillChatDotsFill>
            </div>
          </Jello>
        </div>
      </Draggable>

      <div
        className="lien-he__group"
        style={{ display: isShowChat ? "block" : "none" }}
        ref={lhGroup}
      >
        <a
          href="https://zalo.me/"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat via Zalo"
        >
          <img src={zalo} className="button_icon" alt="Zalo"></img>
        </a>
        <a
          href="https://www.messenger.com/t/idi.gemmie"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat via Messenger"
        >
          <img src={messenger} className="button_icon" alt="fb-messenger"></img>
        </a>
      </div>
    </div>
  );
}

export default ChatBox;
