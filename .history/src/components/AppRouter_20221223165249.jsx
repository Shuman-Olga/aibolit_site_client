import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Prices from "../pages/Prices";
import Programs from "../pages/programs/Programs";
import Services from "../pages/Services";
import Contacts from "../pages/Сontacts";
import NotFound from "../pages/NotFound";
import ControllingOrgan from "../pages/ControllingOrgan";
import Licenses from "../pages/Licenses";
import Documents from "../pages/Documents";
import OurPartners from "../pages/OurPartners";
import ProgramOne from "../pages/programs/ProgramOne";
import ProgramTwo from "../pages/programs/ProgramTwo";
import ProgramThree from "../pages/programs/ProgramThree";
import DoctorSadovnikova from "../pages/doctors/DoctorSadovnikova";
import DoctorPetuhova from "../pages/doctors/DoctorPetuhova";
import DoctorShevchenko from "../pages/doctors/DoctorShevchenko";
import DoctorOstrouhova from "../pages/doctors/DoctorOstrouhova";
import DoctorNaDom from "../pages/uslugi/DoctorNaDom";

const publicRoutes = [
  { path: "/", Component: Home },

  { path: "/o-nas/", Component: About },
  { path: "/kontroliruyushie-organizacii/", Component: ControllingOrgan },
  { path: "/about/licenses/", Component: Licenses },
  { path: "/about/documents/", Component: Documents },
  { path: "/about/partners/", Component: OurPartners },
  { path: "/prices/", Component: Prices },

  { path: "/programs/", Component: Programs },
  { path: "/malysh-houm-standart/", Component: ProgramOne },
  { path: "/zdorovyj-rebenok-houm-standart/", Component: ProgramTwo },
  { path: "/zdorovyj-rebenok-houm-midi/", Component: ProgramThree },

  { path: "/sadovnikova-elena-gennadevna/", Component: DoctorSadovnikova },
  { path: "/petuhova-olga-viktorovna/", Component: DoctorPetuhova },
  { path: "/shevchenko-anastasiya-nikolaevna/", Component: DoctorShevchenko },
  { path: "/ostrouhova-natalya-petrovna/", Component: DoctorOstrouhova },

  { path: "/uslugi-i-ceny/", Component: Services },
  { path: "/uslugi/vyzov-pediatra-na-dom/", Component: DoctorNaDom },
  { path: "/contacts/", Component: Contacts },
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
