import React from "react";
import { Fab } from "@mui/material";
import { Chat } from "@mui/icons-material";

export const FloatingChatButton = ({ onClick }) => {
  return (
    <Fab
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        backgroundColor: "#4285f4",
        color: "white",
        width: 60,
        height: 60,
        "&:hover": {
          backgroundColor: "#3367d6",
        },
        transition: "all 0.3s ease-in-out",
        zIndex: 2147483647,
      }}
    >
      <Chat sx={{ fontSize: 28 }} />
    </Fab>
  );
};
