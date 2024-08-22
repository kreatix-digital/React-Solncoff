import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import './style.css'
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
  )
}

