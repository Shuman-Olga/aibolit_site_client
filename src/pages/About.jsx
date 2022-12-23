import { Container } from 'react-bootstrap';
import BlockAdvantages from '../components/home/BlockAdvantages';
import fotoinfo from '../assets/img/foto-info.jpeg';
import NavMini from '../components/NavMini';

const About = () => {
  return (
    <Container fluid id="about">
      <div className="page-h1">
        <h1>О нас</h1>
      </div>
      <Container>
        <div className="info-about d-flex justify-content-between mt-5">
          <img src={fotoinfo} alt="foto-aibolot" className=" foto" />
          <NavMini />
        </div>
        <div className="text mt-4">
          <p className="text-about">
            <span className="text-bold">Детская медицинская служба "Айболит"</span> была создана в
            2001 года для оказания квалифицированной медицинской
            <span className="text-italic">помощи детям на дому</span>! Айболит предлагает к Вашему
            вниманию комплексное медицинское обслуживание на дому детей от 0 до 15 лет. К Вашим
            услугам всегда качественный сервис, квалифицированный персонал, большое количество
            программ для обслуживания на дому и другие услуги. В нашей службе за каждым пациентом
            закреплен
            <span className="text-italic"> персональный лечащий врач</span>. Если ситуация лежит за
            пределами компетенции врача, он привлекает{' '}
            <span className="text-italic">узких специалистов</span> и лично контролирует
            эффективность лечения. Посредством нашего сервиса можно осуществить вызов
            высококвалифицированного педиатра, так и узкого специалиста к себе домой.{' '}
            <span className="text-italic">Вызов специалиста </span>возможно осуществить, позвонив
            нам по номеру телефона <span className="text-bold">8 (3822) 60-92-43</span> или заказав
            обратный звонок. На сегодняшний день сервис доступен жителям Томска и пригорода. У нас
            работают исключительно высококвалифицированные специалисты.
            <ul>
              <li>
                <p>Мы придерживаемся принципа индивидуального подхода к каждому пациенту.</p>
              </li>
              <li>
                <p>
                  Мы оперативно реагируем на каждый Ваш звонок и направляем к Вам необходимого
                  специалиста.
                </p>
              </li>
              <li>
                <p>
                  Мы работаем с<span className="text-bold"> 08.00</span> до
                  <span className="text-bold">20.00</span> в будни и с
                  <span className="text-bold"> 09.00</span> до{' '}
                  <span className="text-bold">15.00</span> в субботу.
                </p>
              </li>
              <li>
                <p>Мы всегда на связи</p>
              </li>
            </ul>
          </p>
          <p className="text-about">
            Мы сделали медицинское обслуживание, качественным, оперативным и максимально доступным
            для всех!
          </p>
        </div>
      </Container>
      <div className="container-fluid line">
        <h2>Детская медицинская служба "Айболит" поможет Вам!</h2>
      </div>
      <BlockAdvantages />
    </Container>
  );
};
export default About;
