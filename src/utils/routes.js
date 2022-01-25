export const routes = [
  {
    name: "Главная",
    path: "/",
    component: "../components/pages/main/Main",
    exact: true,
  },
  {
    name: "О нас",
    path: "/about-us",
    component: "../components/pages/aboutus/AboutUs",
    exact: false,
  },
  {
    name: "Контакты",
    path: "/contacts",
    component: "../components/pages/contacts/Contacts",
    exact: false,
  },
  {
    name: "Вопросы и ответы",
    path: "/questions",
    component: "../components/pages/questions/Questions",
    exact: false,
  },
];
