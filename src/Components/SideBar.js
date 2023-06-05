import React from "react";
import SideBarContent from "./SideBarContent";
import { Drawer } from "@mui/material";
const SideBar = ({ drawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: "250px",
          background: "#f6f8fc",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
