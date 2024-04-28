import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Panda from "./Panda";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/panda", element: <Panda /> },
]);
