import HomePage from "../containers/HomePage/Loadable"
import EditProfile from "../containers/Profile/Loadable"
import CreatePost from "../containers/createPost/Loadable"
import Followers from "../containers/Followers/Loadable"


export const privateRoutes = [
  // private Routes
  { path: '/', component: HomePage },
  { path: '/editprofile', component: EditProfile },
  { path: '/createpost', component: CreatePost },
  { path: '/userDetails', component: Followers },

];
