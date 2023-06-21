import { Container } from "react-bootstrap";
import BRimg1 from "../../assets/img/reklama.png";
import { NavLink } from "react-router-dom";

const BlockReklama1 = () => {
  return (
    <Container
      id="blockreklamaone"
      className="d-flex justify-content-center my-5"
    >
      <div className="block-reklama d-flex">
        <img src={BRimg1} alt="img-reklama " title="reklama" />
        <div className="blockback text-center px-5 py-3">
          <p>Медицинские документы</p>
          <p>Для школы, детского сада, ВУЗа</p>
          <NavLink
            to="/uslugi-i-ceny/medicinskie-spravki-rebenku/"
            className="nav-link"
          >
            <button type="button" className="btn btn-outline-secondary">
              Подробнее
            </button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama1;
