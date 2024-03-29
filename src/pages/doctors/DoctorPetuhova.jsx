import { Container } from "react-bootstrap";
import DPimg1 from "../../assets/img/Petuhova_Olga_Viktorovna_vrach.jpg";
import DPimg2 from "../../assets/img/Диплом Петухова О.В..jpg";
import DPimg3 from "../../assets/img/Петухова О.В. 1.jpg";
import DPimg4 from "../../assets/img/Петухова О.В. 2.jpg";
import DPimg5 from "../../assets/img/Петухова О.В. 3.jpg";
import DPimg6 from "../../assets/img/Диплом Петухова О.В. 2013.jpg";
import DPimg7 from "../../assets/img/Удостоверение Петухова О.В 2014.jpg";
import DPimg8 from "../../assets/img/Сертификат Петухофв О.В. 2019.jpg";
import { Helmet } from "react-helmet";

const DoctorPetuhova = () => {
  return (
    <Container fluid id="doctor2">
      <Helmet>
        <title>
          Петухова Ольга Викторовна - педиатр, врач - гастроэнтеролог
        </title>
        <meta
          name="description"
          content="Петухова Ольга Викторовна - врач педиатр, гастроэнтеролог. Врач на дом. Программы наблюдение на дому. Анализы."
        />
        <meta
          name="keywords"
          content="педиатр на дом, гастроэнтеролог на дом томск, петухова ольга викторовна педиатр гастроэнтеролог, детский врач на дом, анализы на дому, патронаж новорожденных"
        />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/doctors/petuhova-olga-viktorovna/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Петухова Ольга Викторовна - педиатр, врач - гастроэнтеролог"
        />
        <meta
          property="og:description"
          content="Петухова Ольга Викторовна - врач педиатр, гастроэнтеролог. Врач на дом. Программы наблюдение на дому. Анализы."
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/doctors/petuhova-olga-viktorovna/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Петухова Ольга Викторовна</h1>
      </div>
      <Container className="mb-5">
        <Container className="d-flex align-items-start my-4">
          <div className="p-2 border-block">
            <img
              src={DPimg1}
              alt="img-petuhova "
              title="Петухова Ольга Викторовна"
            />
          </div>
          <div className="px-4">
            <h4 className="mb-3">Главный врач</h4>
            <h4 className="mb-3">Врач - педиатр</h4>
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
              <li>Выявление патологий, назначение обследований и лечения</li>
            </ul>
            <h5>Диагностика и лечение заболеваний</h5>
            <ul>
              <li>Любые заболевания кишечника у детей.</li>
              <li>хронических гастрит, ассоциированный с НР-инфекцией</li>
              <li>язвенная болезнь желудка, двенадцатиперстной кишки</li>
              <li>гастроэзофагеальная рефлюксная болезнь</li>
              <li>
                заболевания желчевыводящих путей, желчного пузыря, поджелудочной
                железы
              </li>
              <li>гепатиты различной этиологии</li>
              <li>хронические запоры</li>
              <li>синдром бактериального роста в кишечнике</li>
              <li>паразитарные заболевания кишечника</li>
            </ul>
            <p className="fw-bold">
              Врач осуществляет обслуживание детей на дому.
            </p>
            <hr />
            <h6>Высшее медицинское образование:</h6>
            <p>
              Сибирский государственный медицинский университет ( 1997 )
              "Педиатрия"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2013 )
              Профессиональная переподготовка "Организация здравоохранения и
              общественное здоровье"
            </p>
            <p>
              Сибирский государственный медицинский университет ( 2014 )
              Повышение квалификации "Педиатрия "
            </p>
            <h6>Сертификаты:</h6>
            <p>«Педиатрия» ( 1998 )</p>
            <p>«Педиатрия» (2013)</p>
            <p>«Педиатрия» (2019)</p>
            <h6>Стаж работы в области медицины:</h6>
            <p>с 1997 г.</p>
          </div>
        </Container>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 margin ">
          <div className="col">
            <div className="card">
              <img
                src={DPimg2}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg3}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg4}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg5}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg6}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg7}
                className="card-img-top"
                alt="foto"
                title="Сертификат-диплом"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={DPimg8}
                className="card-img-top"
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

export default DoctorPetuhova;
