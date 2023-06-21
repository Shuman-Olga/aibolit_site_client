import { Container } from "react-bootstrap";
import SZimg1 from "../../assets/img/helmets-for-special-needs.jpg";
import BlockReklama3 from "../../components/reklama/BlockReklama3";
import BlockReklama4 from "../../components/reklama/BlockReklama4";
import { Helmet } from "react-helmet";

const SpravkavZdorove = () => {
  return (
    <Container fluid id="spravkazdorove">
      <Helmet>
        <title>Справка о состоянии здоровья ребенка | Айболит</title>
        <meta
          name="description"
          content="Оформление справки о состоянии здоровья ребенка| Айболит"
        />
        <meta
          name="keywords"
          content="вызов педиатра на дом томск, выдать справка, здоров, ребенок, томск, школа, сад"
        />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-o-sostoyanii-zdorovya-reben/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Справка о состоянии здоровья ребенка | Айболит"
        />
        <meta
          property="og:description"
          content="Оформление справки о состоянии здоровья ребенка | Айболит"
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-o-sostoyanii-zdorovya-reben/"
        />
      </Helmet>
      <div className="page-h1">
        <h1>Справка о состоянии здоровья ребенка</h1>
      </div>
      <Container align="justify">
        <BlockReklama3 />
        <div className="mt-4">
          <div className="d-flex my-4 block-foto">
            <div className="me-4">
              <img
                className="size-img"
                src={SZimg1}
                alt="spravka-o-sostoyanii-zdorovya-reben"
                title="Справка о состоянии здоровья ребенка"
              />
            </div>
            <div>
              <p>
                Для поступления в школу и во время обучения в ней ребенку
                понадобится ряд медицинских справок.Справка о состоянии здоровья
                оформляется, если учащийся пропустил занятия по болезни или иной
                причине. Оформляя ее, врач удостоверяется в том, что ребенок
                полностью здоров, ничем не заразит сверстников и будет легко
                справляться с учебой.
              </p>
              <p>
                Медицинская справка о состоянии здоровья ребенка выдается
                педиатром. Этот документ можно получить в поликлинике по месту
                жительства или частном медицинском учреждении, имеющем
                необходимую лицензию.
              </p>
              <p>
                Оформление заключения о здоровье в муниципальной поликлинике
                сопряжено с большими временными потерями и дискомфортом для
                ребенка и родителей, который объясняется длинными очередями и не
                всегда удобным временем приема врачей. «Айболит» предлагает вам
                получить любую необходимую справку для детского сада или школы
                быстро и удобно.
              </p>
            </div>
          </div>
        </div>
        <BlockReklama4 />
        <div className="my-5">
          <div>
            <p>
              Если учащийся отсутствовал более трех недель, то документ
              дополняется выпиской из истории болезни (форма №024/у), в которой
              указываются:
            </p>
            <ul>
              <li>диагноз;</li>
              <li>даты начала болезни и выздоровления;</li>
              <li>результаты анализов, обследований;</li>
              <li>
                исследование кала на яйца гельминтов;перечень лечебных
                мероприятий.
              </li>
            </ul>
            <p>
              Справка о состоянии здоровья выдается после осмотра педиатром.
              Этот документ содержит следующую информацию: дату рождения
              ребенка, его фамилию и имя, период отсутствия в учебном учреждении
              по болезни или другой причине с датами начала и окончания
              пропущенного периода, а также дату, с которой разрешается
              вернуться к учебе. Наряду с педиатром, учащемуся необходимо пройти
              дерматолога, который дает заключение об отсутствии кожных
              болезней, педикулеза. Справка заверяется печатью клиники, печатью
              и подписью педиатра.
            </p>
            <p>
              При необходимости, помимо педиатра и дерматолога, ребенок
              направляется к узкопрофильным специалистам, которые выписывают
              заключения о состоянии здоровья. Перечень врачей зависит от
              заболевания, которое перенес учащийся.
            </p>
            <h5>В каких еще случаях нужна справка о состоянии здоровья:</h5>
            <ul>
              <li>при поступлении в музыкальную школу;</li>
              <li>для летнего лагеря;</li>
              <li>для зачисления в спортивную секцию;</li>
              <li>при выезде за границу;</li>
              <li>при повышенных нагрузках в школе;</li>
              <li>и др.</li>
            </ul>
          </div>
        </div>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Прием педиатра, выдача справки</p>
                </td>
                <td>
                  <p>1 500 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Container>
  );
};

export default SpravkavZdorove;
