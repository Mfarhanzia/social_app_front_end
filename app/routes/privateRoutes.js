import HomePage from "../containers/HomePage/Loadable"
import EditProfile from "../containers/Profile/Loadable"


export const privateRoutes = [
  // private Routes
  { path: '/', component: HomePage },
  { path: '/editprofile', component: EditProfile },

];
