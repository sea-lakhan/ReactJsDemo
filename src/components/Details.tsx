import React from 'react'
import Button from '@material-ui/core/Button';
import {  useNavigate } from 'react-router';
import { initialState, selectUser } from '../redux_stuff/userSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux_stuff/userSlicer';
export const Details = (props:any) => {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const navigation=useNavigate();


    const handleClick=async()=>{
        await dispatch(removeUser(initialState))
        navigation('..')
    }

    return (
        <div className="signupContainer">
        <div className="detailsContainer">
            <h2 style={{display:"flex",color:"#898989", marginBottom:5}}>User Details</h2>
            <h3>Name:{user.name}</h3>
            <h3>Email:{user.email}</h3>
            <h3>Username:{user.username}</h3>
            <Button onClick={handleClick} style={{ width:"100%", marginTop:5,height:"3rem"}} variant="contained" color="primary">
                Back
            </Button>
        </div>
        </div>
    )
}
