import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./homecrud.module.css"
const Users = () => {
  let[content,setcontent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((res)=>{
      console.log(res.data)
      setcontent(res.data)
    })
  },[])

  let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    window.location.assign("/users")
  }

  return (
    <div id={style.userpage}>
      {content.map((x)=>{
        return(
          <div id={style.card}>
            <table>
            <tr>
              <td><h4>Name:</h4></td>
              <td><h4>{x.name}</h4></td>
            </tr>
            <tr>
              <td><h4>Salary:</h4></td>
              <td><h4>{x.salary}</h4></td>
            </tr>
            <tr>
              <td><h4>Company:</h4></td>
              <td><h4>{x.company}</h4></td>
            </tr>
            <tr>
            <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
            <td><button onClick={()=>(deleteData(x.id))}>Delete</button></td>
            </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default Users