import { Container } from 'react-bootstrap';
import BRimg2 from '../assets/img/reklama2.png';

const BlockReklama2 = () => {
  return (
    <Container id="blockreklamatwo" className="d-flex justify-content-center my-5">
      <div className="block-reklama d-flex">
        <img src={BRimg2} alt="img-reklama " />
        <div className="blockback text-center px-5 py-3">
          <p>Программы наблюдения </p>
          <p>на дому за детьми</p>
          <button type="button" class="btn btn-outline-secondary">
            Подробнее
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama2;
