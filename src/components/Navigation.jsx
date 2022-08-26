import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ModalWindow from './ModalWindow';

const Navigation = () => {
  // const isAuth = true
  //   const isAdmin = true
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container fluid>
        <NavLink to="/" className="navbar-brand">
          Aibolit
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto">
            <NavLink to="/about" className="nav-link">
              О нас
            </NavLink>
            <NavLink to="/prices" className="nav-link">
              Цены
            </NavLink>
            <NavLink to="/programs" className="nav-link">
              Программы
            </NavLink>
            <NavLink to="/uslugi" className="nav-link">
              Услуги
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              Контакты
            </NavLink>
            {/* {isAuth ? (
                        <NavLink to="/user" className="nav-link">Личный кабинет</NavLink>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">Войти</NavLink>
                            <NavLink to="/signup" className="nav-link">Регистрация</NavLink>
                        </>
                    )}
                    {isAdmin && (
                        <NavLink to="/admin" className="nav-link">Панель управления</NavLink>
                    )} */}
          </Nav>
        </Navbar.Collapse>
        <ModalWindow />
      </Container>
    </Navbar>
  );
};
export default Navigation;
