import { Container, Row, Col } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import Navigation from './Navigation';

const Header = () => {
  return (
    <Container fluid>
      {/* <Row>
        <Col md={6}> */}
      <Navigation />
      {/* </Col>
        <Col md={{ span: 3, offset: 3 }}> */}

      {/* </Col>
      </Row> */}
    </Container>
  );
};
export default Header;
