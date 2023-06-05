import { Box, Button, styled } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { sidebar_data } from "../Data/sidebar.data";
import React, { useState } from "react";
import Compose from "./Compose";
import {useParams,NavLink} from 'react-router-dom'
import {routes} from '../Logo/routes.js'

const StyleButton = styled(Button)({
  background: "#c2e7ff",
  color: "#0e1113",
  padding: "17px",
  borderRadius: "20px",
  minWidth: "140px",
  textTransform: "none",
});

const Container = styled(Box)({
  padding: "9px",
  "& >ul": {
    padding: "10px 0 0 5px",
    fontSize: "15px",
    fontWeight: "500px",
    cursor: "pointer",
    '& >a':{
      textDecoration:'none',
      color:'inherit'
    }
  },
  "&>ul>a>li>svg": {
    marginRight: 20,
  },
});
const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
const {type}=useParams();
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <StyleButton onClick={() => onComposeClick()}>
        <EditOutlinedIcon /> Compose
      </StyleButton>
      <List>
        {sidebar_data.map((data) => (
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
          <ListItem style={type===data.name.toLowerCase() ? {
            backgroundColor:'#d3e3fd',
            borderRadius:'0 16px 16px 0'
          } :{}}>
            <data.icon fontSize="small" />
            {data.title}
          </ListItem>
          </NavLink>
        ))}
      </List>
      <Compose openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;
