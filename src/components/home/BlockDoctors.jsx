import BDimg1 from "../../assets/img/sadovnikova.jpeg";
import BDimg2 from "../../assets/img/petuhova.jpeg";
import BDimg3 from "../../assets/img/shevchenko.jpeg";
import BDimg4 from "../../assets/img/ostrouhova.jpeg";
import { NavLink } from "react-router-dom";

const BlockDoctors = () => {
  return (
    <div id="blockdoctors" className="container-fluid py-5 ">
      <h2 className="h2-blockdoctors">Наши педиатры</h2>
      <hr className="w-25 "></hr>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-4 mb-5 container">
        <NavLink
          to="/doctor/sadovnikova-elena-gennadevna/"
          className="nav-link"
        >
          <div className="col">
            <div className="card  h-100">
              <img
                src={BDimg1}
                className="card-img-top"
                alt="sadovnikova"
                title="Садовникова Елена Геннадьевна"
              />
              <div className="card-body">
                <p className="card-text">Садовникова Елена Геннадьевна​</p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/doctor/petuhova-olga-viktorovna/" className="nav-link">
          <div className="col">
            <div className="card  h-100">
              <img
                src={BDimg2}
                className="card-img-top"
                alt="petuhova"
                title="Петухова Ольга Викторовна"
              />
              <div className="card-body">
                <p className="card-text">
                  Петухова <br />
                  Ольга
                  <br /> Викторовна
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/doctor/shevchenko-anastasiya-nikolaevna/"
          className="nav-link"
        >
          <div className="col">
            <div className="card  h-100">
              <img
                src={BDimg3}
                className="card-img-top"
                alt="shevchenko"
                title="Шевченко Анастасия Николаевна"
              />
              <div className="card-body">
                <p className="card-text">Шевченко Анастасия Николаевна</p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/doctor/ostrouhova-natalya-petrovna/" className="nav-link">
          <div className="col">
            <div className="card  h-100">
              <img
                src={BDimg4}
                className="card-img-top"
                alt="ostrouhova"
                title="Остроухова Наталья Петровна"
              />
              <div className="card-body">
                <p className="card-text">
                  Остроухова Наталья
                  <br /> Петровна
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BlockDoctors;
