import React, { useState } from "react";

export const ChatBox = () => {
  const [message, setMessage] = useState("");
  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        Support Assistant
      </div>

      {/* Messages area */}
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
        }}
      >
        <p>
          <b>Bot:</b> Hi! How can I help you today?
        </p>
      </div>

      {/* Input area */}
      <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ width: "75%", padding: "5px" }}
        />
        <button
          onClick={() => {
            console.log("User message:", message);
            setMessage("");
          }}
          style={{ width: "20%", marginLeft: "5px" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
