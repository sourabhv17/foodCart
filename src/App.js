// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { AboutUs } from "./components/AboutUs";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./utils/ErrorPage";
// import { Outlet } from "react-router-dom";
// import { Suspense } from "react";
// import { Shimmer } from "./components/Shimmer";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <AboutUs />,
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
// ]);

// const App = () => {
//   return (
//     // <div className="app">
//     //   <Header />
//     //   <Outlet />
//     // </div>
//     <RouterProvider router={appRouter} />
//   );
// };

// // const root = ReactDOM.createRoot(document.getElementById("root")).render();

// export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { AboutUs } from "./components/AboutUs";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./utils/ErrorPage";
// import { Outlet } from "react-router-dom";

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <AboutUs />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={appRouter} />
//   </React.StrictMode>
// );

// export default App;
