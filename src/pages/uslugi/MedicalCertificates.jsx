import { Container } from "react-bootstrap";
import BlockReklama2 from "../../components/reklama/BlockReklama2";
import { NavLink } from "react-router-dom";
import MCimg1 from "../../assets/img/rebenok-lechenie.jpg";
import MCimg2 from "../../assets/img/rebenok_shkola.jpg";
import MCimg3 from "../../assets/img/deti_sad.jpg";
import MCimg4 from "../../assets/img/rebenok_bassein.jpg";
import MCimg5 from "../../assets/img/detskii_vrach_rebenok_min.jpg";
import MCimg6 from "../../assets/img/rebenok_lechenie_lor.jpg";
import MCimg7 from "../../assets/img/summer-1.jpg";

const MedicalCertificates = () => {
  return (
    <Container fluid id="medical-certificates">
      <div className="page-h1">
        <h1>Медицинские справки ребенку</h1>
      </div>
      <Container>
        <BlockReklama2 />
        <p>
          Детская медицинская служба "Айболит" оказывает услуги по оформлению
          справок для детских садов, школ, санаторного лечения, бассейнов и др.
          Мы имеем соответствующую лицензию и выдаем подлинные документы,
          заверенные подписями и печатями. Пытаясь сэкономить время, не стоит
          доверять фирмам, предлагающим купить ребенку медицинскую справку без
          врачебного осмотра. Мы обеспечиваем сжатые сроки оформления карт и
          справок, выгодные цены и внимательное отношение к здоровью ваших
          детей.
        </p>
        <NavLink to="/sanatorno-kurortnaya-karta-dlya-det" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Санаторно-курортная карта для детей</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg1} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Справка по форме №076/у-04 составляется для того, чтобы
                  лечение ребенка в санатории было максимально эффективным и
                  принесло только пользу. В ходе ее оформления педиатр
                  анализирует состояние здоровья, выявляет возможные
                  противопоказания. В "Айболит" вы сможете получить этот
                  документ без очередей и в сжатый срок.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/spravka-v-shkolu" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка в школу</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg2} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Оформлять специальные справки нужно при поступлении ребенка в
                  школу, в связи с пропусками занятий по болезни, для
                  освобождения от физкультуры и питания в столовой и др. У нас
                  вы можете получить необходимые документы по доступной
                  стоимости и в сжатый срок. Прием ведут врачи высокой
                  квалификации, проводятся анализы.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/spravka-v-detskii-sad" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка в детский сад</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg3} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Каждому ребенку необходима справка при зачислении в детский
                  сад. Получать различные медицинские документы нужно будет и в
                  период обучения в ДОУ. У нас вы можете оформить для ребенка
                  медсправку о пропусках по болезни, в связи с отпуском.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/spravka-v-bassein" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка в бассейн для ребенка</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg4} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  На детская медицинская служба "Айболит" оказывает услуги по
                  оформлению справок для детских садов, школ, санаторного
                  лечения, бассейнов и др. Мы имеем соответствующую лицензию и
                  выдаем подлинные документы, заверенные подписями и печатями.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/medicinskie-spravki-rebenku" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка о состоянии здоровья ребенка</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg5} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Такой документ учащийся должен предъявить, если он пропустил
                  занятия в школе или детском саду по болезни, если планируется
                  зачисление в спортивную секцию, выезд за границу и др. Справка
                  наглядно демонстрирует состояние ребенка на текущий момент,
                  она позволяет родителям узнать особенности его здоровья.
                  Приглашаем вас в «Айболит», чтобы оформить справку в
                  кратчайший срок и без очередей.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/medicinskie-spravki-rebenku" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка по форме №026/у</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg6} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Медицинская карта по форме №026/у нужна каждому ребенку при
                  зачислении в детский сад, школу. Она дает полное представление
                  о здоровье и постепенно заполняется медицинскими работниками
                  образовательных учреждений вплоть до выпуска из школы. Вы
                  можете оформить этот документ в нашей службе.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/medicinskie-spravki-rebenku" className="nav-link">
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>Справка в детский лагерь</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img src={MCimg7} alt="foto" />
              </div>
              <div className="p-3">
                <p>
                  Ваш ребенок едет на лето в детский оздоровительный лагерь?
                  Здорово! Не забудьте за одну-две недели до его отъезда
                  подготовить специальную справку по форме 079/у. Это
                  обязательный документ, который необходимо отдать администрации
                  лагеря.
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </Container>
    </Container>
  );
};
export default MedicalCertificates;
