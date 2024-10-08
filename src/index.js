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
import { Provider } from "react-redux";
import appStore from "./toolkit/appStore";
import RestaurantCart from "./components/RestaurantCart";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const data = {
      name: "",
    };
    setUser(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: user, setUser }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <RestaurantCart />,
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
