import { Container } from "react-bootstrap";
import DShimg1 from "../../assets/img/Shevchenko_Anastasiya_Nikolaevna_vrach.jpeg";
import DShimg2 from "../../assets/img/img027.jpg";
import DShimg3 from "../../assets/img/img028.jpg";
import DShimg4 from "../../assets/img/1.jpg";
import DShimg5 from "../../assets/img/Сертификат Шевченко А.Н. 2020.jpg";
import DShimg6 from "../../assets/img/Удостоверение_Шевченко_2020_Педиатрия.jpg";
import { Helmet } from "react-helmet";

const DoctorShevchenko = () => {
  return (
    <Container fluid id="doctor3">
      <Helmet>
        <title>Шевченко Анастасия Николаевна | педиатр, неонатолог</title>
        <meta
          name="description"
          content="Шевченко Анастасия Николаевна - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы"
        />
        <meta
          name="keywords"
          content="педиатр на дом, узкие специалисты на дом, Шевченко Анастасия Николаевна, вызов педиатра на дом томск, детский врач на дом, неонатолг, анализы на дому, вызов платного педиатра, патронаж новорожденных, программы наблюдения за ребенком"
        />

        <link
          rel="canonical"
          href="https://aibolit.tom.ru/shevchenko-anastasiya-nikolaevna/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Шевченко Анастасия Николаевна | педиатр, неонатолог"
        />
        <meta
          property="og:description"
          content="Шевченко Анастасия Николаевна - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы"
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/shevchenko-anastasiya-nikolaevna/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Шевченко Анастасия Николаевна</h1>
      </div>
      <Container>
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img
              src={DShimg1}
              alt="img-shevshenko "
              title="Шевченко Анастасия Николаевна"
            />
          </div>
          <div className="px-4 ">
            <h4 className="mb-4">
              Врач - педиатр <br />
              Врач - неонатолог
            </h4>
            <h5>Профессиональные навыки</h5>
            <ul>
              <li>Осмотр и ведение пациентов с 0 до 18 лет</li>
              <li>Диагностика и лечение острых заболеваний</li>
              <li>Наблюдение детей с хроническими заболеваниями</li>
              <li>Наблюдение детей первого года жизни</li>
              <li>
                Организация рационального вскармливания детей раннего возраста
              </li>
              <li>
                Иммунопрофилактика-определение тактики вакцинации, составление
                индивидуальных графиков прививок
              </li>
            </ul>
            <h5>Диагностика и лечение заболеваний</h5>
            <ul>
              <li>Неонатология</li>
              <li>Прикормы и докормы</li>
              <li>Подбор питания</li>
              <li>Аллергия пищевая</li>
              <li>Вся педиатрия</li>
              <li>Вакцинация с 0 лет.</li>
              <li>ОРЗ</li>
              <li>Инфекционные заболевания</li>
              <li>ЦМВ-инфекция</li>
              <li>Хроническая ЛОР-патология</li>
              <li>Заболевания у детей ЖКТ и мочевыводящей системы</li>
            </ul>
            <p className="fw-bold">
              Врач осуществляет обслуживание детей на дому.
            </p>
            <hr />
            <h6>Высшее медицинское образование:</h6>
            <p>
              Сибирский государственный медицинский университет ( 1992 )
              "Педиатрия"
            </p>
            <h6>Сертификаты:</h6>
            <p>«Педиатрия» ( 2007 )</p>
            <p>«Педиатрия» (2018)</p>
            <p>«Педиатрия» (2020)</p>
            <p>
              «Меры предупреждения распространения коронавирусной инфекции
              (2019-nCoV)» (2020)
            </p>
            <h6>Стаж работы в области медицины:</h6>
            <p>с 1992 г.</p>
          </div>
        </Container>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div class="col">
            <div class="card">
              <img
                src={DShimg2}
                class="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src={DShimg3}
                class="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src={DShimg4}
                class="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src={DShimg5}
                class="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src={DShimg6}
                class="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorShevchenko;
