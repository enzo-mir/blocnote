import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import ContentAccess from "../pages/ContentAccess";
import Undifined from "../pages/Undifined";
import Connect from "../data/Connect";
import PrivateNavigation from "../navigation/PrivateNavigation";

const Navigation = () => {
  const [connected, setConnected] = useState(false);
  return (
    <>
      <Connect isConnected={setConnected} />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Undifined />} />
          <Route path="/" element={<Login />} />
          {connected && (
            <Route element={<PrivateNavigation isConnected={connected} />}>
              <Route path="/admin" element={<ContentAccess />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
