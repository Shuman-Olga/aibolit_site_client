import { Container } from 'react-bootstrap';
import BlockReklama3 from '../../components/BlockReklama3';

const DoctorNaDom = () => {
  return (
    <Container fluid id="doctornadom">
      <div className="page-h1">
        <h1>Вызов педиатра на дом</h1>
      </div>
      <Container>
        <BlockReklama3 />
      </Container>
    </Container>
  );
};

export default DoctorNaDom;
