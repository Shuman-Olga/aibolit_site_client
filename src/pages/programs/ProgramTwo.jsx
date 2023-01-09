import { Container } from "react-bootstrap";
import PTimg1 from "../../assets/img/progrmtwo.jpg";
import BlockReklama1 from "../../components/reklama/BlockReklama1";

const ProgramTwo = () => {
  return (
    <Container fluid id="programtwo">
      <div className="page-h1">
        <h1>Здоровый ребенок Хоум Стандарт ( c 2-х лет)</h1>
      </div>
      <Container className="my-4 text-center">
        <div>
          <img src={PTimg1} alt="img-program-two" className="progtwo-img" />
          <div className="lh-lg py-4">
            <p>
              Вашему ребёнку 1,5 года.
              <br /> Это – особенная эпоха в его жизни, когда малыш начинает
              осознавать свои желания, учится управлять ими, думать и говорить.
              Именно в этом возрасте закладываются основы личности: от того как
              ребёнок освоит процессы коммуникации, какие навыки общения он
              приобретёт, – будет ли он добиваться своего или, наоборот, искать
              компромиссы, насколько эмоционально привыкнет переживать свои
              успехи и неудачи, – во многом зависит, как сложится его жизнь в
              дальнейшем. На эти годы приходится пик информационной и
              эмоциональной нагрузки. А это значит, что здоровье малыша
              нуждается в профессиональной медицинской защите.
            </p>
          </div>
        </div>
        <div className="block-table">
          <h2 className="py-5">Состав программы</h2>
          <table class="table table-light table-striped text-start ">
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
                  <p className="fw-bold">1 раз в год</p>
                  <p className="fw-bold">1 раз в год</p>
                  <p className="fw-bold">1 раз в год</p>
                  <p className="fw-bold">1 раз в год</p>
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
                  <p className="fw-bold">УЗИ в клинике</p>
                  <p className="ms-5">УЗИ (внутренних органов)</p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">1 раз в год</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">Вакцинация *</p>
                  <p className="ms-5">Манту</p>
                  <p className="ms-5">
                    Вакцинация по индивидуальному календарю
                  </p>
                </td>
                <td>
                  <p>.</p>
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
                  <p className="fw-bold">6 000 руб.**</p>
                  <p className="fw-bold">8 500 руб.**</p>
                </td>
              </tr>
              <tr className="table-group-divider font-text">
                <td colspan="2" className="px-3">
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
export default ProgramTwo;
