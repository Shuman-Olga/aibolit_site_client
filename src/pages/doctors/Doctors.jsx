import { Container } from "react-bootstrap";
import BDimg1 from "../../assets/img/Sadovnikova_Elena_Gennadevna.png";
import BDimg2 from "../../assets/img/Petuhova_Olga_Viktorovna_vrach.png";
import BDimg3 from "../../assets/img/Shevchenko_Anastasiya_Nikolaevna_vrach_1.png";
import BDimg4 from "../../assets/img/Ostrouhova_Natalya_Petrovna.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlockReklama3 from "../../components/reklama/BlockReklama3";

const Doctors = () => {
  return (
    <Container fluid id="doctors">
      <Helmet>
        <title>Наши педиатры. детская медицинская служба Айболит</title>
        <meta
          name="description"
          content="Педиатры в детской медицинской службе Айболит. Педиатр на дом"
        />
        <meta
          name="keywords"
          content="садовникова елена геннадьевна, остроухова наталья петровна, шевченко анастасия николаевна, петухова ольга викторовна, педиатр на дом томск, детский врач на дом, вызов платного педиатра, программы наблюдения за ребенком, вызвать педиатра"
        />

        <link rel="canonical" href="https://aibolit.tom.ru/doctors/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Педиатры в детской медицинской службе Айболит. Педиатр на дом"
        />
        <meta
          property="og:description"
          content="Педиатры в детской медицинской службе Айболит. Педиатр на дом. Наблюдение детей на дому, врач на дом"
        />
        <meta property="og:url" content="https://aibolit.tom.ru/doctors/" />
      </Helmet>
      <div className="page-h1">
        <h1>Наши педиатры</h1>
      </div>
      <div className="container text-start">
        <div className="row  mt-5  justify-content-evenly  ">
          <div className="col-4">
            <div className="card  h-100">
              <NavLink
                to="/doctors/sadovnikova-elena-gennadevna/"
                className="nav-link"
                target="_top"
                rel="noopener noreferrer"
              >
                <img
                  src={BDimg1}
                  className="card-img-top"
                  alt="sadovnikova"
                  title="Садовникова Елена Геннадьевна"
                />
              </NavLink>
              <div className="card-body">
                <NavLink
                  to="/doctors/sadovnikova-elena-gennadevna/"
                  className="nav-link"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  <div className="fw-bold fs-5 text-name">
                    <p className="mb-0">Садовникова</p>
                    <p className="mb-0">Елена</p>
                    <p className="mb-2">Геннадьевна​</p>
                  </div>
                </NavLink>
                <div>
                  <p className="mb-0 mb-1">Врач - педиатр</p>
                  <p className="mb-0 mb-1">Врач - аллерголог</p>
                  <p className="mb-0 mb-1">Ведет прием на дому</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card  h-100">
              <NavLink
                to="/doctors/petuhova-olga-viktorovna/"
                className="nav-link"
                target="_top"
                rel="noopener noreferrer"
              >
                <img
                  src={BDimg2}
                  className="card-img-top"
                  alt="petuhova"
                  title="Петухова Ольга Викторовна"
                />
              </NavLink>
              <div className="card-body">
                <NavLink
                  to="/doctors/petuhova-olga-viktorovna/"
                  className="nav-link"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  <div className="fw-bold fs-5 text-name">
                    <p className="mb-0">Петухова</p>
                    <p className="mb-0">Ольга</p>
                    <p className="mb-2">Викторовна</p>
                  </div>
                </NavLink>
                <div>
                  <p className="mb-0 mb-1">Врач - педиатр</p>
                  <p className="mb-0 mb-1">Ведет прием на дому</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly my-5">
          <div className="col-4">
            <div className="card  h-100">
              <NavLink
                to="/doctors/shevchenko-anastasiya-nikolaevna/"
                className="nav-link"
                target="_top"
                rel="noopener noreferrer"
              >
                <img
                  src={BDimg3}
                  className="card-img-top"
                  alt="shevchenko"
                  title="Шевченко Анастасия Николаевна"
                />
              </NavLink>
              <div className="card-body">
                <NavLink
                  to="/doctors/shevchenko-anastasiya-nikolaevna/"
                  className="nav-link"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  <div className="fw-bold fs-5 text-name">
                    <p className="mb-0">Шевченко</p>
                    <p className="mb-0">Анастасия</p>
                    <p className="mb-2">Николаевна</p>
                  </div>
                </NavLink>
                <div>
                  <p className="mb-0 mb-1">Врач - педиатр</p>
                  <p className="mb-0 mb-1">Врач - неонатолог</p>
                  <p className="mb-0 mb-1">Ведет прием на дому</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card  h-100">
              <NavLink
                to="/doctors/ostrouhova-natalya-petrovna/"
                className="nav-link"
                target="_top"
                rel="noopener noreferrer"
              >
                <img
                  src={BDimg4}
                  className="card-img-top"
                  alt="ostrouhova"
                  title="Остроухова Наталья Петровна"
                />
              </NavLink>
              <div className="card-body">
                <NavLink
                  to="/doctors/ostrouhova-natalya-petrovna/"
                  className="nav-link"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  <div className="fw-bold fs-5 text-name">
                    <p className="mb-0">Остроухова</p>
                    <p className="mb-0">Наталья</p>
                    <p className="mb-2">Петровна</p>
                  </div>
                </NavLink>
                <div>
                  <p className="mb-0 mb-1">Врач - педиатр</p>
                  <p className="mb-0 mb-1">Ведет прием на дому</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockReklama3 />
    </Container>
  );
};

export default Doctors;
