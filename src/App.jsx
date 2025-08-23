import React, { useState } from "react";
import { FloatingChatButton } from "./components/FloatingChatButton";
import { ChatBox } from "./components/ChatBox";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating chat button */}
      <FloatingChatButton />

      {/* Chat window */}
      {isOpen && <ChatBox />}
    </>
  );
}

export default App;
