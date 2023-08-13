import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ResumePage from './Pages/ResumePage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GamePage from './Pages/GamePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);