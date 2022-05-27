import React from "react";
import{Button, Grid, Paper} from "@mui/material"
import { TextField } from '@mui/material'


const paperStyle={padding:50, height:"70vh", width:280, margin:"20px auto" }
const Signer=()=>{
    return(
        
        <Grid item spacing={3} align="center">
            <Paper elevation={10} style={paperStyle}>
                
<h1><b>SIGN IN</b></h1>
        <TextField className="USES" label='USERNAME' placeholder="ENTER USERNAME" fullWidth required/>
        <TextField className="USES" label='PASSWORD' placeholder="ENTER PASSWORD" type='password' fullWidth required/>
        <Button type="submit" color="warning" variant="contained" fullWidth>Sign In</Button>
        </Paper>
        </Grid>
        
    )
}

export default Signer;