import styled from 'styled-components';
import {useEffect,useState} from "react";
import axios from 'axios';
import {EmployeeCard} from "./EmployeeCard";


export const EmployeeList = () => {

const Main = styled.div`
    margin-top:10px;
    display: flex;
    flex-wrap: wrap;
`
const [allEmplyee,setEmplyee] =useState([]);

useEffect(() =>{
    axios.get(' http://localhost:8080/employee').then((res)=>{
        
   // console.log(res.data)
    setEmplyee(res.data)
        
    });
},[]);

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
     <div className="employee_card">
  <Main>
         {allEmplyee.map((e)=>{
             console.log(e)
              return <EmployeeCard image={e.image} title={e.title} employee_name={e.employee_name}></EmployeeCard>
           })
        }
     </Main>
        </div>

      </div>
    );
  };