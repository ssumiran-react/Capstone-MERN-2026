import { useState } from 'react'
import './App.css'
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { getLoginCredentialService } from './services/userService';

function App() {
  const [loggedUser, setLoggedUser] = useState([]);//{userName:"jaland", password:"ja1234", role:"Instructor"}])
  const navigate = useNavigate();

  //Function to get User Login Credential
  const getLoginCredential = async(userCredential) => {
    try {
      const loginUser = await getLoginCredentialService(userCredential);
      //console.log(userLogin);
      if(loginUser != null){
        setLoggedUser(loginUser);
      }

      if (loginUser.length === 1){
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
