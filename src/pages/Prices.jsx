import { Container } from "react-bootstrap";

const Prices = () => {
  return (
    <Container fluid id="prices">
      <div className="page-h1">
        <h1>Стоимость услуг</h1>
      </div>
      <Container>
        <div className="block-table my-4">
          <table class="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">
                  <p className="fw-bold">Вызов педиатра на дом</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Вызов педиатра на дом (по Томску)</p>
                </td>
                <td>
                  <p>2 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Вызов педиатра на дом (Пригородные районы города *)
                  </p>
                </td>
                <td>
                  <p>2 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Вызов педиатра на дом (Особо отдаленные районы *)
                  </p>
                </td>
                <td>
                  <p>3 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p className="fw-bold">
                    Вызов детского врача на дом (хирург, невролог,
                    ЛОР(оториноларинголог), окулист, аллерголог,
                    гастроэнтеролог)
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Вызов детского врача на дом (по Томску)
                  </p>
                </td>
                <td>
                  <p>2 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Вызов детского врача на дом (Пригородные районы города *)
                  </p>
                </td>
                <td>
                  <p>2 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Вызов детского врача на дом (Особо отдаленные районы *)
                  </p>
                </td>
                <td>
                  <p>3 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p className="fw-bold">Консультация педиатра по телефону</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Разовая консультация педиатра по телефону
                  </p>
                </td>
                <td>
                  <p>от 700 руб.</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p className="fw-bold">Анализы **</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">ОАК(общий анализ крови) развернутый</p>
                </td>
                <td>
                  <p>1 200 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">ОАМ(общий анализ мочи) </p>
                </td>
                <td>
                  <p>700 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Соскоб на энтеробиоз</p>
                </td>
                <td>
                  <p>700 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Кал на дисбактериоз</p>
                </td>
                <td>
                  <p>1 800 руб.</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p className="fw-bold">
                    Программы наблюдения за здоровьем ребенка на дому
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Малыш Хоум Стандарт ( от 0 до 2-х лет)</p>
                </td>
                <td>
                  <p>8 000 руб.**</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Здоровый ребенок Хоум Стандарт ( c 2-х лет)
                  </p>
                </td>
                <td>
                  <p>6 000 руб.**</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Здоровый ребенок Педиатр рядом ( c 2-х лет)
                  </p>
                </td>
                <td>
                  <p>4 000 руб.**</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="fw-bold mt-3">* Пригородные районы города:</p>
            <p>
              п. Зональная станция, п. Ключи, д. Позднеево, мкр. Апрель, п.
              Мирный, п. Трубочево,с. Тимирязево, п. Кайдаловка, мкр.
              Дзержинское с., мкр. Эушта, д. Черная речка, д. Кисловка, с.
              Тахатамышево, мкр. Аникино, с. Коларово, мкр. Зеленая долина, д.
              Малая Михайловка, д. Новомихайловка, с. Корнилово, , мкр.
              Заварзино, мкр. Росинка, мкр. Тимирязевское с., п. Кайдаловка
            </p>
            <p className="fw-bold mt-3">* Особо отдаленные районы:</p>
            <p>
              с. Кафтанчиково, д. Кандинка, с. Калтай, с. Курлек, мкр Лоскутово,
              с. Богашёво, п. Ааэропорт, п. Синий утес, мкр. Светлый пос.,
              Копылово, д. Протопопово, д. Воронино, п. Рассвет, с. Зоркальцево.
            </p>
            <p>
              ** для отдельных районов города и Томского района предусмотрено
              повышение стоимости услуг в зависимости от дальности расстояния
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};
export default Prices;
