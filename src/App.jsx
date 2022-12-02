
import Blog from "./page/Blog";
import { Routes, Route } from "react-router-dom"
import ArticleDetail from "./page/ArticleDetail"

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path ="/articledetail/:slug" element={<ArticleDetail />} />
      </Routes>
    </>
  )
}

export default App
