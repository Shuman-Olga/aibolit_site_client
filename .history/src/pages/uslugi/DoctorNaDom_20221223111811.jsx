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
        <div>
          <p>
Если вам нужен хороший детский педиатр на дом, обращайтесь в Детскую медицинскую службу "Айболит". Специалисты медицинской службы окажут своевременную квалифицированную помощь. Они имеют многолетний опыт работы и несут полную ответственность за здоровье юных пациентов.</p>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorNaDom;
