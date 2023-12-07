import { Container } from "react-bootstrap";
import DOimg1 from "../../assets/img/Ostrouhova_Natalya_Petrovna_vrach.jpeg";
import DOimg2 from "../../assets/img/img029.jpg";
import DOimg3 from "../../assets/img/img030.jpg";
import DOimg4 from "../../assets/img/Без имени-1.jpg";
import DOimg5 from "../../assets/img/Сертификат1.jpg";
import DOimg6 from "../../assets/img/Удостоверение Остроухова Н.П. 2017.jpg";
import DOimg7 from "../../assets/img/Сертификат_2020.png";
import DOimg8 from "../../assets/img/Ostrouhova_Сертификат_остеопат_2023.png";
import { Helmet } from "react-helmet";

const DoctorOstrouhova = () => {
  return (
    <Container fluid id="doctor4">
      <Helmet>
        <title>Остроухова Наталья Петровна - педиатр на дом</title>
        <meta
          name="description"
          content="Остроухова Наталья Петровна - педиатр. Выезд педиатра на дом. Справка в школу. Патронаж новорожденного"
        />
        <meta
          name="keywords"
          content="педиатр на дом, томск, детский врач на дом, анализы на дому, остроухова наталья петровна, вызов платного педиатра, патронаж новорожденных"
        />

        <link
          rel="canonical"
          href="https://aibolit.tom.ru/doctors/ostrouhova-natalya-petrovna/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Остроухова Наталья Петровна - педиатр"
        />
        <meta
          property="og:description"
          content="Остроухова Наталья Петровна - педиатр. Выезд педиатра на дом. Справка в школу. Патронаж новорожденного"
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/doctors/ostrouhova-natalya-petrovna/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Остроухова Наталья Петровна</h1>
      </div>
      <Container className="mb-5">
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img
              src={DOimg1}
              alt="img-ostrouhova "
              title="Остроухова Наталья Петровна"
            />
          </div>
          <div className="px-4 ">
            <h4 className="mb-3">Врач - педиатр</h4>
            <h4 className="mb-4">Остеопатические техники</h4>
            <h5>Педиатрия:</h5>
            <ul>
              <li>
                Диагностика и лечение острых заболевай: ринит, конъюнктивит,
                фарингит, тонзиллит, ларингит, трахеит, бронхит, пневмония,
                цистит, пиелонефрит, кишечные инфекции)
              </li>
              <li>
                Оценка состояния здоровья перед вакцинацией, составление
                индивидуального графика прививок
              </li>
              <li>Осмотр и ведение пациентов с 0 лет</li>
              <li>
                Консультация по грудному вскармливанию, искусственному
                вскармливанию
              </li>
              <li>Выезд врача на дом, консультация на дому</li>
            </ul>
            <p className="fw-bold">
              Врач осуществляет обслуживание детей на дому.
            </p>
            <h5>Диагностика и лечение заболеваний</h5>
            <ul>
              <li>Острые и хронические заболевания детского возраста.</li>
              <li>Вся педиатрия с 0 до 18 лет. </li>
            </ul>
            <hr />
            <h6>Высшее медицинское образование:</h6>
            <p>
              Сибирский государственный медицинский университет ( 1993 )
              "Педиатрия"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2012 )
              Повышение квалификации "Педиатрия"
            </p>
            <h6>Сертификаты:</h6>
            <p>«Педиатрия» ( 2003 )</p>
            <p>«Педиатрия» (2017)</p>
            <p>«Педиатрия» (2020)</p>
            <h6>Стаж работы в области медицины:</h6>
            <p>с 1993 г.</p>
          </div>
        </Container>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div className="col">
            <div className="card">
              <img
                src={DOimg2}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DOimg3}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DOimg4}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DOimg5}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={DOimg6}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DOimg7}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DOimg8}
                className="card-img-top"
                alt="foto"
                title="Сертификат-остеопат"
              />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorOstrouhova;
