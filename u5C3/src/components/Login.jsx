import { useContext, useState } from "react";

import { AuthContext } from "./AuthContext";

import { useNavigate } from "react-router-dom";


export const Login = () => {
    //  use reqres to log user in.
    const { Handlingall} =useContext(AuthContext);
    const navigate= useNavigate();

    const [form, setForm]= useState({
        email:"",
        password:""
    });
    
    const handlechange=(e)=>{
        const {name, value}= e.target;
        setForm ({...form, [name]:value})
    }
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let logindata=form;
        let login_data= JSON.stringify(logindata);
        let res= await fetch("https://reqres.in/api/login",
        {
            method:"POST",
            body:login_data,
            headers:
            {"Content-type":"application/json"}
        });
        let data=await res.json();
        if(data.token){
            Handlingall(true);
            navigate("/")
        }
        else
        {
            alert("Email or Passowrd is invalid")
        }
     

    }
   

    return (
      <form onSubmit={handleSubmit} className="loginform" style={{width:"30%", display:"flex", flexDirection:"column", margin:"100px auto"}}>
        <input
          onChange={handlechange}
          name="email"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          onChange={handlechange}
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };