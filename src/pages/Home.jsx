import { Container } from "react-bootstrap";
import BlockAdvantages from "../components/home/BlockAdvantages";
import BlockDoctors from "../components/home/BlockDoctors";
import BlockContacts from "../components/home/BlockContacts";
import BlockImg from "../components/home/BlockImg";
import BlockInfo from "../components/home/BlockInfo";
import { Helmet } from "react-helmet";
// import WorkOnHolidays from "../components/WorkOnHolidays";

const Home = () => {
  return (
    <Container fluid id="home">
      <Helmet>
        <title>
          Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская
          служба
        </title>
        <meta
          name="description"
          content="Айболит. Вызов педиатра на дом в Томске, вызывать детского врача (ЛОР, невролог, окулист, хирург) на дом. Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta
          name="keywords"
          content="Айболит, детская медицинская служба, клиника, вызвать детский врач, педиатр, программы наблюдения, анализы, ребенок, новорожденного, на дом, цена, Томск"
        />
        <link rel="canonical" href="https://aibolit.tom.ru/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://aibolit.tom.ru/assets/8b947efb21c1e40192ec.png"
        ></meta>
        <meta property="og:site_name" content="Айболит" />
        <meta
          property="og:title"
          content="Вызов педиатра, врача на дом в Томске. Айболит-детская медицинская
          служба"
        />
        <meta
          property="og:description"
          content="Айболит. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta property="og:url" content="https://aibolit.tom.ru/" />
      </Helmet>
      {/* <WorkOnHolidays /> */}
      <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
};
export default Home;
