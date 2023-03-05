import React, { useEffect } from 'react'
import style from "./homecrud.module.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const Edituser = () => {
  let [name, setname] = useState("");
  let [salary, setsalary ] = useState("");
  let [company, setcompany] = useState("");

  let {index}=useParams()
  // console.log(index);

  let Navigator=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then((resp)=>{
      console.log(resp.data);
      setname(resp.data.name)
      setsalary(resp.data.salary)
      setcompany(resp.data.company)
    })
  },[])

let nameData=(e)=>{
  e.preventDefault()
  setname(e.target.value)
}

let salaryData=(e)=>{
  e.preventDefault()
  setsalary(e.target.value)
}

let companyData=(e)=>{
  e.preventDefault()
  setcompany(e.target.value)
}
let formHandle=(e)=>{
  e.preventDefault()
  let payload={name,salary,company}
  axios.put(`http://localhost:3000/users/${index}`,payload)
  .then(()=>{
    console.log("DATA HAS BEEN SUCCESSFULLY UPDATED");
  })
  Navigator("/users")
  window.location.assign("/users")
}

  return (
    <div id={style.myform}>
      <form action="">
        <tr>
          <th colSpan="3">
            <h4>Update User Details</h4>
          </th>
        </tr>
        <tr>
          <td>
            <label htmlFor=" ">Name</label>
          </td>
          <td>
            :<input type="text" value={name}  onChange={nameData}/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="">Salary</label>
          </td>
          <td>
            :<input type="text" value={salary} onChange={salaryData} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="">Company</label>
          </td>
          <td>
            :<input type="text" value={company} onChange={companyData} />
          </td>
        </tr>
        <tr>
          <th colSpan="2">
            <button onClick={formHandle}>Update</button>
          </th>
        </tr>
      </form>
    </div>
  )
}

export default Edituser