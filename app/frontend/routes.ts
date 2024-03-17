import HomePage from './pages/HomePage';
import Details from "./pages/Details";
import EditEventPage from "./pages/EditEventPage";
import AddEventPage from "./pages/AddEventPage";

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
        path: '/events/edit/:id',
        component: EditEventPage,
    },
    {
        path: '/events/new',
        component: AddEventPage,
    }
]

export default routes;