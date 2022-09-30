import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import TagPage from './pages/TagPage';
import SinglePost from './pages/SinglePost';

const router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/home',
         name: 'HomePage',
         component: HomePage
      },
      
      {
         path: '/tag',
         name: 'TagPage',
         component: TagPage
      },

      {
         path: '/SinglePost/:id',
         name: 'SinglePost',
         component: SinglePost
      },
   ] 
});

export default router;