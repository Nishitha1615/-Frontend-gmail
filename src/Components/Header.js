import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Box, styled } from "@mui/material";
import { gmaillogo } from "../Logo/gmaillogo";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import InputBase from "@mui/material/InputBase";
const StyleAppBar = styled(AppBar)({
  background: "#f6f8fc",
  boxShadow: "none",
});

const SearchBar = styled(Box)({
  background: "#eaf1fb",
  marginLeft: 85,
  borderRadius: 50,
  minWidth: "680px",
  minHeight: "6px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 25px",
  "& > div": {
    width: "100%",
    padding: "0 20px",
  },
});

const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: "20px",
  },
});

const Header = ({ toggleDraw }) => {
  return (
    <StyleAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDraw} />
        <img src={gmaillogo} style={{ width: "120px", marginLeft: "20px" }} />

        <SearchBar>
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search Mail"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <TuneIcon color="action" />
        </SearchBar>
        <Wrapper>
          <HelpOutlineOutlinedIcon color="action" />
          <SettingsOutlinedIcon color="action" />
          <AppsOutlinedIcon color="action" />
        </Wrapper>
      </Toolbar>
    </StyleAppBar>
  );
};

export default Header;
