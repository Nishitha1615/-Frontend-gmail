import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import useApi from "../MiddleWare/useApi";
import { API_URLS } from "../services/api.url";
import {
  Box,
  InputBase,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  backgroundColor: "#f2f6fc",
  "& >p ": {
    fontSize: 15,
    fontWidth: 400,
  },
});

const Textarea = styled(Box)({
  height: "50%",
  width: "100%",
});
const dialogStyle = {
  height: "87%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  marginTop: "5rem",
  marginLeft: "10rem",
  borderRadius: "12px 12px 0 0",
};

const FooterSend = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 10px",
  alignItems: "center",
});

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 17px",
  "&>div": {
    fontSize: 15,
    borderBottom: "1px solid #f0f3f4",
    marginTop: "10px",
  },
});

const Send = styled(Button)({
  backgroundColor: "#0b57d0",
  color: "#ffff",
  borderRadius: "20px",
  textTransform: "none",
  width: "100px",
});
const Compose = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService=useApi(API_URLS.saveSentEmail);
const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const config = {
    Host: "smtp.elasticemail.com",
    Username:process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeMenu = (e) => {
    e.preventDefault();
    const payload={
      to:data.to,
      from:"nishitham0@gmail.com",
      subject: data.subject,
        body: data.body,
        date:new Date(),
        image:'',
        name:'nishitha has sent the mail',
        starred:false,
        type:'draft'
    }

    saveDraftService.call(payload)

    if(!saveDraftService.error)
    {
      setOpenDialog(false);
      setData({});
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "nishitham0@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }


    const payload={
      to:data.to,
      from:"nishitham0@gmail.com",
      subject: data.subject,
        body: data.body,
        date:new Date(),
        image:'',
        name:'nishitha has sent the mail',
        starred:false,
        type:'sent'
    }

    sentEmailService.call(payload)

    if(!sentEmailService.error)
    {
      setOpenDialog(false);
      setData({});
    }
    setOpenDialog(false);
  };

  const onvaluechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize="small" onClick={(e) => closeMenu(e)} />
      </Header>
      <Wrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onvaluechange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onvaluechange(e)}
        />
      </Wrapper>
      <TextField
        name="body"
        multiline
        rows={19}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        onChange={(e) => onvaluechange(e)}
      />
      <FooterSend>
        <Send onClick={(e) => sendMail(e)}>Send</Send>
        <DeleteOutlineOutlinedIcon onClick={() => setOpenDialog(false)} />
      </FooterSend>
    </Dialog>
  );
};

export default Compose;
