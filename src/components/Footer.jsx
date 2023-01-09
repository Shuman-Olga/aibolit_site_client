import { Container, Nav } from "react-bootstrap";
import logo from "../assets/img/aibolit_logo.png";
import { NavLink } from "react-router-dom";
import ModalCallback from "./modalWindows/ModalCallback";
import vkimg from "../assets/img/vk-img.png";

const Footer = () => {
  return (
    <Container id="footer" fluid className="d-flex justify-content-around">
      <div className="block-1">
        <h3 className="mb-5">О Айболите</h3>
        <Nav className="flex-column mt-3">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
          <NavLink to="/o-nas" className="nav-link">
            О нас
          </NavLink>
          <NavLink to="/prices" className="nav-link">
            Цены
          </NavLink>
          <NavLink
            to="/programmy-nablyudeniya-za-zdorovem"
            className="nav-link"
          >
            Программы
          </NavLink>
          <NavLink to="/uslugi-i-ceny" className="nav-link">
            Услуги
          </NavLink>
          <NavLink to="/kontakty" className="nav-link">
            Контакты
          </NavLink>
        </Nav>
      </div>
      <div className="text-center">
        <img src={logo} alt="logo" className="w-25 img mb-4" />
        <a href="mailto:aibolittom70@gmail.com" target="_self" className="fs-4">
          <p className="email">aibolittom70@gmail.com</p>
        </a>
        <p className="adress">г. Томск, ул. Герцена 68, строение 2</p>
        <a href="https://vk.com/aibolittomsk">
          <img src={vkimg} alt="logo-vk" className="img-vk mt-4" />
        </a>
      </div>
      <div className="block-3">
        <h3 className="mb-5">Свяжитесь с нами</h3>
        <div className="my-5 text-center">
          <a href="tel:+7 (3822) 60-92-43">
            <p className="phone fs-4">+7 (3822) 60-92-43</p>
          </a>
        </div>
        <div className="mt-3">
          <ModalCallback />
        </div>
      </div>
    </Container>
  );
};
export default Footer;
