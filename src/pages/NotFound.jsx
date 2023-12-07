import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Helmet>
        <title>404</title>
      </Helmet>
      <p>Упс! Такой страницы нет</p>
      <NavLink
        to="/"
        className="nav-link"
        target="_top"
        rel="noopener noreferrer"
      >
        На главную
      </NavLink>
    </Container>
  );
};
export default NotFound;
