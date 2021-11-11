import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { addUser, initialState } from "../redux_stuff/userSlicer";

const useStyle = makeStyles({
  heading: { display: "flex", color: "#898989" },
  textField: { width: "100%", backgroundColor: "#ffffff", borderRadius: 10, marginTop: 10 },
  credentialContainer: { display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" },
  credentialTextFields: { width: "49%", backgroundColor: "#ffffff", borderRadius: 10, marginTop: 10 },
  button: { width: "100%", marginTop: 5, height: "3rem" },
});

export const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [user, setUser] = useState(initialState);
  const styles = useStyle();
  // const[name, setName]=useState('');
  // const[email, setEmail]=useState('');
  // const[username, setUsername]=useState('');
  // const[password, setPassword]=useState('');

  const handleChange = (value: string, type: string) => {
    switch (type) {
      case "name":
        // setName(value)
        setUser({ ...user, name: value });
        break;
      case "email":
        // setEmail(value)
        setUser({ ...user, email: value });
        break;
      case "username":
        // setUsername(value)
        setUser({ ...user, username: value });
        break;
      case "password":
        // setPassword(value)
        setUser({ ...user, password: value });
        break;
    }
  };

  useEffect(() => {
    setUser({ ...user, password: "" });
  }, [user.username]);

  const handleClick = () => {
    if (user.name && user.email && user.username && user.password) {
      dispatch(addUser(user));
      navigation("/details");
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <div className="signupContainer">
      <div className="formfields">
        <h1 className={styles.heading}>Sign Up</h1>
        <TextField
          className={styles.textField}
          onChange={(e) => handleChange(e.target.value, "name")}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          className={styles.textField}
          onChange={(e) => handleChange(e.target.value, "email")}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <div className={styles.credentialContainer}>
          <TextField
            className={styles.credentialTextFields}
            onChange={(e) => handleChange(e.target.value, "username")}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            type="password"
            value={user.password}
            className={styles.credentialTextFields}
            onChange={(e) => handleChange(e.target.value, "password")}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        {/* <Link style={{ width:"100%", marginTop:10,height:"3rem", font}} to={{pathname:'/details'}}> */}
        <Button onClick={handleClick} className={styles.button} variant="contained" color="primary">
          Submit
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};
