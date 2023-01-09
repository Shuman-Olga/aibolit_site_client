import { Container } from "react-bootstrap";
import BlockReklama3 from "../../components/BlockReklama3";
import ModalCalling from "../../components/ModalCalling";

const DoctorNaDom = () => (
  <Container fluid id="doctornadom">
    <div className="page-h1">
      <h1>Вызов педиатра на дом</h1>
    </div>
    <Container>
      <BlockReklama3 />
      <div>
        <p>
          Если вам нужен хороший детский{" "}
          <span className="fw-bold">педиатр на дом,</span> обращайтесь в Детскую
          медицинскую службу "Айболит". Специалисты медицинской службы окажут
          своевременную квалифицированную помощь. Они имеют многолетний опыт
          работы и несут полную ответственность за здоровье юных пациентов.
        </p>
        <h4 className="text-center">
          Цена вызова детского врача на дом зависит от дальности расстояния
        </h4>
        <p className="fw-bold mt-5">Пригородные районы города:</p>
        <p>
          п. Зональная станция, п. Ключи, д. Позднеево, мкр. Апрель, п. Мирный,
          п. Трубочево,с. Тимирязево, п. Кайдаловка, мкр. Дзержинское с., мкр.
          Эушта, д. Черная речка, д. Кисловка, с. Тахатамышево, мкр. Аникино, с.
          Коларово, мкр. Зеленая долина, д. Малая Михайловка, д. Новомихайловка,
          с. Корнилово, , мкр. Заварзино, мкр. Росинка, мкр. Тимирязевское с.,
          п. Кайдаловка
        </p>
        <p className="fw-bold mt-5">Особо отдаленные районы:</p>
        <p>
          с. Кафтанчиково, д. Кандинка, с. Калтай, с. Курлек, мкр Лоскутово, с.
          Богашёво, п. Ааэропорт, п. Синий утес, мкр. Светлый пос., Копылово, д.
          Протопопово, д. Воронино, п. Рассвет, с. Зоркальцево.
        </p>
      </div>
      <div className="block-table">
        <h2 className="py-5">Вызов врача на дом: ​</h2>
        <table class="table table-light table-striped text-start ">
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
                <p className="fw-bold">Прием врача на дому (по Томску)</p>
              </td>
              <td>
                <p className="fw-bold">2000 руб.</p>
              </td>
            </tr>
            <tr>
              <td className="px-3">
                <p className="fw-bold">
                  Прием врача на дому (Пригородные районы города)
                </p>
              </td>
              <td>
                <p className="fw-bold">2500 руб.</p>
              </td>
            </tr>
            <tr>
              <td className="px-3">
                <p className="fw-bold">
                  Прием врача на дому (Особо отдаленные районы)
                </p>
              </td>
              <td>
                <p className="fw-bold">3000 руб.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          При вызове врача в указанную стоимость входит выезд врача на дом и
          консультация.
        </p>
        <p>Все дополнительные услуги оплачиваются сверху.</p>
      </div>
      <div className="text-center">
        {" "}
        <ModalCalling />
      </div>
    </Container>
  </Container>
);

export default DoctorNaDom;
