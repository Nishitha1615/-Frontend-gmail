import React, { useEffect , useState} from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url.js";
import useApi from "../MiddleWare/useApi.js";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Email from "./Email.js";
import Nomails from "./Nomails.js";
import { EMPTY_TABS } from "../Logo/gmaillogo.js";


const DisplayEmails = () => {
  const [selectmails,setSelectMails]=useState([]);
  const [reference,setReference] = useState(false);
  const { drawer } = useOutletContext();
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const DeleteEmailsService = useApi(API_URLS.DeleteEmails);
  const deleteEmailsService=useApi(API_URLS.MailDelete);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type,reference]);

const selectAllMails= (e)=>{
if(e.target.checked){
 const email = getEmailsService?.res?.map(email=> email._id);
 setSelectMails(email)
}
else{
  setSelectMails([]);
}
}

const DeleteEmails= (e)=>{
  if(type==='bin'){
    deleteEmailsService.call(selectmails)
  }
  else{
    DeleteEmailsService.call(selectmails)
  }
  setReference(prevState=>!prevState)
}

  return (
    <Box
      style={
        drawer ? { marginLeft: "255px", width: "calc(100%-250px)" } : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e)=> selectAllMails(e)}/>
        <DeleteOutlineIcon onClick={(e)=>DeleteEmails(e)}/>
      </Box>
      <List>
        {
           getEmailsService?.res?.map(email=>(
            <Email key={email._id} email={email} selectmails={selectmails} setReference={setReference} setSelectMails={setSelectMails}/>

           ))
        }
      </List>
      {/* {
        getEmailsService?.res?.length === 0  &&
        <Nomails message={EMPTY_TABS[type]}/>
      } */}
    </Box>
  );
};

export default DisplayEmails;
