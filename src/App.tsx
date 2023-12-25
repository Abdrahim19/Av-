import { Container } from 'react-bootstrap';
import Navbar from './components/Header/Navbar';
import Hero from './pages/Home/Hero';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import Heilighta_App from './pages/Home/Heilighta_App';
// import Requests from './pages/Home/dérniéres/Requests';




function App() {
  return (
    <main className='overflow-hidden'>
      <Container fluid='lg py-4'>
      <Navbar />
      </Container>
      <Hero />
    </main>
  )
}

export default App
