import React from "react";
import { Box, styled } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {routes} from '../Logo/routes.js'
import useApi from '../MiddleWare/useApi.js'
import { API_URLS } from "../services/api.url.js";


const Wrapper = styled(Box)({
  padding: "0px 0px 0px 10px",
  backgroundColor: "#f2f6fc",
  display:"flex",
  alignItems: "center",

  cursor: "pointer",
  '& >div': {
    display:"flex",
    width:"100%",
    '& >p':{
        fontSize:15
    }
  }
});

const Indicator = styled(Typography)({
    fontSize:'12px !important',
    backgroundColor: "#ddd",
    color:"#222",
    padding:"0 4px",
    borderRadius:"5px",
    marginRight:"7px"
});


const Date = styled(Typography)({
    marginLeft:"auto",
    marginRight:25,
    fontSize:"13px",
    color:"#5f6368",
})

const Email = ({ email ,selectmails , setReference,setSelectMails}) => {

  const navigate=useNavigate();

  const StarService=useApi(API_URLS.StarEmail);

  const toggleStarmails=() => {
    StarService.call({id:email._id,value:!email.starred});
    setReference(prevState=>!prevState);
  }

  const onValueChange=() => {
    if(selectmails.includes(email._id)){
      setSelectMails(prevState=>prevState.filter(id=>id != email._id));
    }
    else{
      setSelectMails(prevState=>[...prevState,email._id])
    }
  }

  return (
    <Wrapper>
      <Checkbox size="small" checked={selectmails.includes(email._id)} onChange={()=>onValueChange()}/>

      {
        email.starred ?
        <StarIcon size="small" style={{marginRight:"15px", color:"#f3c74b"}} onClick={()=>toggleStarmails()}/> :
        <StarBorderIcon size="small" style={{marginRight:"15px"}} onClick={()=>toggleStarmails()}/>
      }

      
      <Box onClick={()=>navigate(routes.view.path , {state:{email:email}})}>
        <Typography style={{width:"210px", overflow:"hidden"}}>{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
