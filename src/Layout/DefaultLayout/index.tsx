import React from "react";
import { Outlet } from "react-router-dom";

// import { Container } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
