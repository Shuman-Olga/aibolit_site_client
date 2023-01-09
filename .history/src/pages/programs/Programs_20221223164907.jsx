import { Container } from "react-bootstrap";
import Pimg1 from "../../assets/img/massage.jpg";
import Pimg2 from "../../assets/img/fibroma-u-rebenka.jpg";
import Pimg3 from "../../assets/img/helmets-for-special-needs.jpg";
import Pimg4 from "../../assets/img/detskii_vrach_rebenok.jpg";
import BlockReklama1 from "../../components/BlockReklama1";
import { NavLink } from "react-router-dom";

const Programs = () => {
  return (
    <Container fluid id="programs">
      <div className="page-h1">
        <h1>Программы наблюдения за здоровьем ребенка</h1>
      </div>
      <Container className="my-4">
        <div className="d-flex block-foto">
          <img src={Pimg1} alt="foto-aibolit" className="img-thumbnail foto" />
          <div className="px-3 text ">
            <p>
              <span className="fw-bold">
                ДЕТСКАЯ МЕДИЦИНСКАЯ СЛУЖБА "АЙБОЛИТ"
              </span>{" "}
              предлагает
              <span className="fw-bold">
                программы наблюдения за здоровьем детей
              </span>
              . Квалифицированные специалисты постараются решить все проблемы со
              здоровьем, сопутствующие периоду роста ребёнка.
            </p>
          </div>
        </div>
        <div className="text pt-2 ">
          <p>
            Самый надежный способ обезопасить своего ребёнка – поручить
            наблюдение за его здоровьем квалифицированному, опытному врачу. Для
            того чтобы упростить Вам решение этой задачи. Программа включает в
            себя все необходимые составляющие, обеспечивающие полноценную
            медицинскую заботу о самых маленьких пациентах, и выстроена таким
            образом, чтобы не только сопроводить Вашего ребёнка
            квалифицированной помощью опытных специалистов, но и облегчить бремя
            родительской заботы, насколько это возможно. Вашего ребёнка будет
            вести&nbsp;персональный педиатр,&nbsp;который в течение года будет
            следить за здоровьем Вашего ребёнка.
          </p>

          <p>
            Оформляя договор на годовое медицинское обслуживание ребенка, Вы
            получаете:
          </p>

          <ul>
            <li>
              <p>
                За ребёнком закрепляется личный педиатр, который знает все о
                здоровье ребенка
              </p>
            </li>
            <li>
              <p>
                Ведение ребенка личным врачом – педиатром в каждом виде
                программы, включает возможность связи по телефону, WhatsApp в
                рабочее время с 08.00 - 20.00
              </p>
            </li>
            <li>
              <p>
                Выезды педиатра и узких специалистов осуществляются в любое
                удобное для Вас и врача время с 08.00 до 20.00, суббота с 09.00
                до 15.00, кроме воскресенья и праздничных дней
              </p>
            </li>
            <li>
              <p>
                Возможность
                <span className="text-decoration-underline">
                  {" "}
                  забора анализов{" "}
                </span>
                ребенку на дому
              </p>
            </li>
            <li>
              <p>
                Для детей первого года жизни в программы включены все
                необходимые осмотры, обследования, необходимые ребенку до года
                по приказу о профилактических осмотрах детей МЗ РФ №1346Н.
              </p>
            </li>
            <li>
              <p>
                В рамках программы заполняется вся необходимая медицинская
                документация, осуществляется выдача справок, оформление
                медицинских карт.
              </p>
            </li>
            <li>
              <p>
                <span className="text-decoration-underline">
                  <a
                    href="https://www.aibolit.tom.ru/blog/categories/вакцинация"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Вакцинация
                  </a>
                </span>{" "}
                проводится согласно Приказу Министерства здравоохранения и
                социального развития РФ от 31.01.2011 «Об утверждении
                национального календаря профилактических прививок и календаря
                профилактических прививок по эпидемическим показаниям»
                медицинскими иммунобиологическими препаратами, отечественного и
                импортного производства, зарегистрированными в соответствии с
                законодательством Российской Федерации, согласно инструкциям по
                применению.{" "}
                <span className="text-decoration-underline">
                  <a
                    href="https://www.aibolit.tom.ru/blog/календарь-вакцинаций"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Национальный календарь профилактических прививок
                  </a>
                </span>
              </p>
            </li>
            <li>
              <p>Персональный подход к малышу и семье</p>
            </li>
          </ul>

          <p>Дополнительные услуги, включенные в программу для детей:</p>

          <ul>
            <li>
              <p>
                Рекомендации по уходу и вскармливанию. Рекомендации по
                рациональному питанию, закаливанию, оздоровлению и физическим
                нагрузкам.
              </p>
            </li>
            <li>
              <p>
                Выписка необходимой медицинской документации, оформление
                медицинских справок.
              </p>
            </li>
            <li>
              <p>Предоставление медицинской литературы.</p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="container-fluid line">
        <h2>ПРОГРАММЫ</h2>
      </div>
      <Container>
        <NavLink to="/malysh-houm-standart" className="nav-link">
          <div className="d-flex justify-content-between align-items-center card-prog">
            <div className="block d-flex align-items-center m-5">
              <svg
                preserveAspectRatio="none"
                data-bbox="20 20 160 160"
                viewBox="20 20 160 160"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-labelledby="svgcid--3t87u8y3y60z"
              >
                <title id="svgcid--3t87u8y3y60z"></title>
                <g>
                  <path d="M180 100l-80 80-80-80 80-80 80 80z"></path>
                </g>
              </svg>
            </div>
            <div className="font-text ">
              <h4>Малыш Хоум. Стандарт</h4>
              <p className="fw-bold">от 0 до 2-х лет</p>
              <p>Педиатры</p>
              <p>Узкие специалисты</p>
              <p>Анализы</p>
              <p>УЗИ</p>
              <p>Вакцинация</p>
              <p>Мед. документация</p>
              <p>Мобильная связь</p>
            </div>
            <div>
              <img src={Pimg2} alt="img" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/zdorovyj-rebenok-houm-standart" className="nav-link">
          <div className="d-flex justify-content-between align-items-center card-prog color-back">
            <div className="block d-flex align-items-center m-5">
              <svg
                preserveAspectRatio="none"
                data-bbox="20 20 160 160"
                viewBox="20 20 160 160"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-labelledby="svgcid--3t87u8y3y60z"
              >
                <title id="svgcid--3t87u8y3y60z"></title>
                <g>
                  <path d="M180 100l-80 80-80-80 80-80 80 80z"></path>
                </g>
              </svg>
            </div>
            <div className="font-text">
              <h4>Здоровый ребенок. Стандарт</h4>
              <p className="fw-bold">от 2-х лет</p>
              <p>Педиатры</p>
              <p>Узкие специалисты</p>
              <p>Анализы</p>
              <p>УЗИ</p>
              <p>Вакцинация</p>
              <p>Мед. документация</p>
              <p>Мобильная связь</p>
            </div>
            <div>
              <img src={Pimg3} alt="img" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/zdorovyj-rebenok-houm-midi" className="nav-link">
          <div className="d-flex justify-content-between align-items-center card-prog">
            <div className="block d-flex align-items-center m-5">
              <svg
                preserveAspectRatio="none"
                data-bbox="20 20 160 160"
                viewBox="20 20 160 160"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-labelledby="svgcid--3t87u8y3y60z"
              >
                <title id="svgcid--3t87u8y3y60z"></title>
                <g>
                  <path d="M180 100l-80 80-80-80 80-80 80 80z"></path>
                </g>
              </svg>
            </div>
            <div className="text-font">
              <h4>Здоровый ребенок Педиатр рядом</h4>
              <p className="fw-bold">от 2-х лет</p>
              <p>Педиатры</p>
              <p>Мед. документация</p>
              <p>Мобильная связь</p>
            </div>
            <div>
              <img src={Pimg4} alt="img" />
            </div>
          </div>
        </NavLink>
      </Container>
      <BlockReklama1 />
    </Container>
  );
};
export default Programs;
