import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Prices = () => {
  return (
    <Container fluid id="prices">
      <Helmet>
        <title>
          Стоимость услуг в Айболит детская медицинская служба Томск
        </title>
        <meta
          name="description"
          content="Стоимость услуг. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta
          name="keywords"
          content="вызов, педиатр, детский врач, лор, невролог, хирург, анализы, программы наблюдения за здоровьем, ребенок, партронаж новорожденного, платно, на дом, Томск"
        />
        <link rel="canonical" href="https://aibolit.tom.ru/prices/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta property="og:title" content="Стоимость услуг" />
        <meta
          property="og:description"
          content="Стоимость услуг. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta property="og:url" content="https://aibolit.tom.ru/prices/" />
      </Helmet>
      <div className="page-h1">
        <h1>Стоимость услуг</h1>
      </div>
      <Container>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr className="fs-5">
                <th scope="col">Наименование услуги</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  <p className="fw-bold">
                    Консультация педиатра в клинике(по предварителной записи)
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Прием (осмотр, консультация) врача-педиатра
                  </p>
                </td>
                <td>
                  <p>1 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <p className="fw-bold">Вызов педиатра НА ДОМ</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">по Томску</p>
                </td>
                <td>
                  <p>2 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Пригородные районы города *</p>
                </td>
                <td>
                  <p>2 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Особо отдаленные районы **</p>
                </td>
                <td>
                  <p>3 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <p className="fw-bold">
                    Вызов детского врача НА ДОМ (хирург, невролог,
                    ЛОР(оториноларинголог), окулист, аллерголог,
                    гастроэнтеролог)
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">по Томску</p>
                </td>
                <td>
                  <p>2 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Пригородные районы города *</p>
                </td>
                <td>
                  <p>2 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Особо отдаленные районы **</p>
                </td>
                <td>
                  <p>3 000 руб.</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
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
                  <p>700 руб.</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
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
                <td colSpan="2">
                  <p className="fw-bold">
                    Программы наблюдения за здоровьем ребенка
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Малыш Хоум Стандарт ( от 0 до 2-х лет)</p>
                </td>
                <td>
                  <p>8 500 руб.***</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Здоровый ребенок Хоум Стандарт ( c 2-х лет)
                  </p>
                </td>
                <td>
                  <p>6 500 руб.***</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Здоровый ребенок Педиатр рядом ( c 2-х лет)
                  </p>
                </td>
                <td>
                  <p>5 000 руб.***</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="fw-bold mt-3">* Пригородные:</p>
            <p>
              Микрорайон: Апрель, Аникино, Зеленая долина, Заварзино <br />{" "}
              Деревня: Позднеево, Эушта, Черная речка, Кисловка, Малая
              Михайловка, Новомихайловка <br /> Село: Тимирязево, Дзержинское,
              Тахатамышево, Коларово, Корнилово <br /> Поселок: Зональная
              станция, Ключи, Мирный, Трубочево, Кайдаловка, Росинка, Кайдаловка
            </p>
            <p className="fw-bold mt-5">** Особо отдаленные:</p>
            <p>
              Деревня: Кандинка, Лоскутово, Протопопово, Воронино <br />
              Село: Кафтанчиково, Калтай, Курлек, Богашёво, Зоркальцево <br />
              Поселок: Ааэропорт, Синий утес, Светлый, Копылово, Рассвет
            </p>
            <p>
              *** для отдельных мест города и Томского района предусмотрено
              повышение стоимости услуг в зависимости от дальности расстояния
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};
export default Prices;
