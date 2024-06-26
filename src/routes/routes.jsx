import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import GridSystem from "../Pages/Home/GridSystem/GridSystem";
import Home from "../Pages/Home/Home/Home";
import OrderTable from "../Pages/OrderTable/OrderTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/orderTable',
        element: <OrderTable />
      },

      {
        path: '/gridSystem',
        element: <GridSystem />
      }
    ]
  },
]);