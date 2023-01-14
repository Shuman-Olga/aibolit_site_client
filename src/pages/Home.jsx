import { Container } from "react-bootstrap";
import BlockAdvantages from "../components/home/BlockAdvantages";
import BlockDoctors from "../components/home/BlockDoctors";
import BlockContacts from "../components/home/BlockContacts";
import BlockImg from "../components/home/BlockImg";
import BlockInfo from "../components/home/BlockInfo";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Container fluid id="home">
      <Helmet>
        <title>Айболит | Вызов педиатра на дом | Томск</title>
        <meta
          name="description"
          content="Айболит. Вызов педиатра на дом, детского врача (ЛОР, невролог, окулист, хирург). Анализы на дому. Программы наблюдения детей на дому. Патронаж новорожденных."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Айболит" />
        <meta
          name="keywords"
          content="вызов педиатра на дом Томск, педиатр на дом, детский врач на дом Томск, анализы на дому, программы наблюдения за ребенком, вакцинация, лор, невролог на дом, консультация хирурга, хирург на дом, окулист, аллерголог, томск, патронаж новорожденного"
        />
        <base href="https://aibolit.tom.ru" />
        <link rel="canonical" href="https://aibolit.tom.ru" />
      </Helmet>
      <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
};
export default Home;
