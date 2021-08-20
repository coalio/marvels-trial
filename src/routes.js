import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const Browse = React.lazy(() => import("./views/Browse"));
const Character = React.lazy(() => import("./views/Character"));
const Comic = React.lazy(() => import("./views/Comic"));
const Story = React.lazy(() => import("./views/Story"));
const Favorites = React.lazy(() => import("./views/Favorites"));

const routes = [
    { path: "/", exact: true, name: "Home", component: Home },
    {
        path: "/browse",
        exact: true,
        name: "Browse the Marvel's Trial",
        component: Browse,
    },
    {
        path: "/character/:id",
        exact: true,
        name: "Character profile",
        component: Character,
        from: "/browse",
    },
    {
        path: "/comic/:id",
        exact: true,
        name: "Comic details",
        component: Comic,
        from: "/browse",
    },
    {
        path: "/story/:id",
        exact: true,
        name: "Story details",
        from: "/browse",
        component: Story,
    },
    {
        path: "/favorites",
        exact: true,
        name: "Favorites",
        component: Favorites,
    },
];

export default routes;
