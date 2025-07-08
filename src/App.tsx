import Post from "./pages/Post"
import Chat from "./pages/Chat"
import { BrowserRouter,Routes,Route } from "react-router"

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Post/>}></Route>
      <Route path="/chat" element={<Chat/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}