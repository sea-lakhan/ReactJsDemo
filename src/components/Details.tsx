import React from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
// import { selectUser } from "../redux_stuff/userSlicer";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux_stuff/userSlicer";
import { makeStyles } from "@material-ui/core";
import { RootState } from "../redux_stuff/store";

const useStyle = makeStyles({
  heading: { display: "flex", color: "#898989", marginBottom: 5 },
  button: { width: "100%", marginTop: 5, height: "3rem" },
});

export const Details = (props: any) => {
  const user = useSelector((state:RootState)=>state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const styles = useStyle();
  console.log(user);
  const handleClick = () => {
    dispatch(removeUser());
    navigation("..");
  };

  return (
    <div className="signupContainer">
      <div className="detailsContainer">
        <h2 className={styles.heading}>User Details</h2>
        <h3>Name:{user.name}</h3>
        <h3>Email:{user.email}</h3>
        <h3>Username:{user.username}</h3>
        <Button className={styles.button} onClick={handleClick} variant="contained" color="primary">
          Back
        </Button>
      </div>
    </div>
  );
};
