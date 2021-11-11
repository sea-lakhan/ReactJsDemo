import React from 'react';
import Button from '@material-ui/core/Button';
import { useLocation, useNavigate } from 'react-router';

export const Details = (props:any) => {

    const navigation=useNavigate();
    const data=useLocation();

    const handleClick=()=>{
        navigation('..')
    }
    
    return (
        
        <div className="signup">
        <div className="detailsContainer">
            <h2 style={{display:"flex",color:"#898989", marginBottom:5}}>User Details</h2>
            <h3>Name:{data?.state?.name}</h3>
            <h3>Email:{data?.state?.email}</h3>
            <h3>Username:{data?.state?.username}</h3>
            <Button onClick={handleClick} style={{ width:"100%", marginTop:5,height:"3rem"}} variant="contained" color="primary">
                Back
            </Button>
        </div>
        </div>
    )
}
