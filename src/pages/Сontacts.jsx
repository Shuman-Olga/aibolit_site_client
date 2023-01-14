import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Contacts = () => {
  return (
    <Container fluid id="contacts">
      <Helmet>
        <title>Контакты | Айболит-детская медицинская служба</title>
        <meta
          name="description"
          content="АЙболит детская медицинская служба, Наш адрес: ул. Герце на 68, стр.2, г. Томск.
          Наш телефон +7 (3822) 60-92-43"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          name="keywords"
          content="ул. Герцена 68, айболит детская медицинская служба, педиатр на дом, вызов педиатра на дом, вызов платного педиатра, обслуживание на дому, патронаж новорожденного"
        />
        <base href="https://aibolit.tom.ru/kontakty" />
        <link rel="canonical" href="https://aibolit.tom.ru/kontakty" />
      </Helmet>
      <div className="page-h1">
        <h1>ООО "Айболит" Детская медицинская служба контакты</h1>
      </div>
      <Container className="my-4">
        <div className="d-flex justify-content-between fs-6 position">
          <div>
            <p>
              <span className="fw-bold">Телефон:</span> +7 (3822) 60-92-43
            </p>
            <p>
              <span className="fw-bold">Адрес:</span> 634021, г. Томск, ул.
              Герцена, д. 68, стр.2 (вход в "Томоко", 3 эт)
            </p>
            <p>
              <span className="fw-bold pe-2">E-mail:</span>
              <a
                href="mailto:aibolittom70@gmail.com?subject=С сайта Айболита"
                target="_self"
              >
                aibolittom70@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p>
              <span className="fw-bold">Реквизиты:</span>
            </p>
            <p>ООО "Айболит" </p>
            <p>ИНН 7017262021</p>
            <p>КПП 701701001</p>
            <p>ОГРН 1107017009164</p>
            <p>ОКАТО 69401000000 </p>
            <p>Р/С 40702810706290004715</p>
            <p>Корсчет 30101810500000000728</p>
            <p>ОАО "ТОМСКПРОМСТРОЙБАНК" г. Томск</p>
            <p>БИК 046902728</p>
          </div>
        </div>
        <div className="text-center mt-5 fs-6">
          <h3 className="fs-4">РЕЖИМ РАБОТЫ</h3>
          <div className="d-flex justify-content-center">
            <hr className="w-50" />
          </div>

          <div>
            <p>Пн-пт: 08:00 - 20:00</p>
            <p>Суббота: 09:00 - 15:00</p>
            <p>Воскресенье : выходной</p>
          </div>
        </div>
        <div className="block-map my-3">
          <iframe
            className="_3Xz9Z"
            title="Embedded Content"
            name="htmlComp-iframe"
            width="100%"
            height="100%"
            data-src=""
            src="https://www-aibolit-tom-ru.filesusr.com/html/8dcff3_b0327e9bf52a52736c5dfdbd52e35f6e.html"
          ></iframe>
        </div>
        <div className="mb-2 fs-6">
          <p>Ближайшие остановки общественного транспорта:</p>
          <ul>
            <li>
              <p>Енисейская (трамвай №1, 2а, 4)</p>
            </li>
            <li>
              <p>
                Енисейская (троллейбусы 7; автобусы 3, 26, 27, 29, 31, 401, 510)
              </p>
            </li>
            <li>
              <p>
                пр. Комсомольский (троллейбусы 2, 6; автобусы 5, 8, 13, 16, 52,
                53, 131)
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </Container>
  );
};
export default Contacts;
