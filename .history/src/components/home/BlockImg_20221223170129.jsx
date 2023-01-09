import { NavLink } from "react-router-dom";
import background from "../../assets/img/img-home.jpg";
import ModalCallback from "../../components/ModalCallback";
import BIimg1 from "../../assets/img/home.png";
import BIimg2 from "../../assets/img/calling.png";
import BIimg3 from "../../assets/img/analyzes.png";

const BlockImg = () => {
  return (
    <div id="blockimg" className="">
      <div className="position-relative position-img">
        <img src={background} alt="" className=" img-background" />
        <h4 className="position-absolute top-0 end-0 mt-5 me-3 h4-text">
          Заботимся о здоровье ваших детей с 2001 года
        </h4>
        <div className="position-absolute bottom-50 end-0 me-5 btn-callback">
          <ModalCallback />
        </div>
      </div>
      <div className=" wrapper-block-btn">
        <NavLink to="/vyzov-pediatra-na-dom" className="nav-link">
          <div className="block-btn color1">
            <div className="block-btn-border">
              <img src={BIimg1} alt="img-home" className="block-btn-img" />
              <p>Вызов врача на дом</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/programmy-nablyudeniya-za-zdorovem" className="nav-link">
          <div className="block-btn color2">
            <div className="block-btn-border">
              <img src={BIimg2} alt="img-programm" className="block-btn-img2" />
              <p>Программы</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/uslugi" className="nav-link">
          <div className="block-btn color3">
            <div className="block-btn-border">
              <img src={BIimg3} alt="img-analyz" className="block-btn-img" />
              <p>Анализы</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BlockImg;
