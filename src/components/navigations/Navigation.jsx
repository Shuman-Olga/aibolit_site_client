import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // const isAuth = true
  //   const isAdmin = true
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto ">
            <NavLink
              to="/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Главная
            </NavLink>
            <NavLink
              to="/o-nas/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              О нас
            </NavLink>
            <NavLink
              to="/doctors/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Педиатры
            </NavLink>
            <NavLink
              to="/prices/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Цены
            </NavLink>
            <NavLink
              to="/programmy-nablyudeniya-za-zdorovem/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Программы
            </NavLink>
            <NavLink
              to="/uslugi-i-ceny/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Услуги
            </NavLink>
            <NavLink
              to="/blog/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Блог
            </NavLink>
            <NavLink
              to="/kontakty/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              Контакты
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
