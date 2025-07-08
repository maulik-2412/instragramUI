import { useState } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Drawer,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Button,
} from "@mui/material"
import {
  ArrowBack,
  MoreHoriz,
  FavoriteBorder,
  ChatBubbleOutline,
  Send,
  BookmarkBorder,
  Home,
  Search,
  Add,
  PlayArrow,
  Person,
} from "@mui/icons-material"



export default function Post() {
  const [commentsOpen, setCommentsOpen] = useState(false)

  const handleCommentsOpen = () => {
    setCommentsOpen(true)
  }

  const handleCommentsClose = () => {
    setCommentsOpen(false)
  }

  return (
    <Box
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        maxWidth: "100vw",
        mx: "auto",
        position: "relative",
      }}
    >
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "#000", boxShadow: "none" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <ArrowBack />
          </IconButton>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography variant="caption" sx={{ color: "#888", display: "block" }}>
              BOTSPACEHQ
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: -0.5 }}>
              Posts
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Post */}
      <Card sx={{ bgcolor: "#000", boxShadow: "none", border: "none" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#333", width: 32, height: 32 }}>
              <Add sx={{ fontSize: 16 }} />
            </Avatar>
          }
          title={
            <Typography variant="subtitle2" sx={{ color: "white", fontWeight: "bold" }}>
              botspacehq
            </Typography>
          }
          action={
            <IconButton sx={{ color: "white" }}>
              <MoreHoriz />
            </IconButton>
          }
          sx={{ pb: 1 }}
        />

        <CardMedia
          component="img"
          image="../public/Screenshot 2024-07-26 230800.png"
          alt="WhatsApp 3 Billion Users"
          sx={{
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />

        <CardActions sx={{ px: 2, py: 1, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "white", p: 0.5 }}>
              <FavoriteBorder />
            </IconButton>
            <Typography variant="caption" sx={{ color: "white", alignSelf: "center" }}>
              18
            </Typography>
            <IconButton sx={{ color: "white", p: 0.5, ml: 1 }} onClick={handleCommentsOpen}>
              <ChatBubbleOutline />
            </IconButton>
            <Typography variant="caption" sx={{ color: "white", alignSelf: "center" }}>
              0
            </Typography>
            <IconButton sx={{ color: "white", p: 0.5, ml: 1 }}>
              <Send />
            </IconButton>
          </Box>
          <IconButton sx={{ color: "white", p: 0.5 }}>
            <BookmarkBorder />
          </IconButton>
        </CardActions>

        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body2" sx={{ color: "white", lineHeight: 1.4 }}>
            <strong>botspacehq</strong> WhatsApp now connects 3 billion users, a milestone reflecting its influence in
            messaging. Thanks to Meta's strides in AI and business tools, WhatsApp not only enhances personal
            communication but also empowers businesses with robust AI features. Looking to ride this wave? BotSpace, a
            Meta Business Partner, helps your business shine on WhatsApp
          </Typography>
        </CardContent>
      </Card>

      {/* Bottom Navigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <BottomNavigation sx={{ bgcolor: "#000", borderTop: "1px solid #333" }}>
          <BottomNavigationAction icon={<Home />} sx={{ color: "white" }} />
          <BottomNavigationAction icon={<Search />} sx={{ color: "white" }} />
          <BottomNavigationAction icon={<Add />} sx={{ color: "white" }} />
          <BottomNavigationAction icon={<PlayArrow />} sx={{ color: "white" }} />
          <BottomNavigationAction icon={<Person />} sx={{ color: "white" }} />
        </BottomNavigation>
      </Box>

      {/* Comments Drawer */}
      <Drawer
        anchor="bottom"
        open={commentsOpen}
        onClose={handleCommentsClose}
        PaperProps={{
          sx: {
            bgcolor: "#1a1a1a",
            color: "white",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: "70vh",
            maxWidth: "400px",
            mx: "auto",
            
            transform: "translateX(-50%)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Comments Header */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Comments
            </Typography>
            <IconButton onClick={handleCommentsClose} sx={{ color: "white" }}>
              <Send />
            </IconButton>
          </Box>

          <Divider sx={{ bgcolor: "#333", mb: 2 }} />

          {/* Sample Comment */}
          <List sx={{ p: 0 }}>
            <ListItem sx={{ px: 0, alignItems: "flex-start" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#666", width: 32, height: 32 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      Username
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#888" }}>
                      Now
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" sx={{ color: "white", mt: 0.5 }}>
                      Price
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        color: "#888",
                        p: 0,
                        mt: 0.5,
                        textTransform: "none",
                        fontSize: "0.75rem",
                      }}
                    >
                      Reply
                    </Button>
                  </Box>
                }
              />
              <IconButton sx={{ color: "#888", p: 0.5 }}>
                <FavoriteBorder sx={{ fontSize: 16 }} />
              </IconButton>
            </ListItem>
          </List>

          {/* Emoji Reactions */}
          {/* <Box
            sx={{
              display: "flex",
              gap: 1,
              my: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {emojis.map((emoji, index) => (
              <Chip
                key={index}
                label={emoji}
                sx={{
                  bgcolor: "transparent",
                  border: "none",
                  fontSize: "1.2rem",
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              />
            ))}
          </Box> */}

          {/* Comment Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
            }}
          >
            <Avatar sx={{ bgcolor: "#333", width: 32, height: 32 }}>
              <Add sx={{ fontSize: 16 }} />
            </Avatar>
            <TextField
              placeholder="Add a comment for username..."
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#333",
                  color: "white",
                  borderRadius: 20,
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#888",
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}
