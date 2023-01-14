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

const publicRoutes = [
  // главная страница
  { path: "/", Component: Home },
  // страница о нас и ее подстраницы
  { path: "/o-nas/", Component: About },
  { path: "/kontroliruyushie-organizacii/", Component: ControllingOrgan },
  { path: "/licenzii/", Component: Licenses },
  { path: "/pravovaya-informaciya/", Component: Documents },
  { path: "/nashi-partnery/", Component: OurPartners },
  // страница прграммы и ее подстраницы
  { path: "/programmy-nablyudeniya-za-zdorovem/", Component: Programs },
  { path: "/malysh-houm-standart-ot-0-do-2-h-le/", Component: ProgramOne },
  { path: "/zdorovyj-rebenok-houm-standart-ot-2/", Component: ProgramTwo },
  { path: "/zdorovyj-rebenok-houm-midi-ot-2-h-l/", Component: ProgramThree },
  // страницы врачей
  { path: "/sadovnikova-elena-gennadevna/", Component: DoctorSadovnikova },
  { path: "/petuhova-olga-viktorovna/", Component: DoctorPetuhova },
  { path: "/shevchenko-anastasiya-nikolaevna/", Component: DoctorShevchenko },
  { path: "/ostrouhova-natalya-petrovna/", Component: DoctorOstrouhova },
  // страница услуги и подстраницы
  { path: "/uslugi-i-ceny/", Component: Services },
  { path: "/vyzov-pediatra-na-dom/", Component: DoctorNaDom },
  { path: "/pediatr/", Component: Pediatr },
  { path: "/medicinskie-spravki-rebenku/", Component: MedicalCertificates },
  // страницы мед. справки
  {
    path: "/sanatorno-kurortnaya-karta-dlya-det/",
    Component: SanatornoKurortnayaKarta,
  },
  { path: "/spravka-v-shkolu/", Component: SpravkavShkolu },
  { path: "/spravka-v-detskii-sad/", Component: SpravkavDetskiiSad },
  { path: "/spravka-v-bassein/", Component: SpravkavBassein },

  // страница цены
  { path: "/prices/", Component: Prices },
  // страница контакты
  { path: "/kontakty/", Component: Contacts },
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
