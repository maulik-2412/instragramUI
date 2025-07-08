

import type React from "react"
import { useState } from "react"
import { Box, TextField, IconButton, Typography, Paper, Avatar, InputAdornment } from "@mui/material"
import { ArrowBack, Phone, Videocam, CameraAlt, Image, Add, Send } from "@mui/icons-material"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! I'm so happy you're here, thanks so much for your interest 😊",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Click below and I'll send you the link in just a sec ✨",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Send me the link",
      sender: "user",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInputValue("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <Box
      sx={{
        
        mx: "auto",
        bgcolor: "#000",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
          1:37
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 0.25 }}>
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 4,
                  height: 12,
                  bgcolor: "white",
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
          <Box sx={{ ml: 0.5 }}>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path
                d="M1 5.5L5 9.5L13 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              width: 24,
              height: 12,
              border: "1px solid white",
              borderRadius: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 8,
                bgcolor: "white",
                borderRadius: 0.5,
                position: "absolute",
                top: 1,
                left: 1,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Chat Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #333",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton sx={{ color: "white", p: 0 }}>
            <ArrowBack />
          </IconButton>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "#666",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            B
          </Avatar>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "white" }}>
            botspacehq
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "white" }}>
            <Phone />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Videocam />
          </IconButton>
        </Box>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          px: 2,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto",
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                maxWidth: "80%",
              }}
            >
              {message.sender === "bot" && (
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: "#666",
                    fontSize: "10px",
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  B
                </Avatar>
              )}
              <Paper
                sx={{
                  px: 2,
                  py: 1.5,
                  borderRadius: 4,
                  bgcolor: message.sender === "user" ? "#1976d2" : "#333",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <Typography variant="body2">{message.text}</Typography>
              </Paper>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          px: 2,
          py: 2,
          borderTop: "1px solid #333",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#333",
                borderRadius: 6,
                color: "white",
                "& fieldset": {
                  borderColor: "#555",
                },
                "&:hover fieldset": {
                  borderColor: "#777",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#999",
                opacity: 1,
              },
            }}
            InputProps={{
              endAdornment: inputValue.trim() ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={sendMessage}
                    sx={{
                      bgcolor: "#1976d2",
                      color: "white",
                      width: 32,
                      height: 32,
                      "&:hover": {
                        bgcolor: "#1565c0",
                      },
                    }}
                  >
                    <Send sx={{ fontSize: 16 }} />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
          />
          {!inputValue.trim() && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <IconButton sx={{ color: "#999" }}>
                <CameraAlt />
              </IconButton>
              <IconButton sx={{ color: "#999" }}>
                <Image />
              </IconButton>
              <IconButton sx={{ color: "#999" }}>
                <Add />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
