import { Container } from "react-bootstrap";
import BlockReklama3 from "../../components/reklama/BlockReklama3";
import ModalCalling from "../../components/modalWindows/ModalCalling";
import { Helmet } from "react-helmet";

const DoctorNaDom = () => (
  <Container fluid id="doctornadom">
    <Helmet>
      <title>
        Вызов педиатра на дом Томск | Детский врач на дом | Айболит-детская
        служба
      </title>
      <meta
        name="description"
        content="ВЫЗОВ ПЕДИАТРА на дом Томск. К вам приедет один из наших квалифицированных врачей педиатров. ВЫЗОВ УЗКОГО СПЕЦИАЛИСТА. Хирург, Невролог, Лор и другие. ЗАБОР АНАЛИЗОВ НА ДОМУ."
      />
      <meta
        name="keywords"
        content="вызов, консультация, осмотр, педиатр, детский врач, платно, анализы, ребенок, новорожденный, цена, на дом, Томск"
      />
      <link
        rel="canonical"
        href="https://aibolit.tom.ru/uslugi-i-ceny/vyzov-pediatra-na-dom/"
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Айболит" />
      <meta property="og:title" content="Вызов педиатра на дом | Айболит" />
      <meta
        property="og:description"
        content="ВЫЗОВ ПЕДИАТРА. К вам приедет один из наших квалифицированных врачей педиатров. ВЫЗОВ УЗКОГО СПЕЦИАЛИСТА. Хирург, Невролог, Лор и другие. ЗАБОР АНАЛИЗОВ НА ДОМУ."
      />
      <meta
        property="og:url"
        content="https://aibolit.tom.ru/uslugi-i-ceny/vyzov-pediatra-na-dom/"
      />
    </Helmet>
    <div className="page-h1">
      <h1>Вызов педиатра на дом в Томске</h1>
    </div>
    <Container>
      <BlockReklama3 />
      <div>
        <p>
          Если вам нужен хороший детский{" "}
          <span className="fw-bold">педиатр,</span> обращайтесь в Детскую
          медицинскую службу "Айболит". Специалисты медицинской службы окажут
          своевременную квалифицированную помощь. Они имеют многолетний опыт
          работы и несут полную ответственность за здоровье юных пациентов.
        </p>
        <h4 className="text-center">
          Цена вызова детского врача на дом зависит от дальности расстояния
        </h4>
        <p className="fw-bold mt-5">Пригородные районы города:</p>
        <p>
          Микрорайон: Апрель, Аникино, Зеленая долина, Заварзино <br /> Деревня:
          Позднеево, Эушта, Черная речка, Кисловка, Малая Михайловка,
          Новомихайловка <br /> Село: Тимирязево, Дзержинское, Тахатамышево,
          Коларово, Корнилово <br /> Поселок: Зональная станция, Ключи, Мирный,
          Трубочево, Кайдаловка, Росинка, Кайдаловка
        </p>
        <p className="fw-bold mt-5">Особо отдаленные районы:</p>
        <p>
          Деревня: Кандинка, Лоскутово, Протопопово, Воронино <br />
          Село: Кафтанчиково, Калтай, Курлек, Богашёво, Зоркальцево <br />
          Поселок: Ааэропорт, Синий утес, Светлый, Копылово, Рассвет
        </p>
      </div>
      <div className="block-table">
        <h2 className="py-5">Вызов детского специалиста на дом: ​</h2>
        <table className="table table-light table-striped text-start ">
          <tbody>
            <tr className="fs-5 table-group-divider table-info">
              <td className="px-3">
                <p className="ms-5">Наименование услуги (прайс не полный)</p>
              </td>
              <td>
                <p>Цена</p>
              </td>
            </tr>
            <tr>
              <td className="px-3">
                <p className="fw-bold">
                  Прием детского врача на дому - (по Томску)
                </p>
                <p className="fw-bold"> - (Пригородные районы города)</p>
                <p className="fw-bold"> - (Особо отдаленные районы)</p>
              </td>
              <td>
                <p className="fw-bold">2 000 руб.</p>
                <p className="fw-bold">2 500 руб.</p>
                <p className="fw-bold">3 000 руб.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          При вызове врача в указанную стоимость входит выезд и консультация.
        </p>
        <p>Все дополнительные услуги оплачиваются сверху.</p>
      </div>
      <div className="d-flex justify-content-center my-5">
        <ModalCalling />
      </div>
    </Container>
  </Container>
);

export default DoctorNaDom;
