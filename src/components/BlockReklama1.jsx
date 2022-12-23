import { Container } from 'react-bootstrap';
import BRimg1 from '../assets/img/reklama.png';

const BlockReklama1 = () => {
  return (
    <Container id="blockreklamaone" className="d-flex justify-content-center my-5">
      <div className="block-reklama d-flex">
        <img src={BRimg1} alt="img-reklama " />
        <div className="blockback text-center px-5 py-3">
          <p>Медицинские документы</p>
          <p>Для школы, детского сада, ВУЗа</p>
          <button type="button" class="btn btn-outline-secondary">
            Подробнее
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama1;
