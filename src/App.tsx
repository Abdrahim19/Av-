import Navbar from './components/Header/Navbar';
import Hero from './pages/Home/Hero';
import Heilighta_App from './pages/Home/Heilighta_App';
import Requests from './pages/Home/dérniéres/Requests';




function App() {
  return (
    <main className='W-full over-flow-hiiden'>
      <Navbar />
      <Hero />
      <Heilighta_App />
      <Requests />
    </main>
  )
}

export default App
