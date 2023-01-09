import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // const isAuth = true
  //   const isAdmin = true
  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="mr-auto ">
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
            <NavLink to="/contacts" className="nav-link">
              Контакты
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
