import React, { useState } from "react";
import PaymentsModal from "./PaymentsModal";
import "./Buttons.css";

export default function Buttons() {
  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });

  const handleButtonClick = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            handleButtonClick("/send.mp3");
            setModalState({ type: "send", open: "true" });
          }}
        >
          Send
        </button>
        <button
          className="button"
          onClick={() => {
            handleButtonClick("/receive.mp3");
            setModalState({ type: "receive", open: "true" });
          }}
        >
          Receive
        </button>
      </div>
      <PaymentsModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
}
