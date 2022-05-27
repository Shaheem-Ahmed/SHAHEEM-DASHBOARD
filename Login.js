import React from "react";
import{Button, Grid, Paper, Typography, Link} from "@mui/material"
import { TextField } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const paperStyle={padding:50, height:"70vh", width:280, margin:"20px auto" }
const Screen=()=>{
    return(
        
        <Grid item spacing={3} align="center">
            <Paper elevation={10} style={paperStyle}>
                
<h1><b>LOG IN</b></h1>
        <TextField className="USES" label='USERNAME' placeholder="ENTER USERNAME" fullWidth required/>
        <TextField className="USES" label='PASSWORD' placeholder="ENTER PASSWORD" type='password' fullWidth required/>
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="REMEMBER ME" />
    </FormGroup>
    <Button type="submit" color="warning" variant="contained" fullWidth>Sign In</Button>
    <Typography>
        <Link href="#">Forget Password?</Link>
    </Typography>
    <Typography>
       <b> Already have an account?</b>
    </Typography>
    <Typography>
        <Link href="">Sign Up</Link>
    </Typography>
            </Paper>
        </Grid>
        
    )
}

export default Screen;