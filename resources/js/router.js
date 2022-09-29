import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import TagPage from './pages/TagPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
       {
          path: '/home',
          name: 'home',
          component: 'HomePage'
       },
       {
        path: '/tag',
        name: 'tag',
        component: 'TagPage'
     },
   ] 
});

export default router;