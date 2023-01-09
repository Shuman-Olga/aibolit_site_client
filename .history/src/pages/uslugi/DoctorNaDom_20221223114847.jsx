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
        <p className="fw-bold mt-5">
Особо отдаленные районы:</p>
        <p>
          п. Зональная станция, п. Ключи, д. Позднеево, мкр. Апрель, п. Мирный,
          п. Трубочево,с. Тимирязево, п. Кайдаловка, мкр. Дзержинское с., мкр.
          Эушта, д. Черная речка, д. Кисловка, с. Тахатамышево, мкр. Аникино, с.
          Коларово, мкр. Зеленая долина, д. Малая Михайловка, д. Новомихайловка,
          с. Корнилово, , мкр. Заварзино, мкр. Росинка, мкр. Тимирязевское с.,
          п. Кайдаловка
        </p>
      </div>
    </Container>
  </Container>
);

export default DoctorNaDom;
