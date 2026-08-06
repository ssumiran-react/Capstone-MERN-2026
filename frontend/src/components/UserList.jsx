import { useContext, useEffect } from "react";
import {UserContext} from "../context/UserContext.jsx";
import UserItem from "./UserItem";


export default function UserList(){
  const {userData, setUserData}= useContext(UserContext);  
    
  console.log ("UserList:",userData);
//   useEffect(() => {
    
//   }, []);
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div id="smallCardCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-3 justify-content-center">
                {userData && userData.map( u => 
                  <UserItem u={u} key={u._id}/> 
                )} 
              </div>
            </div>
          </div>
          <button className="carousel-control-prev btn btn-dark rounded-circle position-absolute top-50 translate-middle-y start-0" 
              type="button" data-bs-target="#smallCardCarousel" data-bs-slide="prev" style={{width: "40px", height: "40px"}}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next btn btn-dark rounded-circle position-absolute top-50 translate-middle-y end-0" 
              type="button" data-bs-target="#smallCardCarousel" data-bs-slide="next" style={{width: "40px", height: "40px"}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
//z-index: 10;  