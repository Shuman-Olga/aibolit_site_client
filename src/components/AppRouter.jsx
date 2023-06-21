import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about/About";
import Prices from "../pages/Prices";
import Programs from "../pages/programs/Programs";
import Services from "../pages/uslugi/Services";
import Contacts from "../pages/Сontacts";
import NotFound from "../pages/NotFound";
import ControllingOrgan from "../pages/about/ControllingOrgan";
import Licenses from "../pages/about/Licenses";
import Documents from "../pages/about/Documents";
import OurPartners from "../pages/about/OurPartners";
import ProgramOne from "../pages/programs/ProgramOne";
import ProgramTwo from "../pages/programs/ProgramTwo";
import ProgramThree from "../pages/programs/ProgramThree";
import DoctorSadovnikova from "../pages/doctors/DoctorSadovnikova";
import DoctorPetuhova from "../pages/doctors/DoctorPetuhova";
import DoctorShevchenko from "../pages/doctors/DoctorShevchenko";
import DoctorOstrouhova from "../pages/doctors/DoctorOstrouhova";
import DoctorNaDom from "../pages/uslugi/DoctorNaDom";
import Pediatr from "../pages/uslugi/Pediatr";
import MedicalCertificates from "../pages/uslugi/MedicalCertificates";
import SanatornoKurortnayaKarta from "../pages/medicalcertificates/SanatornoKurortnayaKarta";
import SpravkavShkolu from "../pages/medicalcertificates/SpravkavShkolu";
import SpravkavDetskiiSad from "../pages/medicalcertificates/SpravkavDetskiiSad";
import SpravkavBassein from "../pages/medicalcertificates/SpravkavBassein";
import Blog from "../pages/Blog";
import Post1 from "../pages/posts/Post1";
import Post2 from "../pages/posts/Post2";
import Post3 from "../pages/posts/Post3";
import Post4 from "../pages/posts/Post4";
import SpravkavZdorove from "../pages/medicalcertificates/SpravkaZdorove";
import SpravkaForma026u from "../pages/medicalcertificates/SpravkaForma026u";
import MedicinskayaSpravka079u from "../pages/medicalcertificates/MedicinskayaSpravka079u";
import Post5 from "../pages/posts/Post5";

const publicRoutes = [
  // главная страница
  { path: "/", Component: Home },
  // страница о нас и ее подстраницы
  { path: "/o-nas/", Component: About },
  { path: "/o-nas/kontroliruyushie-organizacii/", Component: ControllingOrgan },
  { path: "/o-nas/licenzii/", Component: Licenses },
  { path: "/o-nas/pravovaya-informaciya/", Component: Documents },
  { path: "/o-nas/nashi-partnery/", Component: OurPartners },
  // страница прграммы и ее подстраницы
  { path: "/programmy-nablyudeniya-za-zdorovem/", Component: Programs },
  {
    path: "/programmy-nablyudeniya-za-zdorovem/malysh-houm-standart-ot-0-do-2-h-le/",
    Component: ProgramOne,
  },
  {
    path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-standart-ot-2/",
    Component: ProgramTwo,
  },
  {
    path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-midi-ot-2-h-l/",
    Component: ProgramThree,
  },
  // страницы врачей
  {
    path: "/doctor/sadovnikova-elena-gennadevna/",
    Component: DoctorSadovnikova,
  },
  { path: "/doctor/petuhova-olga-viktorovna/", Component: DoctorPetuhova },
  {
    path: "/doctor/shevchenko-anastasiya-nikolaevna/",
    Component: DoctorShevchenko,
  },
  { path: "/doctor/ostrouhova-natalya-petrovna/", Component: DoctorOstrouhova },
  // страница услуги и подстраницы
  { path: "/uslugi-i-ceny/", Component: Services },
  { path: "/uslugi-i-ceny/vyzov-pediatra-na-dom/", Component: DoctorNaDom },
  { path: "/uslugi-i-ceny/pediatr/", Component: Pediatr },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/",
    Component: MedicalCertificates,
  },
  // страницы мед. справки
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/sanatorno-kurortnaya-karta-dlya-det/",
    Component: SanatornoKurortnayaKarta,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-shkolu/",
    Component: SpravkavShkolu,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-detskii-sad/",
    Component: SpravkavDetskiiSad,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-bassein/",
    Component: SpravkavBassein,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-o-sostoyanii-zdorovya-reben/",
    Component: SpravkavZdorove,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-poforme-026-u/",
    Component: SpravkaForma026u,
  },
  {
    path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-po-forme-079-u/",
    Component: MedicinskayaSpravka079u,
  },

  // страница цены
  { path: "/prices/", Component: Prices },
  // страница контакты
  { path: "/kontakty/", Component: Contacts },
  // страница блога
  { path: "/blog/", Component: Blog },
  // посты
  { path: "/post/detskij-nevrolog-na-dom/", Component: Post1 },
  { path: "/post/klendar-vakcinacija/", Component: Post2 },
  { path: "/post/detskij-hirurg-na-dom/", Component: Post3 },
  { path: "/post/patronaj_novorojdennogo/", Component: Post4 },
  { path: "/post/adaptaciya_k_detskomu_sadu/", Component: Post5 },

  // страница ошибки
  { path: "*", Component: NotFound },
];

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
