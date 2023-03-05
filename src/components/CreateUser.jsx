import React from "react";
import { useState } from "react";
import style from "./homecrud.module.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let [name, setname] = useState("");
  let [salary, setsalary ] = useState("");
  let [company, setcompany] = useState("");

  let navigator=useNavigate();

  const nameData = (e) => {
    setname(e.target.value);
  };

  const salaryData = (e) => {
    setsalary(e.target.value);
  };

  const companyData = (e) => {
    setcompany(e.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    let payload={name,salary,company}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
        console.log("data has been added");
        setname("")
        setsalary("")
        setcompany("")
    })
    .catch(()=>{
        console.log("something is fishy");
    })
    navigator("/users")
    window.location.assign("/users")
  };
  return (
    <div id={style.myform}>
      <form action="">
        <tr>
          <th colSpan="3">
            <h4>User Details</h4>
          </th>
        </tr>
        <tr>
          <td>
            <label htmlFor=" ">Name</label>
          </td>
          <td>
            :<input type="text" value={name} onChange={nameData} />
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
            <button onClick={formHandle}>Submit</button>
          </th>
        </tr>
      </form>
    </div>
  );
};

export default CreateUser;
