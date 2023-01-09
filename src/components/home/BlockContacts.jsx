import BCimg1 from "../../assets/img/map.png";
import BCimg2 from "../../assets/img/time.png";
import BCimg3 from "../../assets/img/phone-tel.png";
import ModalCalling from "../modalWindows/ModalCalling";

const BlockContacts = () => {
  return (
    <div id="blockcontacts" className="container ">
      <div className="d-flex justify-content-center">
        <hr className="w-50 d-inline-block" />
      </div>
      <div className="d-flex justify-content-around mt-4 block-flex">
        <div className="block-contact">
          <h3>Айболит детская медицинская служба</h3>

          <div className="d-flex align-items-center py-2">
            <img src={BCimg1} alt="img-map" className="img me-3" />
            <p>г. Томск, ул. Герцена 68, строение 2</p>
          </div>
          <div className="d-flex align-items-center py-2">
            <img src={BCimg2} alt="img-time" className="img me-3" />
            <p>
              Мы работаем: <br />
              Пн-пт: 8:00-20:00
              <br />
              Сб: 10:00-15:00
            </p>
          </div>
          <div className="d-flex align-items-center py-2">
            <img src={BCimg3} alt="img-phone" className="img me-3" />
            <a href="tel:+7 (3822) 60-92-43">
              <p className="phone">+7 (3822) 60-92-43</p>
            </a>
          </div>
          <div className="d-flex justify-content-end mt-4 ">
            <ModalCalling />
          </div>
        </div>
        <div className="block-map ">
          <iframe
            class="_3Xz9Z"
            title="Embedded Content"
            name="htmlComp-iframe"
            width="100%"
            height="100%"
            data-src=""
            src="https://www-aibolit-tom-ru.filesusr.com/html/8dcff3_b0327e9bf52a52736c5dfdbd52e35f6e.html"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BlockContacts;
