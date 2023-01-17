import RootLayout from "./shared/components/Layout/RootLayout"
import { Routes, Route } from "react-router-dom"
import {About, Contact, Home, Menu, News, NewsDetails} from "./pages/index";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/news-details" element={<NewsDetails/>}/>
      </Routes>
    </RootLayout>
  )
}

export default App
