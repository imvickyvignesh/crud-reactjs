import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import Homecrud from './components/Homecrud'
import Users from './components/Users'
import Edituser from './components/Edituser'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Homecrud/>
  <Routes>
    <Route element={<CreateUser/>} path="/"/>
    <Route element={<Users/>} path="/users"/>
    <Route element={<Edituser/>} path="/edit/:index"/>
  </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
