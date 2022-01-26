import { lazy } from "react";
export const routes = [
  {
    name: "Главная",
    path: "/",
    component: lazy(() => import("../components/pages/main/Main")),
    exact: true,
  },
  {
    name: "О нас",
    path: "/about-us",
    component: lazy(() => import("../components/pages/abotus/AboutUs")),
    exact: false,
  },
  {
    name: "Контакты",
    path: "/contacts",
    component: lazy(() => import("../components/pages/contacts/Contacts")),
    exact: false,
  },
  {
    name: "Вопросы и ответы",
    path: "/questions",
    component: lazy(() => import("../components/pages/questions/Questions")),
    exact: false,
  },
  {
    name: "Запросы",
    path: "/requests",
    component: lazy(() => import("../components/pages/requests/Requests")),
    exact: false,
  },
];
