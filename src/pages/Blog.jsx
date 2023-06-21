import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Bimg1 from "../assets/img/nevrolog_na_dom.jpg";
import Bimg2 from "../assets/img/kalendar_vakcinacii.jpg";
import Bimg3 from "../assets/img/hirurg_na_dom.jpg";
import Bimg4 from "../assets/img/patronaj.jpg";
import Bimg5 from "../assets/img/deti_sad.jpg";

const Blog = () => {
  return (
    <Container fluid id="blog">
      <Helmet>
        <title>Блог | Айболит-детская медицинская служба</title>
        <meta
          name="description"
          content="В блоге мы расскажем о том что делает детский  врач когда приезжает на дом. О вакцинации. О все о заботе о малыше. "
        />
        <meta
          name="keywords"
          content="вызов, лор, невролога, педиатр, хирурга, гастроэнтеролога, на дом, платно, обслуживание, патронаж новорожденного, Томск"
        />
        <link rel="canonical" href="https://aibolit.tom.ru/blog/" />
        <meta
          property="og:title"
          content="Блог | Айболит-детская медицинская служба"
        />
        <meta
          property="og:description"
          content="В блоге мы расскажем о том что делает детский  врач когда приезжает на дом. О вакцинации. О все о заботе о малыше. "
        />
        <meta property="og:url" content="https://aibolit.tom.ru/blog/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
      </Helmet>
      <div className="page-h1">
        <h1>Блог</h1>
      </div>
      <Container className="my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col">
            <NavLink to="/post/detskij-nevrolog-na-dom/" className="nav-link">
              <div className="card">
                <img
                  src={Bimg1}
                  className="card-img-top"
                  alt="nevrolog_na_dom"
                  title="Детский невролог на дом"
                />
                <div className="card-body">
                  <h5 className="card-title">Детский невролог на дом</h5>
                  <p align="justify" className="card-text">
                    Детский врач-невролог занимается диагностикой, лечением и
                    профилактикой заболеваний, функциональных нарушений и
                    аномалий развития периферической (нервные волокна) и
                    центральной нервной системы (головной и спинной мозг)
                    ребенка.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/post/klendar-vakcinacija/" className="nav-link">
              <div className="card">
                <img
                  src={Bimg2}
                  className="card-img-top"
                  alt="kalendar_vakcinacii"
                  title="Календарь вакцинаций"
                />
                <div className="card-body">
                  <h5 className="card-title">Календарь вакцинаций</h5>
                  <p align="justify" className="card-text">
                    Вакцинация детей в возрасте до 18 лет, согласно действующему
                    национальному календарю профилактических прививок и
                    календарю профилактических прививок по эпидпоказаниям
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/post/detskij-hirurg-na-dom/" className="nav-link">
              <div className="card ">
                <img
                  src={Bimg3}
                  className="card-img-top"
                  alt="hirurg_na_dom"
                  title="Детский хирург на дом"
                />
                <div className="card-body">
                  <h5 className="card-title">Детский хирург на дом</h5>
                  <p align="justify" className="card-text">
                    Хирург занимается диагностикой, и лечением заболеваний,
                    пороков и аномалий развития, требующих оперативного
                    хирургического вмешательства, у детей и подростков.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/post/patronaj_novorojdennogo/" className="nav-link">
              <div className="card">
                <img
                  src={Bimg4}
                  className="card-img-top"
                  alt="patronaj_novorojdennogo"
                  title="Патронаж новорожденного ребёнка"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Патронаж новорожденного ребёнка
                  </h5>
                  <p align="justify" className="card-text">
                    Очень важно, чтобы маленького человека, только что
                    появившегося на свет, окружали забота и любовь. Не менее
                    важно, чтобы за его правильным развитием следили
                    квалифицированные специалисты.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink
              to="/post/adaptaciya_k_detskomu_sadu/"
              className="nav-link"
            >
              <div className="card">
                <img
                  src={Bimg5}
                  className="card-img-top"
                  alt="adaptaciya_k_detskomu_sadu"
                  title="Адаптация к детскому саду"
                />
                <div className="card-body">
                  <h5 className="card-title">Адаптация к детскому саду</h5>
                  <p align="justify" className="card-text">
                    По какой причине детям сложно привыкнуть к саду и как
                    взрослые могут поддержать их?
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </Container>
    </Container>
  );
};
export default Blog;
