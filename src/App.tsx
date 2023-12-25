import Navbar from './components/Header/Navbar';
import Hero from './pages/Home/hero/Hero';
import './index.css'


function App() {
  return (
    <main className='h-100'>
    <div style={{ overflowX: 'hidden' }} className='d-flex d-flex flex-column gap-4 justify-content-between h-screen'>
      <div className='container-lg py-4'> 
      <Navbar />
      </div>
      <Hero />
    </div>
    </main>
  )
}

export default App
