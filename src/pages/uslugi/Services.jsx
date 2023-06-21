import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BlockReklama3 from "../../components/reklama/BlockReklama3";
import Simg1 from "../../assets/img/uslugi1.jpg";
import Simg2 from "../../assets/img/uslugi2.jpg";
import Simg3 from "../../assets/img/uslugi3.jpg";
import Simg4 from "../../assets/img/uslugi4.jpeg";
import Simg5 from "../../assets/img/uslugi5.jpg";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <Container fluid id="services">
      <Helmet>
        <title>Вызов педиатра на дом в Томске | Врач на дом | Айболит</title>
        <meta
          name="description"
          content="Услуги педиатра и врачей на дому. Анализы. Программы наблюдения за ребенком. Онлайн консультация педиатра. ВЫЗОВ ПЕДИАТРА. К вам приедет один из наших квалифицированных врачей педиатров. ВЫЗОВ УЗКОГО СПЕЦИАЛИСТА. Хирург, Невролог, Лор и другие. ЗАБОР АНАЛИЗОВ НА ДОМУ."
        />
        <meta
          name="keywords"
          content="вызов педиатра на дом Томск, педиатр на дом, детский врач на дом Томск, анализы на дому, программы наблюдения за ребенком, вызов платного педиатра на дом, лор, невролог на дом, консультация хирурга, хирург на дом, окулист, аллерголог, томск, патронаж новорожденного"
        />
        <link rel="canonical" href="https://aibolit.tom.ru/uslugi-i-ceny/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Вызов педиатра на дом в Томске | Врач на дом | Айболит"
        />
        <meta
          property="og:description"
          content="Услуги педиатра и врачей на дому. Анализы. Программы наблюдения за ребенком. Онлайн консультация педиатра. ВЫЗОВ ПЕДИАТРА. К вам приедет один из наших квалифицированных врачей педиатров. ВЫЗОВ УЗКОГО СПЕЦИАЛИСТА. Хирург, Невролог, Лор и другие. ЗАБОР АНАЛИЗОВ НА ДОМУ."
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/uslugi-i-ceny/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Услуги</h1>
      </div>
      <Container>
        <BlockReklama3 />
        <NavLink
          to="/uslugi-i-ceny/vyzov-pediatra-na-dom/"
          className="nav-link"
        >
          <div className="w-75 mb-3 p-3">
            <div className="text-center mb-2">
              <h2>Детский врач на дом</h2>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img
                  src={Simg1}
                  alt="foto-doctor"
                  title="Детский врач на дом"
                />
              </div>
              <div className="p-3">
                <p>
                  Услуга вызова детского врача на дом реализуется во всех
                  районах Томска и Томской области. Наши специалисты, педиатры
                  выезжают на дом к пациентам.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/uslugi-i-ceny/pediatr/" className="nav-link">
          <div className="w-75 mb-3 p-3">
            <div className="text-center mb-2">
              <h2>Консультация педиатра</h2>
            </div>

            <div className="d-flex  block-foto">
              <div>
                <img src={Simg2} alt="foto" title="Консультация педиатра" />
              </div>
              <div className="p-3">
                <p>
                  В детской службе "Айболит" работают опытные детские педиатры,
                  которые ведут прием детей от 0 до 18 лет. Вы можете обратиться
                  к педиатру по вопросу любого детского заболевания, а врач в
                  свою очередь проведет осмотр ребенка, назначит диагностику и
                  лечение или при необходимости направит к профильному
                  специалисту.
                </p>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/uslugi-i-ceny/medicinskie-spravki-rebenku/"
          className="nav-link"
        >
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h2>Медицинские справки ребенку </h2>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img
                  src={Simg4}
                  alt="foto"
                  title="Медицинские справки ребенку "
                />
              </div>
              <div className="p-3">
                <p>
                  На детская медицинская служба "Айболит" оказывает услуги по
                  оформлению справок для детских садов, школ, санаторного
                  лечения, бассейнов и др. Мы имеем соответствующую лицензию и
                  выдаем подлинные документы, заверенные подписями и печатями.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        {/* <NavLink to="/" className="nav-link"> */}
        <div className="w-75 mb-3 p-3">
          <div className="text-center mb-2">
            <h2>Консультация педиатра по телефону</h2>
          </div>

          <div className="d-flex  block-foto">
            <div>
              <img
                src={Simg5}
                alt="foto"
                title="Консультация педиатра по телефону<"
              />
            </div>
            <div className="p-3">
              <p>Разовая консультация педиатра</p>
            </div>
          </div>
        </div>
        {/* </NavLink> */}
        <div className="w-75 mb-3 p-3">
          <div className="text-center mb-2">
            <h2>Анализы</h2>
          </div>

          <div className="d-flex  block-foto">
            <div>
              <img src={Simg3} alt="foto" title="Анализы" />
            </div>
            <div className="p-3">
              <p>
                У нас можно сдать все виды анализов и получить результаты в
                самый короткий срок.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
export default Services;
