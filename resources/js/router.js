import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TagPage from './pages/TagPage';
import SinglePost from './pages/SinglePost';
import SingleTag from './pages/SingleTag';

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
         path: '/posts/search',
         name: 'SearchPage',
         component: SearchPage
      },

      {
         path: '/SinglePost/:id',
         name: 'SinglePost',
         component: SinglePost
      },

      {
         path: '/SingleTag/:id',
         name: 'SingleTag',
         component: SingleTag
      },
   ] 
});

export default router;