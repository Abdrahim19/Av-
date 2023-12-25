import Navbar from './components/Header/Navbar';
import Hero from './pages/Home/hero/Hero';
import Heilighta_App from './pages/Home/heilighta_App/Heilighta_App';





function App() {
  return (
    <main className='overflow-hidden'>
      <div className='container-lg py-4'> 
      <Navbar />
      </div>
      <Hero />
      <Heilighta_App />
    </main>
  )
}

export default App
