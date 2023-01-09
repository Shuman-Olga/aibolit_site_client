import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/aibolit_logo.png";
import Navigation from "./navigations/Navigation";
import ModalCalling from "./modalWindows/ModalCalling";

const Header = () => {
  return (
    <Container fluid id="header">
      <div className="container my-3 d-flex align-items-center justify-content-around">
        <div className="block-logo">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo-aibolit" className="img-fluid img-logo" />
          </NavLink>
          <p>г. Томск, ул. Герцена 68, строение 2</p>
        </div>
        <div>
          <p className="phone"> +7 (3822) 60-92-43</p>
          <p className="date">
            Пн-пт: 08:00 - 20:00
            <br /> Суб: 09:00 - 15:00
          </p>
        </div>
        <div>
          <ModalCalling />
        </div>
      </div>
      <Navigation />
    </Container>
  );
};
export default Header;
