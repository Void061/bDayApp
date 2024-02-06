import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const DashboardLayout = () => {


  const [loading, setLoading] = useState(0);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setLoading(30);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setLoading(100);
  }, [prevLoc]);

  return (
    <>
      <LoadingBar progress={loading} color="#00ff39" />

      <Outlet />
    </>
  );
};
export default DashboardLayout;
