import { Container } from "react-bootstrap";
import BRimg2 from "../../assets/img/reklama2.png";
import { NavLink } from "react-router-dom";

const BlockReklama2 = () => {
  return (
    <Container
      id="blockreklamatwo"
      className="d-flex justify-content-center my-5"
    >
      <div className="block-reklama d-flex">
        <img src={BRimg2} alt="img-reklama " />
        <div className="blockback text-center px-5 py-3">
          <p>Программы наблюдения </p>
          <p>на дому за детьми</p>
          <NavLink to="/programmy-nablyudeniya-za-zdorovem">
            <button type="button" className="btn btn-outline-secondary">
              Подробнее
            </button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama2;
