import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/home";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export { routeConfig };
