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
            <img
              src={BCimg1}
              alt="img-map"
              className="img me-3"
              title="address"
            />
            <p>г. Томск, ул. Герцена 68, строение 2</p>
          </div>
          <div className="d-flex align-items-center py-2">
            <img
              src={BCimg2}
              alt="img-time"
              className="img me-3"
              title="time"
            />
            <p>
              Мы работаем: <br />
              Пн-пт: 8:00-19:00
              <br />
              Сб: 10:00-14:00
            </p>
          </div>
          <div className="d-flex align-items-center py-2">
            <img
              src={BCimg3}
              alt="img-phone"
              className="img me-3"
              title="phone"
            />
            <a href="tel:+7 (3822) 60-92-43">
              <p className="phone">+7 (3822) 60-92-43</p>
            </a>
          </div>
          <div className="d-flex justify-content-center mt-4 ">
            <ModalCalling />
          </div>
        </div>
        <div className="block-map ">
          <iframe
            title="Embedded Content"
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1788754562"
            width="560"
            height="400"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BlockContacts;
