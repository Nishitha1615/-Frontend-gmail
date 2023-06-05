import React, { useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import DisplayEmails from "./DisplayEmails";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [drawer, setDrawer] = useState(true);

  const toggleDraw = () => {
    setDrawer((state) => !state);
  };
  return (
    <>
      <Header toggleDraw={toggleDraw} />
      <Box>
        <SideBar drawer={drawer} />
        <Outlet context={{ drawer }} />
      </Box>
      {/* <DisplayEmails drawer={drawer}/> */}
    </>
  );
};

export default Main;
