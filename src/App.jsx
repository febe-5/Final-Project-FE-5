import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App