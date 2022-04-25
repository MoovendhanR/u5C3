import {Link} from "react-router-dom";
import styled from "styled-components";


const SingleEmplyee= styled.div`
margin: 10px;
`

export const EmployeeCard=({image,employee_name,title})=>{





    return(
        <SingleEmplyee>
              <img className="employee_image" src={image} 
              style={{"height":"250px","width":"250px"}}
              alt=""/>
              <br />
          <span className="employee_name">{employee_name}</span>
          <br />
          <span className="employee_title">{title}</span>

        </SingleEmplyee>
    )
}