import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import background from '../assets/img/img-home.jpg';
// import ModalCallback from '../components/ModalCallback';
// import img1 from '../assets/img/home.png';
// import img2 from '../assets/img/calling.png';
// import img3 from '../assets/img/analyzes.png';
import img4 from '../assets/img/foto.jpeg';
import BlockAdvantages from '../components/home/BlockAdvantages';
import BlockDoctors from '../components/home/BlockDoctors';
import BlockContacts from '../components/home/BlockContacts';
import BlockImg from '../components/home/BlockImg';
import BlockInfo from '../components/home/BlockInfo';

const Home = () => {
  return (
    <Container fluid id="home">
      <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
};
export default Home;
