


import { useEffect, useState } from "react";

import axios from "axios"

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const [Alluser,setAlluser]=useState([])



  useEffect(()=>{
    axios.get(`http://localhost:8080/employee`).then(({data})=>{
      setAlluser(data)
    })
  },[])
  let numbers={
    terminated:0,
    promoted:0,
    new:0
  }

  Alluser.map((e)=>{

    if(e.title=="intern")
    {
      numbers.new++
    }
    if(e.status==="terminated")
    {
      numbers.terminated++
    }
    if(e.title!="Team Lead" && e.title !="intern"&& e.status!=="terminated")
    {
      numbers.promoted++
    }
   
  
  })

console.log(Alluser)


  return (
      <center>
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees:<span className="totalemp">{Alluser.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{numbers.terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{numbers.promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{numbers.new}</span>
        </div>
      </div>
    </></center>
  );
};
