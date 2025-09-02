import { useState } from "react";
import { query } from "../api/index.js";

export const useQueryApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you. How can I assist you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const sendQuery = async (message) => {
    setLoading(true);
    setError(null);

    try {
      const response = await query(message);
      handleAddMessage(response, "bot");
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = (msg = "", sender = "bot") => {
    if (msg.trim()) {
      handleAddMessage(msg, sender);
      sendQuery(msg);
    }
    setMessage("");
  };

  const handleAddMessage = (msg = "", sender = "bot") => {
    if (msg.trim()) {
      const newMsg = {
        id: Date.now() + 1,
        text: msg || "Thanks for your message! I'll help you with that.",
        sender: sender,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, newMsg]);
    }
  };

  return {
    sendQuery,
    loading,
    error,
    messages,
    handleSendMessage,
    message,
    setMessage,
  };
};
