import { Outlet, Navigate } from "react-router-dom";

const PrivateNavigation = ({ isConnected }) => {
  return isConnected ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateNavigation;
