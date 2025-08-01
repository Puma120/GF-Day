import Header from './components/Header'
import PhotoCarousel from './components/PhotoCarousel'
import MessageSection from './components/MessageSection'
import LoveLetter from './components/LoveLetter'
import FloatingHearts from './components/FloatingHearts'
import TestHearts from './components/TestHearts'
import './App.css'

function App() {
  return (
    <div className="app">
      <FloatingHearts />
      <TestHearts />
      <Header />
      
      <main className="main-content">
        <section className="carousel-section">
          <PhotoCarousel />
        </section>
        
        <MessageSection />
        
        <section className="letter-section">
          <LoveLetter />
        </section>
      </main>
      
      <footer className="romantic-footer">
        <p>Hecho con todo mi amor</p>
        <p>De camo camo camote jsjs</p>
      </footer>
    </div>
  )
}

export default App
