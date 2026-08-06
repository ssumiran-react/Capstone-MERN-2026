import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

import ProjectDetail from "./ProjectDetail";
import ProjectItem from "./ProjectItem";
import ProjectList from "./ProjectList";


export default function Dashboard(){
  const {projectData, setProjectData}= useContext(ProjectContext); 
  
  console.log("Dashboard: ", projectData);
  return(
    <>
        {/* <div className="col-lg-5"> */}
          <ProjectList />
        {/* </div>
       
        <div className="col-lg-7">*/}
          {/* <ProjectDetail /> */}
        {/* </div>  */}
      
    </>
  )
}