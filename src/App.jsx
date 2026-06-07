import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChooseWorld from './components/ChooseWorld'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPortfolio from './components/VideoPortfolio'
import GraphicPortfolio from './components/GraphicPortfolio'

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ChooseWorld />
            <Skills />
            <About />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/video" element={<VideoPortfolio />} />
        <Route path="/graphic" element={<GraphicPortfolio />} />
      </Routes>
    </main>
  )
}

export default App