import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [scrollVisible, setScrollVisible] = useState(false);

  const handleScroll = () => {
    setScrollVisible(window.pageYOffset > 100);
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1.5rem",
        zIndex: 1000,
        display: scrollVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(25, 0, 255, 0.22)",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
        transition: "opacity 0.3s ease",
      }}
    >
      <IconButton
        onClick={toTop}
        aria-label="Scroll to top"
        sx={{
          color: "#000",
          "&:hover": {
            color: "#302ce9",
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}
