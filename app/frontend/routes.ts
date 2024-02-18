import HomePage from './pages/HomePage';
import Details from "./pages/Details";
import EditEventPage from "./pages/EditEventPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/events/:id',
        component: Details,
    },
    {
        path: '/events/new/:id',
        component: EditEventPage,
    }
]

export default routes;