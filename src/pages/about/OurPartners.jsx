import { Container } from "react-bootstrap";
import NavMini from "../../components/navigations/NavMini";
import opimg1 from "../../assets/img/tomoko.png";
import { Helmet } from "react-helmet";

const OurPartners = () => {
  return (
    <Container id="partners" fluid>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Наши партнеры | Айболит</title>
        <meta
          name="description"
          content="Наши партнеры, страховые компании, ДМС | Айболит-детская медицинская служба"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          name="keywords"
          content="педиатр на дом, узкие специалисты на дом, айболит детская медицинская служба, герцина 68 стр 2, педиатр на дом томск, детский врач на дом, анализы на дому, вакцинация, патронаж новорожденных, программы наблюдения за ребенком"
        />
        <base href="https://aibolit.tom.ru/nashi-partnery" />
        <link rel="canonical" href="https://aibolit.tom.ru/nashi-partnery" />
      </Helmet>
      <div className="page-h1">
        <h1>Наши партнеры</h1>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <div>
          <a href="https://tomoko.ru/" target="_blank" rel="noreferrer">
            <img src={opimg1} alt="logo-tomoko" className="w-25 mb-3" />
          </a>
          <div className="w-75">
            <p className="text-sm-start lh-base fs-5">
              Основное направление деятельности Центра микрохирургии глаза
              «ТомОко» – офтальмологические услуги.{" "}
            </p>
            <p className="text-start lh-base fs-5">
              Центр микрохирургии глаза «ТомОко» оказывает медицинскую помощь
              населению и провидит лечебно-диагностические мероприятия без
              стационарного пребывания больных. Все услуги оказываются
              амбулаторно, используя принцип «хирургии одного дня». ​{" "}
            </p>{" "}
            <p className="text-start lh-base fs-5">
              Центр микрохирургии глаза «ТомОко» оснащен современным
              высокотехнологичным медицинским оборудованием, позволяющим
              проводить консультативный прием и осмотр пациентов всех возрастов,
              с различными видами глазных заболеваний.
            </p>{" "}
            <p className="text-start lh-base fs-5">
              {" "}
              ​ Для лечения Центр микрохирургии глаза использует только новейшие
              технологии, которые соответствуют самым высоким стандартам
              безопасности и качества.{" "}
            </p>
            <p className="fw-bold">Телефон: +7 (3822) 52-08-40</p>
            <a
              href="https://tomoko.ru"
              target="_blank"
              rel="noreferrer"
              className=" fs-4 fw-bold"
            >
              https://tomoko.ru
            </a>
          </div>
        </div>
        <NavMini />
      </Container>
    </Container>
  );
};

export default OurPartners;
