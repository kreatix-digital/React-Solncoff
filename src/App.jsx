import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import './style.css'
import { Routes, Route } from "react-router-dom";
import { Portfolio } from './pages/Portfolio';

export default function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  )
}

