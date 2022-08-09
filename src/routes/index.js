import Inbox from "../views/inbox/inbox";
import Favorite from "../views/favorite/favorite";
import Trash from "../views/trash/trash";

const RouteConfig = [
    {
        path: '/',
        component: Inbox,
    },
    {
        path: '/favorite',
        component: Favorite
    },
    {
        path: '/trash',
        component: Trash
    }
];

export default RouteConfig;
