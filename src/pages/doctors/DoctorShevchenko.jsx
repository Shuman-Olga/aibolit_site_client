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
        <meta charSet="utf-8" />
        <title>Шевченко Анастасия Николаевна | педиатр, неонатолог</title>
        <meta
          name="description"
          content="Шевченко Анастасия Николаевна - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы - педиатр, неонатолог. Врач на дом, наблюдение на дому. Анализы"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          name="keywords"
          content="педиатр на дом, узкие специалисты на дом, Шевченко Анастасия Николаевна, вызов педиатра на дом томск, детский врач на дом, неонатолг, анализы на дому, вызов платного педиатра, патронаж новорожденных, программы наблюдения за ребенком"
        />

        <base href="https://aibolit.tom.ru/shevchenko-anastasiya-nikolaevna" />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/shevchenko-anastasiya-nikolaevna"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Шевченко Анастасия Николаевна</h1>
      </div>
      <Container>
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img src={DShimg1} alt="img-shevshenko " />
          </div>
          <div className="px-4 ">
            <h4 className="mb-4">
              Врач - педиатр <br />
              Врач - неонатолог
            </h4>
            <p className="fw-bold">Высшее медицинское образование:</p>
            <p>
              Сибирский государственный медицинский университет ( 1992 )
              "Педиатрия"
            </p>
            <p className="fw-bold">Сертификаты:</p>
            <p>«Педиатрия» ( 2007 )</p>
            <p>«Педиатрия» (2018)</p>
            <p>«Педиатрия» (2020)</p>
            <p>
              «Меры предупреждения распространения коронавирусной инфекции
              (2019-nCoV)» (2020)
            </p>
            <p className="fw-bold">Стаж работы в области медицины:</p>
            <p>с 1992 г.</p>
            <p className="fw-bold">
              Врач осуществляет обслуживание детей на дому.
            </p>
            <p className="fw-bold">Дополнительная информация: </p>
            <p>Проводит консультации по иммунопрофилактике (вакцинации)</p>​
          </div>
        </Container>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div class="col">
            <div class="card">
              <img src={DShimg2} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DShimg3} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DShimg4} class="card-img-top" alt="foto" />
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={DShimg5} class="card-img-top" alt="foto" />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={DShimg6} class="card-img-top" alt="foto" />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DoctorShevchenko;
