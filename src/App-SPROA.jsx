import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/header.jsx'
import Home from './Componentes/ladingpage/home.jsx'
import PageRacismo from './Componentes/racismo/page_racismo.jsx'
import PageTransfobia from './Componentes/transfobia/page_transfobia.jsx'
import PageMisoginia from './Componentes/misoginia/page_misoginia.jsx'
import PageHomofobia from './Componentes/homofobia/page_homofobia.jsx'
import PageComoAgir from './Componentes/como_agir/page_comoagir.jsx'
import Footer from './Componentes/footer.jsx'

function App() {


  return (
    <>
    <Router>
      <Header />
      
      <main>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/racismo" element={<PageRacismo />} />
        <Route path="/transfobia" element={<PageTransfobia />} />
        <Route path="/misoginia" element={<PageMisoginia />} />
        <Route path="/homofobia" element={<PageHomofobia />} />
        <Route path="/como-agir" element={<PageComoAgir />} />

        </Routes>
      </main>
      
      <Footer />
    </Router>
      
    </>
   

  )
}

export default App
  