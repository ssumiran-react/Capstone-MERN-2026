import {useEffect, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import { getAllUserDeveloper } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Home({loggedUser}){  
  //console.log ("getUserDev: ",loggedUser);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  
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

  useEffect(() => {
    getUserDev();
  }, []);


  return(
    <div> 
      <Header />
      <UserContext.Provider value={{userData, setUserData}}>
      <UserList />
      {/* <Dashboard />     */}
      </UserContext.Provider>
      <Footer />
    </div>
  )
}