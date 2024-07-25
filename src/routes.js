import React from "react";
import {
  // createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
// import { routeConfig } from "./routeConfig";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         lazy: async () => {
//           const Home = await import("./pages/home");
//           return {
//             Component: Home.default,
//           };
//         },
//       },
//       {
//         path: "/about",
//         lazy: async () => {
//           const About = await import("./pages/About");
//           return {
//             Component: About.default,
//           };
//         },
//       },
//       {
//         path: "/contact",
//         lazy: async () => {
//           const Contact = await import("./pages/Contact");
//           return {
//             Component: Contact.default,
//           };
//         },
//       },
//     ],
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     routeConfig.map((routes) => (
//       <Route path="/" element={<Layout />}>
//         <Route path={routes.path} element={routes.element} />
//       </Route>
//     ))
//   )
// );

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/"
        lazy={async () => {
          const Home = await import("./pages/home");
          return {
            Component: Home.default,
          };
        }}
      />
      <Route
        path="/cusinebasedresturaunts"
        lazy={async () => {
          const CuisineBasedResturaunts = await import(
            "./pages/home/components/CuisineBasedResturaunts"
          );
          return {
            Component: CuisineBasedResturaunts.default,
          };
        }}
      />
      <Route
        path="/about"
        lazy={async () => {
          const About = await import("./pages/About");
          return {
            Component: About.default,
          };
        }}
      />
      <Route
        path="/contact"
        lazy={async () => {
          const Contact = await import("./pages/Contact");
          return {
            Component: Contact.default,
          };
        }}
      />
    </Route>
  )
);

export { router };

// createRoutesFromElement :: makes our routes in jsx form we can use with or without createRoutesFromElement inside createBrowserRouter

// createHashRouter: more friendly to SEO
