import React from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { emptyProfilePic } from "../Logo/gmaillogo.js";
import { API_URLS } from "../services/api.url.js";
import useApi from "../MiddleWare/useApi.js";

const IconWrapper = styled(Box)({
  padding:"15px"
});

const Subject=styled(Typography)({
  fontSize:"23px",
  margin:'10px 0 20px 76px',
  display:"flex"
})

const Indicator=styled(Box)({
  fontSize:"12px",
  backgroundColor:"#ddd",
  color:"#222",
  padding:'2px 4px',
  marginLeft:"7px",
  borderRadius:"5px",
  alignSelf:"center",
});

const Container=styled(Box)({
 width:"100%",
 marginLeft:"15px",
'& > div':{
  display:"flex",
  // width:"100%",
  '& >p >span':{
    fontSize:"13px",
    color:"#5E5E5E"
  }
}
  
});

const ImgWrapper=styled('img')({
  borderRadius:"50px",
  width:"40px",
  height:"40px",
  margin:"10px 15px 0 15px",
  background:"#cccccc"
});

const DateWrapper=styled(Box)({
  margin:"0px 50px 0 auto !important",
  fontSize:"12px",
  color:"#5E5E5E"
  
})

const ViewMail = () => {
  const DeleteEmailsService = useApi(API_URLS.DeleteEmails);

  const DeleteEmails=()=>{
    DeleteEmailsService.call([email._id]);
    window.history.back();
  }
  const { state } = useLocation();
  const { email } = state;
  const { drawer } = useOutletContext();
  return (
    <Box
      style={
        drawer ? { marginLeft: "255px" } : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBackIcon
          size="small"
          onClick={() => window.history.back()}
          color="action"
        />
        <DeleteOutlineIcon
          size="small"
          color="action"
          style={{ marginLeft: "40px" }}
          onClick={()=>DeleteEmails()}
        />
      </IconWrapper>

      <Subject>{email.subject} <Indicator component="span">Inbox</Indicator></Subject>
      <Box style={{display:"flex"}}>
        <ImgWrapper src={emptyProfilePic} alt="dp" />
        <Container >
          <Box>
            <Typography style={{marginTop:"15px"}}>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <DateWrapper>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "long",
              })}
              {new window.Date(email.date).getFullYear()}
            </DateWrapper>
          </Box>
          <Typography style={{marginTop:"25px"}}>
            {email.body}
          </Typography>
        </Container>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default ViewMail;
