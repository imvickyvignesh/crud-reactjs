import React from 'react'
import style from "./homecrud.module.css"
import { Link } from 'react-router-dom'
const Homecrud = () => {
  return (
    <section id={style.nav}>
    <Link to="/">CreateUser</Link>
    <Link to="/users">Users</Link>
    </section>
  )
}

export default Homecrud