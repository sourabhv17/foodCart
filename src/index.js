// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { AboutUs } from "./components/AboutUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState, useEffect } from "react";
import LogPage from "./components/LogPage";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const data = {
      name: "Virat Kohli",
      // password: "18@vk",
    };
    setUser(data.name);
  }, []);

  return (
    <userContext.Provider value={{ loggedInUser: user, setUser }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/log",
        element: <LogPage />,
      },
      {
        path: "/restaurant/:Id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// export default App;
