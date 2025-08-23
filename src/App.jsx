import React, { useState } from "react";
import { FloatingChatButton } from "./components/FloatingChatButton";
import { ChatBox } from "./components/ChatBox";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && <FloatingChatButton onClick={handleChatToggle} />}

      {/* Chat window */}
      {isOpen && <ChatBox onClose={handleClose} />}
    </>
  );
}

export default App;
