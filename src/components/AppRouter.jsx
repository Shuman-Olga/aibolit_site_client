import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Prices from '../pages/Prices';
import Programs from '../pages/Programs';
import Services from '../pages/Services';
import Contacts from '../pages/Сontacts';
import NotFound from '../pages/NotFound';

const publicRoutes = [
  { path: '/', Component: Home },
  { path: '/about/', Component: About },
  { path: '/prices/', Component: Prices },
  { path: '/programs/', Component: Programs },
  { path: '/uslugi/', Component: Services },
  { path: '/contacts/', Component: Contacts },
  { path: '*', Component: NotFound },
];

// const authRoutes = [
//   {path: '/user', Component: User},
// ]

// const adminRoutes = [
//   {path: '/admin', Component: Admin},
// ]

const AppRouter = () => {
  // const isAuth = true
  // const isAdmin = true
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {/* {isAuth && authRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element={<Component />} />
          )}
          {isAdmin && adminRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element={<Component />} />
          )} */}
    </Routes>
  );
};

export default AppRouter;
