import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useNavigate } from 'react-router-dom';


// type userDetails={
//     name:string
//     email:string
//     username:string
//     password:string
// }
// type navigationProps={
//     pathname:string
//     state:userDetails
// }

export const Signup = () => {

    const navigation=useNavigate();

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');

    const handleChange=(e:ChangeEvent<HTMLInputElement>, type:string)=>{
        if(type==="name")
            setName(e.target.value)
        else if(type==='email')
            setEmail(e.target.value)
        else if(type==='username')
            setUsername(e.target.value)
        else if(type==='password')
            setPassword(e.target.value)
    }

    useEffect(() => {
        setPassword('');
    }, [username])

    const handleClick=()=>{
        console.log(name,email,username,password)
            
        if(name && email && username && password){
            navigation('/details',{state:{name,email,username,password}})
        }
        else {
            alert("Please enter all the details");
        }
        
    }

    return (
        <div className="signup">
            <div className="formfields">
                <h1 style={{display:"flex",color:"#898989"}}>Sign Up</h1>
                <TextField style={{width:"100%", backgroundColor:'#ffffff', borderRadius:10, marginTop:10}} onChange={(event:ChangeEvent<HTMLInputElement>)=>handleChange(event,'name')} id="outlined-basic" label="Name" variant="outlined" />
                <TextField style={{width:"100%",backgroundColor:'#ffffff', borderRadius:10, marginTop:10}} onChange={(event:ChangeEvent<HTMLInputElement>)=>handleChange(event,'email')} id="outlined-basic" label="Email" variant="outlined" />
                <div style={{display:'flex',width:"100%", justifyContent:"space-between", alignItems:'center'}}>
                <TextField style={{width:"50%", backgroundColor:'#ffffff', borderRadius:10, marginTop:10, marginRight:5}} onChange={(event:ChangeEvent<HTMLInputElement>)=>handleChange(event,'username')} id="outlined-basic" label="Username" variant="outlined" />
                <TextField type="password" value={password} style={{width:"50%", backgroundColor:'#ffffff', borderRadius:10, marginTop:10, alignSelf:"flex-end"}} onChange={(event:ChangeEvent<HTMLInputElement>)=>handleChange(event,'password')} id="outlined-basic" label="Password" variant="outlined" />
                </div>
                {/* <Link style={{ width:"100%", marginTop:10,height:"3rem", font}} to={{pathname:'/details'}}> */}
                <Button onClick={handleClick} style={{ width:"100%", marginTop:5,height:"3rem"}} variant="contained" color="primary">
                    Submit
                </Button>
                {/* </Link> */}
            </div>
        </div>
    )
}
