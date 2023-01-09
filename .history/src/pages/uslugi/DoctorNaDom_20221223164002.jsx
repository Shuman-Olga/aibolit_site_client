import { Container } from "react-bootstrap";
import BlockReklama3 from "../../components/BlockReklama3";

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
            <tr className="table-group-divider fs-6 table-warning text-center">
              <td colspan="2" className="px-3">
                <p className="">
                  * стоимость вакцины не входит в программу и оплачивается
                  отдельно
                </p>
                <p>
                  ** для отдельных районов города и Томского района
                  предусмотрено повышение стоимости услуг в зависимости от
                  дальности расстояния
                </p>
                <p>МИНИМАЛЬНЫЙ СРОК заключения ДОГОВОРА 3 МЕСЯЦА</p>
                <p>Первый платеж – за 3 месяца, оплачивается сразу.</p>
                <p className="font-size-min">
                  Информация и цены, представленные на сайте, являются
                  справочными и не являются публичной офертой.
                </p>
                <p className="font-size-min">
                  Просим Вас уточнять актуальные цены у менеджеров по телефону
                  60-92-43
                </p>
              </td>
            </tr>
            ​ ​ ​
          </tbody>
        </table>
      </div>
    </Container>
  </Container>
);

export default DoctorNaDom;
