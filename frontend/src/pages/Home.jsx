import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";

import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UserList from "../components/UserList"

import { getAllUserDeveloper } from "../services/userService.jsx";
import { getProjectByUserId } from "../services/ProjectService.jsx"

export default function Home({loggedUser}){  
  //console.log ("getUserDev: ",loggedUser);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  
  //Get a Single Developer User or All Developer Users
  async function getUserDev(){ 
    try { 
      let users;

      //get Project Developer Users if loggedInUser is Instructor
      if (loggedUser.length === 0 ){
        navigate('/Login', { replace: true });
      }else if(loggedUser[0].role.toLowerCase() == "instructor"){  
        users = await getAllUserDeveloper();
      }else{  
        users = loggedUser; 
      }

      setUserData(users);
      //console.log ("Home:",userData);
    }catch(e) {
      console.error(e)
    }
  };

  //Get Projects By each User
  const projectByUser = async (uId)=>{ //console.log (uId,"projectByUser");
    try { 
      //get All Project related to single User
      const id = JSON.stringify(uId).replace(/"/g, '');
      const projData = await getProjectByUserId(id);
      
      setProjectData(projData);
      console.log (projData,"Home getProjectByUser:",projectData);
    }catch(e) {
      console.error(e)
    }
  };

  useEffect(() => {
    try {
      getUserDev();
    } catch (error) {
      console.error("Error Home useEffect(): ", error);
    }
  }, [projectData]);
  


  return(
    <div> 
      <Header />
      <UserContext.Provider value={{userData, setUserData}}>
        <UserList projectByUser={projectByUser} />
        {/* <Dashboard />     */}
      </UserContext.Provider>
      <Footer />
    </div>
  )
}