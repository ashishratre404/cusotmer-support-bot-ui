import React from "react";

export const FloatingChatButton = () => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      💬
    </button>
  );
};
