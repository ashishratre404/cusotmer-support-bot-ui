import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Send as SendIcon,
  Close as CloseIcon,
  Support as SupportIcon,
  CloseFullscreen as MinimizeIcon,
} from "@mui/icons-material";

export const ChatBox = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you. How can I assist you today?",
      sender: "bot",
      timestamp: "17:55",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thanks for your message! I'll help you with that.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleHeaderClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        bottom: isMinimized ? 0 : 30,
        right: 30,
        width: 380,
        height: isMinimized ? 70 : 500,
        borderRadius: isMinimized ? "16px 16px 0 0" : 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        zIndex: 999,
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#4285f4",
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: isMinimized ? "pointer" : "default",
        }}
        onClick={handleHeaderClick}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            sx={{
              backgroundColor: "white",
              color: "#4285f4",
              width: 32,
              height: 32,
            }}
          >
            <SupportIcon fontSize="small" />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600 }}>
              Support Assistant
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              Online now
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton
            size="small"
            sx={{ color: "white", mr: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMinimize();
            }}
          >
            <MinimizeIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Messages Area */}
      {!isMinimized && (
        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.sender === "bot" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "#4285f4",
                        width: 24,
                        height: 24,
                      }}
                    >
                      <SupportIcon sx={{ fontSize: 14 }} />
                    </Avatar>
                  </Box>
                )}
                <Paper
                  elevation={1}
                  sx={{
                    p: 1.5,
                    backgroundColor:
                      msg.sender === "user" ? "#4285f4" : "white",
                    color: msg.sender === "user" ? "white" : "black",
                    borderRadius: 2,
                    borderTopLeftRadius: msg.sender === "bot" ? 0.5 : 2,
                    borderTopRightRadius: msg.sender === "user" ? 0.5 : 2,
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Paper>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    mt: 0.5,
                    fontSize: "0.7rem",
                  }}
                >
                  {msg.timestamp}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Input Area */}
      {!isMinimized && (
        <Box
          sx={{
            p: 2,
            backgroundColor: "white",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="flex-end">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              size="small"
              multiline
              maxRows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#f8f9fa",
                },
              }}
            />
            <IconButton
              onClick={handleSendMessage}
              disabled={!message.trim()}
              sx={{
                backgroundColor: "#4285f4",
                color: "white",
                "&:hover": {
                  backgroundColor: "#3367d6",
                },
                "&:disabled": {
                  backgroundColor: "#e0e0e0",
                  color: "#9e9e9e",
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </Box>
      )}
    </Paper>
  );
};
