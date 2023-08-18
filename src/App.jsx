import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Gig from "./Pages/Gig/Gig.jsx";
import Gigs from "./Pages/Gigs/Gigs.jsx";
import MyGigs from "./Pages/MyGigs/MyGigs.jsx";
import AddGigs from "./Pages/AddGigs/AddGig.jsx";
import Message from "./Pages/Message/Message.jsx";
import Messages from "./Pages/Messages/Messages.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
// import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./Pages/Pay/Pay.jsx";
import Success from "./Pages/success/Success.jsx";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/addgig",
          element: <AddGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
