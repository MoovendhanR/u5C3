//import styled from 'styled-components';
import {useState} from "react";



export const Admin = () => {

    const [employeeData,setEmployee]=useState({
        employee_name:"",
        employee_id:"",
        title:"",
        salary:"",
        image:'',
        username:"",
        password:"",
        tasks:"",
        status:"",
        team:""
    });

    const datachange=(e)=>{
        const{className,value}=e.target;
        setEmployee({
            ...employeeData,
            [className]:value
        })
    }

   // console.log("yes")
    const onSubmitData=async () => {
        try{
            let res=await fetch("http://localhost:8080/employee",{
                method: "POST",
                headers: {
                    "content type":"application/json",
                },
                body: JSON.stringify(employeeData)
            })
            let data=await res.json();
            console.log(data);
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <center>
      <form className="createEmployee">
        <input type="text" placeholder="Employee Name" name="employee_name" onChange={datachange} />
        <br />
        <input type="text" placeholder="Employee id" name="employee_id"  onChange={datachange} />
        <br />
        <select name="title" onChange={datachange} >
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <br />
        <input type="number" placeholder="Salary" name="salary" onChange={datachange} />
        <br />
        <input type="text" placeholder="Image" name="image"onChange={datachange}  />
        <br />
        <input type="text" placeholder="User Name" name="username" onChange={datachange} />
        <br />
        <input type="password" placeholder="Password" name="password"onChange={datachange}  />
        <br />
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
          onChange={datachange} 
        />
        <br />
        <select name="status" id="status" onChange={datachange} >
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <br />
        <select name="team" id="team" onChange={datachange} >
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <br />
        <input className="createUser" type="submit" value={"submit"} onClick={onSubmitData} />
      </form>
      </center>
    );
  };