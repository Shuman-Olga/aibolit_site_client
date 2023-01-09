import { Container } from "react-bootstrap";
import NavMini from "../../components/navigations/NavMini";
import Limg1 from "../../assets/img/Лицензия1.jpg";
import Limg2 from "../../assets/img/Лицензия2.jpg";
import Limg3 from "../../assets/img/Лицензия3.jpg";
const Licenses = () => {
  return (
    <Container fluid id="licenses">
      <div className="page-h1">
        <h1>Лицензии</h1>
      </div>
      <Container className="d-flex justify-content-between mt-4 position-block ">
        <div className="text-center">
          <a href="../static/media/Лицензия1.d045dd0db2d13b5a7ed2.jpg">
            <img src={Limg1} alt="licenses1" className="m-2" />
          </a>
          <a href="../static/media/Лицензия2.10507da3e4940afaf9f3.jpg">
            <img src={Limg2} alt="licenses2" className="m-2" />
          </a>
          <a href="../static/media/Лицензия3.2d0d924c3f6263ce90b0.jpg">
            <img src={Limg3} alt="licenses3" className="m-2" />
          </a>
        </div>
        <NavMini />
      </Container>
    </Container>
  );
};

export default Licenses;
