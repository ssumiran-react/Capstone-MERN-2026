import {useEffect, useState} from "react";
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import { getAllUserDeveloper } from "../services/userService";



export default function Home({loggedUser}){  
  //setUserData(props.loggedUser[0]);
  const [userData, setUserData] = useState();

  async function getUserDev(){ 
    try { 
      let users;
      if (loggedUser[0].role == "Instructor"){ console.log ("getUserDev: ",loggedUser[0].role);
        //const data = await getAllUserDeveloper();
        users = await getAllUserDeveloper();
      }else{
        users = loggedUser[0];
      }
      setUserData(users);
      console.log ("Home:",userData);
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
      <UserList userData={userData}/>
      {/* <Dashboard />     */}
      <Footer />
    </div>
  )
}