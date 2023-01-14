import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BRimg3 from "../../assets/img/programma_nablyudeniya_za_detmi.jpg";

const BlockReklama3 = () => {
  return (
    <Container
      id="blockreklamathree"
      className="d-flex justify-content-center my-5"
    >
      <div className="block-reklama d-flex">
        <div className="block-img">
          <img src={BRimg3} alt="img-reklama " className="" />
        </div>

        <div className="blockback text-center px-5 py-3">
          <NavLink
            to="/programmy-nablyudeniya-za-zdorovem"
            className="nav-link fs-5 mb-3"
          >
            Комплексные программы для детей
          </NavLink>
          <Nav>
            <NavLink
              to="/malysh-houm-standart-ot-0-do-2-h-le"
              className="nav-link"
            >
              "Малыш Хоум. Стандарт" от 0 до 2-х лет
            </NavLink>
            <NavLink
              to="/zdorovyj-rebenok-houm-standart-ot-2"
              className="nav-link"
            >
              "Здоровый ребенок Хоум. Стандарт" от 2-х лет
            </NavLink>
            <NavLink
              to="/zdorovyj-rebenok-houm-midi-ot-2-h-l"
              className="nav-link"
            >
              "Здоровый ребенок Хоум. Педиатр рядом" от 2-х лет
            </NavLink>
          </Nav>
        </div>
      </div>
    </Container>
  );
};

export default BlockReklama3;
