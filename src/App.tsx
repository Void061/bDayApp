import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";

import { Home } from "./pages/Dasboard";
import { DashboardLayout } from "./layouts";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durata delle animazioni in millisecondi
    });
  }, []);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />       
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
