//Pages
import NoMatch from './pages/error';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Topics from './pages/topics';
import Users from './pages/users';


////////////////////////////////////////////////////////////
// then our route config
const Routes = [
  { 
    path: '/',
    component: Home
  },
  { 
    path: '/about',
    component: About
  },
   { 
    path: '/dashboard',
    component: Dashboard
  },
  { 
    path: '/topics',
    component: Topics
  },
  { 
    path: '/users',
    component: Users,
    routes: [
      { 
        path: '/tacos/bus',
        component: () => {}
      },
      { 
        path: '/tacos/cart',
        component: () => {}
      }
    ]
  }
];
export default Routes;