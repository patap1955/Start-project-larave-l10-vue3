import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Catalog from "../components/pages/Catalog.vue";
import Contacts from "../components/pages/Catalog.vue";


const routes = [
     {
         path: '/',
         name: 'home',
         component: Home,
     },
     {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
     },
     {
        path: '/about',
        name: 'about',
        component: About,
     },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
     // {
     //     path: '/:CatchAll(.*)',
     //     name: '404',
     //     component: <h1 class="title">404 Not Found</h1>
     // }
 ]

export default routes
