import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

import ProjectList from "./ProjectList";


export default function Dashboard({projectByUser}){
  const {projectData, setProjectData}= useContext(ProjectContext); 
  
  //console.log("Dashboard: ", projectData);
  
  return(
    <>
      <div className="text-center bg-color-blue">
        <label>Project Dashboard</label>
      </div>  
      <ProjectList projectByUser={projectByUser} />
    </>
  )
}