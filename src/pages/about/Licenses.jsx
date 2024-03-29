import { Container } from "react-bootstrap";
import NavMini from "../../components/navigations/NavMini";
import Limg1 from "../../assets/img/Лицензия1.jpg";
import Limg2 from "../../assets/img/Лицензия2.jpg";
import Limg3 from "../../assets/img/Лицензия3.jpg";
import { Helmet } from "react-helmet";

const Licenses = () => {
  return (
    <Container fluid id="licenses">
      <Helmet>
        <title>Лицензии | Айболит</title>
        <meta
          name="description"
          content="Информация для пациентов. Лицензии | Айболит"
        />

        <meta
          name="keywords"
          content="лицензии айболит, клиник айболит томск, врачи на дом"
        />
        <link rel="canonical" href="https://aibolit.tom.ru/o-nas/licenzii/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta property="og:title" content="Правовая информация | Айболит" />
        <meta property="og:description" content="Лицензии | Айболит" />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/o-nas/licenzii/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Лицензии</h1>
      </div>
      <Container className="d-flex justify-content-between mt-4 position-block ">
        <div className="text-center">
          <a href="https://aibolit.tom.ru/assets/d045dd0db2d13b5a7ed2.jpg">
            <img src={Limg1} alt="licenses1" className="m-2" title="Лицензия" />
          </a>
          <a href="https://aibolit.tom.ru/assets/10507da3e4940afaf9f3.jpg">
            <img src={Limg2} alt="licenses2" className="m-2" title="Лицензия" />
          </a>
          <a href="https://aibolit.tom.ru/assets/2d0d924c3f6263ce90b0.jpg">
            <img src={Limg3} alt="licenses3" className="m-2" title="Лицензия" />
          </a>
        </div>
        <NavMini />
      </Container>
    </Container>
  );
};

export default Licenses;
