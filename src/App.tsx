import Navbar from './components/Header/Navbar';
import Container from 'react-bootstrap/Container';
import Hero from './pages/Home/Hero';
import Heilighta_App from './pages/Home/Heilighta_App';
import Requests from './pages/Home/dérniéres/Requests';




function App() {
  return (
    <Container className='py-3' fluid="lg">
      <Navbar />
      <Hero />
      <Heilighta_App />
      <Requests />
    </Container>
  )
}

export default App
