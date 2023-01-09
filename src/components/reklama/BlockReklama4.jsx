import { Container } from "react-bootstrap";
import BRimg4 from "../../assets/img/reklama4.png";
import { NavLink } from "react-router-dom";

const BlockReklama4 = () => {
  return (
    <Container
      id="blockreklamafour"
      className="d-flex justify-content-center my-5"
    >
      <div className="block-reklama d-flex">
        <img src={BRimg4} alt={BRimg4} />
        <div className="blockback text-center px-5 py-3">
          <p>Вызов врача на ДОМ</p>
          <NavLink to="/vyzov-pediatra-na-dom">
            <button type="button" class="btn btn-outline-secondary">
              Подробнее
            </button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama4;
