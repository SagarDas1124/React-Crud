import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Update = () => {
  const [id,setId]=useState(0)
  const [ename,setEname]=useState("")
  const [email,setEmail]=useState("")
  const [emobile,setEmobile]=useState("")
  const history = useNavigate();

  const handleUpdate=async(e)=>{
    e.preventDefault();
    try{
        await axios.put(`https://crud-express-node.onrender.com/api/v1/employee/${id}`,{ename,email,emobile})
        history("/")
    }catch(error){
        console.log(error.message);
    }
  }
   useEffect(()=>{
    setId(localStorage.getItem("id"));
    setEname(localStorage.getItem("ename"));
    setEmail(localStorage.getItem("email"));
    setEmobile(localStorage.getItem("emobile"));
   },[])
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Paper sx={{ width: "50vw" }} className="p-5 mt-5">
        <h2>Update</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={ename} onChange={(e)=>{setEname(e.target.value)}}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control" value={emobile} onChange={(e)=>{setEmobile(e.target.value)}}/>
          </div>

          <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>
            Update
          </button>
          <Link to="/">
            <button className="btn btn-success mx-2"> Back </button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};
