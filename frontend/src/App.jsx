import { useState } from 'react'
import './App.css'
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { getLoginCredentialService } from './services/userService';

function App() {
  const [loggedUser, setLoggedUser] = useState([])
  const navigate = useNavigate();

  //Function to get User Login Credential
  const getLoginCredential = async(userCredential) => {
    
    try {
      const userLogin = await getLoginCredentialService(userCredential);
      //console.log(userLogin);
      setLoggedUser(userLogin);

      if (userLogin.length === 0){
        navigate('/Login', { replace: true });
      }else{        
        navigate('/Home', { replace: true });
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
        <Route path="" element={<Login userLogin={getLoginCredential}/>}/>
      </Routes>
    </>

    
  )
}

export default App
