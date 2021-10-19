import PageNotFound from '../containers/publicPages/login/Loadable';
// import PageNotFound from "../containers/NotFoundPage/Loadable";
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from "./privateRoutes";


export const routes = [
  ...publicRoutes,
  ...privateRoutes,

  { path: '*', component: PageNotFound, ispublic: true },
];
