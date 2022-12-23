import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <AppRouter />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
