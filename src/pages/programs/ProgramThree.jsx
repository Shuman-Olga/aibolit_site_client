import { Container } from "react-bootstrap";
import PThimg1 from "../../assets/img/detskii_vrach_rebenok.jpg";
import BlockReklama from "../../components/reklama/BlockReklama1";
import { Helmet } from "react-helmet";

const ProgramThree = () => {
  return (
    <Container fluid id="programthree">
      <Helmet>
        <title>
          Здоровый ребенок Педиатр рядом ( c 2-х лет) | Айболит детская
          медицинская служба
        </title>
        <meta
          name="description"
          content="Программа наблюдения 'Здоровый ребенок Педиатр рядом ( c 2-х лет)' от 2-х лет Данная программа предназначена для наблюдения здорового ребенка возрастом от 2-ух лет. В программу входит только наблюдение педиатра и вакцинация.

          "
        />
        <meta
          name="keywords"
          content="вызов педиатра на дом Томск, программа здоровье ребенка, педиатр на дом, детский врач на дом Томск, анализы на дому, программы наблюдения за ребенком, вызов платного педиатра на дом, патронаж на дому новорожденных, патронаж новорожденного ребенка, невролог на дом, патронаж детей на дому, хирург на дом, окулист, аллерголог, томск, патронаж новорожденного"
        />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/zdorovyj-rebenok-houm-midi-ot-2-h-l/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Здоровый ребенок Педиатр рядом ( c 2-х лет) | Айболит детская медицинская служба"
        />
        <meta
          property="og:description"
          content="Программа наблюдения 'Здоровый ребенок Педиатр рядом ( c 2-х лет)' от 2-х лет Данная программа предназначена для наблюдения здорового ребенка возрастом от 2-ух лет. В программу входит только наблюдение педиатра и вакцинация."
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/zdorovyj-rebenok-houm-midi-ot-2-h-l/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Здоровый ребенок Педиатр рядом ( c 2-х лет)</h1>
      </div>
      <Container className="my-4 text-center">
        <div>
          <img
            src={PThimg1}
            alt="img-program-three"
            className="progthree-img"
            title="Здоровый ребенок Педиатр рядом ( c 2-х лет)"
          />
          <div className="lh-lg py-4">
            <p>
              Данная программа предназначена для наблюдения ребенка возрастом от
              2-ух лет. <br />В нее входит только наблюдение педиатра один раз в
              месяц и связь с педиатром.
              <br />В пакет не входит: наблюдение узкими специалистами, УЗИ и
              анализы. <br />
              Программа назначается только после консультации с педиатром.
            </p>
          </div>
        </div>
        <div className="block-table">
          <h2 className="py-5">Состав программы</h2>
          <table className="table table-light table-striped text-start ">
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">Ведущий врач педиатр</p>
                  <p className="ms-5">Наблюдение на дому</p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">ежемесячно(1 раз в мес)</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">
                    Мобильная связь с ведущим врачом-педиатром в рабочее время с
                    08:00 до 20:00
                  </p>
                </td>
                <td>
                  <p className="fw-bold">+</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">
                    Выдача медицинской документации (справка в бассейн, справка
                    по месту требования)
                  </p>
                </td>
                <td>
                  <p className="fw-bold">+</p>
                </td>
              </tr>
              <tr className="fs-5 table-group-divider table-info">
                <td className="px-3">
                  <p className="fw-bold">Стоимость в месяц</p>
                  <p className="fw-bold">- за двух детей</p>
                </td>
                <td>
                  <p className="fw-bold">5 000 руб.**</p>
                  <p className="fw-bold">6 000 руб.**</p>
                </td>
              </tr>
              <tr className="table-group-divider font-text ">
                <td colSpan="2" className="px-3">
                  <p>
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
            </tbody>
          </table>
        </div>
      </Container>
      <BlockReklama />
    </Container>
  );
};
export default ProgramThree;
