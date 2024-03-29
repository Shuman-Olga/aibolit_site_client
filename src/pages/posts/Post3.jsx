import { Container } from "react-bootstrap";
import P3img1 from "../../assets/img/hirurg_na_dom.jpg";
import P3img2 from "../../assets/img/nevrolog_na_dom3.jpg";
import P3img3 from "../../assets/img/hirurg_na_dom2.jpg";
import ModalCalling from "../../components/modalWindows/ModalCalling";
import { Helmet } from "react-helmet";
import BlockReklama3 from "../../components/reklama/BlockReklama3";

const Post3 = () => {
  return (
    <Container id="post" className="d-flex justify-content-center">
      <Helmet>
        <title>
          Вызов детского хирурга на дом Томск. Медицинская помощь на дому в
          Айболит
        </title>
        <meta
          name="description"
          content="Хирург занимается диагностикой, и лечением заболеваний, пороков и аномалий развития, требующих оперативного хирургического вмешательства,  у детей и подростков. "
        />

        <meta
          name="keywords"
          content="вызов хирурга на дом, платный детский хирург, хируг детский на дом, томск, узкие специалисты на дом"
        />
        <link
          rel="canonical"
          href="https://aibolit.tom.ru/post/detskij-hirurg-na-dom/"
        />
        <meta property="og:title" content="Детский хирург на дом" />
        <meta
          property="og:description"
          content="Хирург занимается диагностикой, и лечением заболеваний, пороков и аномалий развития, требующих оперативного хирургического вмешательства,  у детей и подростков.  "
        />
        <meta
          property="og:url"
          content="https://aibolit.tom.ru/post/detskij-hirurg-na-dom/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Айболит" />
      </Helmet>
      <div className="size-cont border mb-4" align="justify">
        <h1>Детский хирург на дом</h1>
        <br />
        <div>
          <img
            className="size-img"
            src={P3img1}
            alt="hirurg_na_dom"
            title="Детский невролог на дом"
          />
          <p>
            <span className="fw-bold">Хирург </span>
            занимается диагностикой, и лечением заболеваний, пороков и аномалий
            развития, требующих оперативного хирургического вмешательства, у
            детей и подростков. Осмотр хирурга требуется для новорожденного
            малыша, чтобы исключить или выявить врожденные аномалии и пороки
            развития, грыжи (паховые, пупочные, белой линии живота), проблемы
            паховых органов (неопущение или перекрут яичка, водянка яичка,
            варикоцеле). В течение жизни ребенка хирург наблюдает за правильным
            формированием организма, оказывает помощь при гнойных воспалительных
            заболеваниях, травмах и ранениях, проводит хирургическое лечение
            новообразований, сердечнососудистой патологии, ведет
            послеоперационное наблюдение и восстановительное лечение.
          </p>
        </div>
        <hr />
        <div>
          <h5>Вызов детского врача-хирурга на дом</h5>
          <br />
          <p>
            В детской медицинской службе «АЙБОЛИТ» мы знаем, что самым удобным
            местом для консультаций
            <span className="fst-italic"> врача – хирурга</span> является свой
            собственный уютный дом:
          </p>
          <ul>
            <li>
              врач приедет быстро, не придется ехать в клинику и ждать в
              очереди;
            </li>
            <li>
              поскольку в домашней обстановке ребенок ведет себя спокойнее, врач
              сможет спокойно осмотреть ребенка и выполнить амбулаторные
              хирургические манипуляции;
            </li>
            <li>
              безопасность и комфорт дома особенно важен для эффективного
              осмотра при наличии сопутствующих проблем или особенностей в
              психической сфере ребенка, при определенных особенностях его
              характера и поведения;
            </li>
            <li>
              в домашних условиях врач сможет уделить больше времени и ребенку,
              и родителям.
            </li>
          </ul>
        </div>
        <hr />
        <BlockReklama3 />
        <hr />
        <div>
          <h5>Профилактические осмотры у врача-хирурга</h5>{" "}
          <img
            src={P3img2}
            alt="hirurg_na_dom_osmotr"
            className="size-img"
            title="Детский невролог на дом"
          />
          <p>
            Первый{" "}
            <span className="fst-italic">
              профилактический осмотр у хирурга{" "}
            </span>
            показан в течение месяца после родов, чтобы определить или исключить
            наличие врожденной хирургической патологии, аномалий и пороков
            развития. Однако не все проблемы могут быть выявлены сразу –
            отдельные аномалии развития могут проявиться лишь спустя некоторое
            время. Поэтому на первом году жизни проводится несколько плановых
            осмотров у хирурга, чтобы установить диагноз и провести
            хирургическое лечение в как можно более раннем возрасте, чтобы не
            допустить развития патологии и нарушения нормального развития
            ребенка. Плановые профилактические осмотры хирургом малышей первого
            года жизни детей производится в 1, 6 и 12 месяцев.
          </p>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div>
          <h5>В каких случаях вызвать врача-хирурга?</h5>
          <ul>
            <li>острые боли в животе;</li>
            <li>длительное отсутствие стула;</li>
            <li>признаки внутренних кровотечений:</li>
            <li>кал черного цвета, рвота с кровью;</li>
            <li>длительная тошнота и рвота;</li>
            <li>незначительные травмы;</li>
            <li>нарушения или ограничения подвижности конечностей;</li>
            <li>
              нарушения паховых органов у мальчиков: пустая мошонка, различие
              размеров правого и левого яичка, увеличение размеров мошонки в
              размерах, болезненность яичек;
            </li>
            <li>появление новообразований.</li>
          </ul>
          <p>
            В случае тяжелых травм, потери сознания, ранений, кровотечений,
            нарушения целостности органов и тканей, нарушения дыхания и
            сердечной деятельности, сочетания болей в животе с повышением
            температуры –
            <span className="fw-bold"> НЕМЕДЛЕННО ВЫЗЫВАЙТЕ СКОРУЮ ПОМОЩЬ</span>
          </p>
        </div>
        <hr />
        <div>
          <h5> Что будет делать хирург, когда приедет к ребенку?</h5>
          <br />
          <img
            src={P3img3}
            alt="nevrolog_na_dom_osmotr_rebenka"
            className="size-img pe-3"
            title="Детский невролог на дом"
          />
          <p align="justify">Во время визита на дом хирург:</p>
          <ul>
            <li>
              ввыяснит, как протекала беременность и роды у мамы, расспросит
              родителей о перенесенных заболеваниях, поведении малыша,
              выслушивает жалобы;
            </li>
            <li>осмотрит ребенка и оценит его состояние;</li>
            <li>
              поможет выяснить, почему у ребенка имеются какие-либо особенности
              поведения, движений или поз;
            </li>
            <li>
              в зависимости от результатов осмотра, врач может назначить
              дополнительные обследования (УЗИ-диагностика, допплерография,
              рентгенография, КТ, МРТ, ангиография, эндоскопия);
            </li>
            <li>
              назначит сдачу анализов, консультации других специалистов (в том
              числе с вызовом специалистов на дом);
            </li>
            <li>
              поставит диагноз, назначит лечение, выпишет необходимые рецепты и
              даст рекомендации;
            </li>
            <li>
              определит, нужна ли экстренная помощь или достаточно амбулаторного
              лечения и плановых обследований;
            </li>
            <li>
              предложит занятия по лечебной физкультуре, акватерапии и плаванию,
              физиотерапию;
            </li>
            <li>выпишет необходимые справки для ребенка.</li>
          </ul>
        </div>
        <hr />
        <div>
          <h5>Дополнительные услуги на дому</h5>
          <p>
            Кроме оказания медицинской помощи врачом, специалистами детской
            службы «АЙБОЛИТ» могут оказываться следующие услуги:
          </p>
          <ul>
            <li>комплексные детские медицинские программы;</li>
            <li>забор анализов. </li>
          </ul>
        </div>
        <hr />
        <div>
          <h5>Как вызвать врача на дом</h5>
          <p>
            Оформить вызов врача на дом можно по телефону: 7 (3822) 60-92-43 или
            отправьте нам онлайн-заявку.
          </p>
        </div>
        <hr />
        <div>
          <h5> Стоимость вызова врача</h5>{" "}
          <p className="text-center">
            <span className="fw-bold fst-itali ">
              Детский хирург, консультация на дому --------------------- 2 000
              р.*
            </span>
            <br />
            <br />
            <small>
              *для отдаленных районов города и Томского района предусмотрено
              повышение стоимости услуги в зависимости от дальности расстояния
            </small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-center m-4">
          <ModalCalling />
        </div>
      </div>
    </Container>
  );
};

export default Post3;
