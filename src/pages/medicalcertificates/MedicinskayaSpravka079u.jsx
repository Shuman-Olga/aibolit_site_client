import { Container } from "react-bootstrap";
import SF079img1 from "../../assets/img//summer-1.jpg";
import BlockReklama3 from "../../components/reklama/BlockReklama3";
import BlockReklama4 from "../../components/reklama/BlockReklama4";
import { Helmet } from "react-helmet";

const MedicinskayaSpravka079u = () => {
  return (
    <Container fluid id="spravkavdetskiisad">
      <Helmet>
        <title>Медицинская справка 079/у в детский лагерь | Айболит</title>
        <meta
          name="description"
          content="Оформление справки по форме 079/у в детский лагерь | Айболит"
        />
        <meta
          name="keywords"
          content=" справка в детский лагерь, 079у, спрака в лагерь, педиатр на дом, томск"
        />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-po-forme-079-u"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Медицинская справка 079/у в детский лагерь | Айболит"
        />
        <meta
          property="og:description"
          content="Оформление справки по форме 079/у в детский лагерь  | Айболит"
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-po-forme-079-u/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Медицинская справка 079/у в детский лагерь</h1>
      </div>
      <Container align="justify">
        <BlockReklama3 />
        <div className="d-flex mt-4 block-foto">
          <div className="me-4">
            <img
              className="size-img"
              src={SF079img1}
              alt="summer"
              title="Медицинская справка 079/у в детский лагерь"
            />
          </div>
          <div>
            <p>
              Ваш ребенок едет на отдых в детский оздоровительный лагерь?
              Здорово! Не забудьте за одну-две недели до отъезда подготовить для
              ребенка специальную медицинскую справку в лагерь по форме 079/у.
            </p>
            <p>
              Это обязательная медсправка, которую необходимо отдать
              администрации лагеря. Она содержит информацию о пройденных
              обследованиях, прививках, заболеваниях и общем состоянии здоровья
              школьника. Проводится, как правило, стандартный медосмотр, если
              нет других показаний. Срок действия справки 3 месяца. Перед каждым
              заездом оформляется новая.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h5>
            Чтобы сделать справку, ребенку необходимо пройти следующих врачей:
          </h5>
          <ul>
            <li>педиатр (общетерапевтический осмотр)</li>
            <li>хирург</li>
            <li>окулист</li>
            <li>дерматолог (осмотр на педикулез)</li>
          </ul>
          <h5>
            Также для оформления документа необходимо сдать перечень анализов:
          </h5>
          <ul>
            <li>общеклинический анализ крови;</li>
            <li>общий анализ мочи;</li>
            <li>соскоб на энтеробиоз;</li>
            <li>анализ кала на яйца гельминтов.</li>
          </ul>
          <p>
            Внимательно проверьте, чтобы справка была оформлена по всем
            стандартам: проштампована, сам бланк должен быть пронумерован, иметь
            подпись врача, который осматривал ребенка.
          </p>
          <h5>Что содержит справка для выезда в лагерь:</h5>
          <ul>
            <li>
              данные о ребенке (дата рождения, фамилия, имя, отчество,
              фактический адрес проживания);
            </li>
            <li>отметку об общем состоянии здоровья;</li>
            <li>данные об учебном заведении – его наименование;</li>
            <li>название лечебного учреждения, которое выдало документ;</li>
            <li>сведения о прививках;</li>
            <li>
              данные о том, контактировал ли ребенок в последние три недели с
              людьми, имеющими инфекционные заболевания;
            </li>
            <li>сведения о перенесенных инфекциях;</li>
            <li>группу здоровья;</li>
            <li>
              подпись и персональную печать врача, который оформил заключение;
            </li>
            <li>дату выдачи;</li>
            <li>срок действия.</li>
          </ul>
          <p>
            Документ заверяется еще двумя печатями: гербовая медицинского
            учреждения и для справок.
          </p>
          <h5>
            При обращении в клинику за справкой родителям необходимо иметь при
            себе следующие документы:
          </h5>
          <ul>
            <li>паспорт родителя (для оформления договора);</li>
            <li>свидетельство о рождении ребенка;</li>
            <li>сертификат о прививках;</li>
            <li>
              информацию о пробе Манту или Диаскин-тесте (если отсутствует в
              прививочном сертификате);
            </li>
            <li>карту из поликлиники (если есть).</li>
          </ul>
        </div>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Справка 079/у в детский лагерь</p>
                </td>
                <td>
                  <p>2 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Анализ соскоб на энтеробиоз</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Исследование кала на яйца гельминтов</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <BlockReklama4 />
      </Container>
    </Container>
  );
};

export default MedicinskayaSpravka079u;
