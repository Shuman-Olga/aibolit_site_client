import { Container } from "react-bootstrap";
import POimg1 from "../../assets/img/programone.jpg";
import BlockReklama1 from "../../components/reklama/BlockReklama1";
import { Helmet } from "react-helmet";

const ProgramOne = () => {
  return (
    <Container fluid id="programone">
      <Helmet>
        <title>Программа Мылыш.Хоум | Айболит детская медицинская служба</title>
        <meta
          name="description"
          content="Программа наблюдения 'Малыш Хоум. Стандарт' от 0 до 2-х лет
          Первый год жизни ребёнка особенно важен: именно в возрасте от 0 до года закладываются основы нашего здоровья. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          name="keywords"
          content="вызов педиатра на дом Томск, программа здоровье ребенка, педиатр на дом, детский врач на дом Томск, анализы на дому, программы наблюдения за ребенком, вызов платного педиатра на дом, патронаж на дому новорожденных, патронаж новорожденного ребенка, невролог на дом, патронаж детей на дому, хирург на дом, окулист, аллерголог, томск, патронаж новорожденного"
        />
        <base href="https://aibolit.tom.ru/malysh-houm-standart-ot-0-do-2-h-le" />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/malysh-houm-standart-ot-0-do-2-h-le"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Малыш Хоум Стандарт ( от 0 до 2-х лет)</h1>
      </div>
      <Container className="my-4 text-center">
        <div>
          <img src={POimg1} alt="img-program-one" className="progone-img" />
          <div className="lh-lg py-4">
            <p>
              Первый год жизни ребёнка особенно важен: именно в возрасте от 0 до
              года закладываются основы нашего здоровья. От того, как будет
              построена забота о ребёнке в этот период, во многом зависит, что
              ждёт его в будущем – насколько крепким станет его иммунитет,
              какими болезнями он будет болеть, к каким заболеваниям окажется
              предрасположен. Не случайно 90% всех прививок, плановых осмотров,
              анализов и исследований приходится именно на первый год жизни.
              Родители, исповедующие ответственный подход к здоровью ребёнка,
              неизбежно задумываются, как лучше всего обеспечить необходимый
              контроль за здоровьем своего малыша.
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
                  <p className="ms-5">Вызов на дом при заболевании</p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">ежемесячно</p>
                  <p className="fw-bold">без ограничений</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">
                    Плановые осмотры врачами-специалистами на дому{" "}
                  </p>
                  <p className="ms-5">Невролог</p>
                  <p className="ms-5">Хирург-ортопед</p>
                  <p className="ms-5">Офтальмолог</p>
                  <p className="ms-5">Оториноларинголог </p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">6 раз</p>
                  <p className="fw-bold">4 раза</p>
                  <p className="fw-bold">4 раза</p>
                  <p className="fw-bold">1 раз</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">Плановые заборы анализов на дому</p>
                  <p className="ms-5">
                    Общеклинический анализ крови (ОАК -развернутый)
                  </p>
                  <p className="ms-5">Общий анализ мочи (ОАМ)</p>
                  <p className="ms-5">Кал на яйца глист</p>
                  <p className="ms-5">Соскоб на энтеробиоз </p>
                  <p className="ms-5">Глюкоза крови </p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">3 раза</p>
                  <p className="fw-bold">3 раза</p>
                  <p className="fw-bold">1 раз</p>
                  <p className="fw-bold">по назначению</p>
                  <p className="fw-bold">1 раз</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">УЗИ в клинике</p>
                  <p className="ms-5">
                    УЗИ тазобедренный суставов, органов брюшной полости
                  </p>
                  <p className="ms-5"> УЗИ сердца, почек</p>
                  <p className="ms-5">УЗИ головного мозга (нейросонография) </p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">1 раз в год</p>
                  <p className="fw-bold">1 раз в год</p>
                  <p className="fw-bold">1 раз в год</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">Вакцинация *</p>
                  <p className="ms-5">Вирусный гепатит В </p>
                  <p className="ms-5">АКДС (коклюш, дифтерия, столбняк)</p>
                  <p className="ms-5">Полиомиелит</p>
                  <p className="ms-5">Корь, краснуха, паротит </p>
                  <p className="ms-5">Гемофильная инфекция</p>
                  <p className="ms-5">Пневмококковая инфекция</p>
                  <p className="ms-5">Ротофирусная инфекция</p>
                  <p className="ms-5">Менингококковая инфекция</p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
                  <p className="fw-bold">+</p>
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
                  <p className="fw-bold">Стоимость в месяц за двух детей</p>
                </td>
                <td>
                  <p className="fw-bold">8 000 руб.**</p>
                  <p className="fw-bold">12 000 руб.**</p>
                </td>
              </tr>
              <tr className="table-group-divider font-text">
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
      <BlockReklama1 />
    </Container>
  );
};
export default ProgramOne;
