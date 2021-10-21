import login from '../containers/publicPages/login/Loadable';
import signUp from '../containers/publicPages/signUp/Loadable';

export const publicRoutes = [
  // Public Routes
  { path: '/login', component: login, ispublic: true },
  { path: '/signup', component: signUp, ispublic: true },
];
