import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className>
      <Header />
        <main className='py-3'> 
        <Container>
          <h1>Welcome to the frontend!!</h1>
        </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;
