import React from 'react'
import { Box, styled ,Divider} from "@mui/material";
import { Typography } from "@mui/material";

const Component=styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:55,
    opacity:'0.6',
    width:'100%',
});

const StyledDivider= styled(Divider)({
    width: '100%',
    marginTop:10,
})

const Nomails = ({message}) => {
  return (
    <Component>
        <Typography>{message.heading}</Typography>
        <Typography>
            {message.subHeading}
        </Typography>
        <StyledDivider/>
    </Component>
  )
}

export default Nomails
