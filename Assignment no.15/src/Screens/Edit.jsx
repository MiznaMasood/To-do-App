import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [editdata, setEditData] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
    axios .get("http://localhost:3000/Users/" + id)
    .then((res) => setEditData (res.data))
    .catch((err) => console.log(err))
 }, [])

 const hanldeSubmit = (e) =>{
    e.preventDefault();
    axios.put ("http://localhost:3000/Users/" + id, editdata)
    .then((res) =>{
        alert("user updated successfully..");
        navigate("/");

    })
    .catch((err) => console.log(err));
 }



  return (
    <form onSubmit={hanldeSubmit}>
      <Paper>
        <Typography m={4}>Edit User</Typography>
        <TextField
          onChange={(e) => setEditData({ ...editdata, name: e.target.value })}
          name="name"
          value={editdata.name}
          m={2}
        />
        <TextField
          onChange={(e) => setEditData({ ...editdata, email: e.target.value })}
          name="email"
          value={editdata.email}
          m={2}
        />
        <TextField
          onChange={(e) =>
            setEditData({ ...editdata, username: e.target.value })
          }
          name="username"
          value={editdata.username}
          m={2}
        />
        <TextField
          onChange={(e) => setEditData({ ...editdata, phone: e.target.value })}
          name="phone"
          value={editdata.phone}
          m={2}
        />
        <Button type="submit">Edit</Button> 
      </Paper>
    </form>
  );
};

export default Edit;