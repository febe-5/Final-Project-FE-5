import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/articledetail/:slug" element={<ArticleDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App