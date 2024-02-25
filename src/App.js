import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/frontend",
      element: <HomePage />,
    },
    {
      path: "create",
      element: <div>World, Hello!!</div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;