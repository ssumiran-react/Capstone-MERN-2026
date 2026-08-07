import { useState } from 'react'
import './App.css'
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { getLoginCredentialService } from './services/userService';

function App() {
  const [loggedUser, setLoggedUser] = useState([
    // {
    //   "userName":"jaland",
    //   "firstName":"Ja",
    //   "lastName":"Land",
    //   "password":"ja1234",
    //   "emailId":"tester11t@abc.com",
    //   "role":"Instructor",
    //   "linkedIn":"https://linkedin/tester11",
    //   "refreshToken":"1erw34d3",
    // }
  ]);
  const navigate = useNavigate();

  //Function to get User Login Credential
  const getLoginCredential = async(userCredential) => {
    try {
      const loginUser = await getLoginCredentialService(userCredential);
      //console.log(userLogin);
      if(loginUser != null){
        setLoggedUser(loginUser);
      }

      if (loginUser){
        navigate('/Home', { replace: true });
      }else{        
        navigate('/Login', { replace: true });
      }
    } catch(e) {
      console.error(e)
    }
  };

  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login userLogin={getLoginCredential}/>}/>
        <Route path="/Home" element={<Home loggedUser={loggedUser}/>}/>
        <Route path="/" element={<Login userLogin={getLoginCredential}/>}/>
      </Routes>
    </>
  )
}

export default App
