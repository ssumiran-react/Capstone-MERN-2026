import { useContext, useEffect, useRef, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { createProjectForUser, deleteProjectId } from "../services/ProjectService";


export default function ProjectList({projectByUser}) {  //console.log("ProjectList")
  const {projectData, setProjectData}= useContext(ProjectContext); 
  const {projDetail, setProjDetail}= useState(); 

  const userIdRef = useRef();
  const userNameRef = useRef();
  const projNameRef = useRef();
  const projectDescRef = useRef();
  const gitHubRef = useRef();
  const urlRef = useRef();
  const startAtRef = useRef();
  const endAtRef = useRef();
  const isActiveRef = useRef();
  const detailsRef = useRef([]);

  const statusRef = useRef();
  const reasonRef = useRef();

  //Adding New Project for specific User.
  async function addNewProject(){
    const today = new Date();
    await createProjectForUser(
      {
        userId : userIdRef.current.value,
        userName : userNameRef.current.value,
        projectName : projNameRef.current.value,
        projectDesc : projectDescRef.current.value,
        gitHub : gitHubRef.current.value,
        url : urlRef.current.value,
        startAt : startAtRef.current.value,
        endAt : endAtRef.current.value,
        isActive :"Y",
        details : [
          {
            status : "Initial",
            reason : reasonRef.current.value,
            createAt : today
          }
        ]
      }
    );
    await projectByUser(userIdRef.current.value);

  //  
  // "projectName":"Cybor App",
  // "projectDesc":"Cybor App validates app id.",
  // "gitHub":"",
  // "url":"",
  // "startAt":"2026-08-03T18:32:11.087Z",
  // "endAt":"2026-08-07T18:32:11.087Z",
  // "userId":"6a70deab5ca0543bf30aac65",
  // "userName":"test2",
  // "isActive":"Y",
  // "details":[{
  //   "status":"Initial",
  //   "reason":"New project.",
  //   "createdAt":"2026-08-03T17:02:11.087Z"
  // }]
  }

  function onEditClick(p){
    userIdRef.current.value = p.userId;
    userNameRef.current.value = p.userName;
    projNameRef.current.value = p.projectName;
    projectDescRef.current.value = p.projectDesc;
    gitHubRef.current.value = p.gitHub;
    urlRef.current.value = p.url;
    startAtRef.current.value = p.startAt;
    endAtRef.current.value = p.endAt;
    console.log("edit: ",p.details)
    //setProjDetail(p.details);
  }

  function onDeleteProjectClick(id, userId){
    console.log(new Date(),"onDeleteProjectClick: ", id);
    deleteProjectId(id);
    projectByUser(userId);
  }

  useEffect(() => {
    
  }, [projectData]);
  
  console.log("ProjectList: ", projectData);
  return (
    <div className="container-fluid" >
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0">Project List</h5>
              
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th hidden={true}>#</th>
                      <th>Name</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData && projectData.map( p => 
                      <tr key={p._id}>
                        <td hidden={true} >{p.userId}</td>
                        <td>{p.projectName}</td>      
                        <td>{p.startAt}</td>
                        <td>{p.endAt}</td>
                        
                        <td><span className="badge bg-success">{
                          p.details.length != 0 && p.details[p.details.length-1].status}</span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-secondary py-0 px-1" onClick={()=> onEditClick(p)}>Edit</button>
                          <button className="btn btn-sm btn-outline-danger py-0 px-1" onClick={()=> onDeleteProjectClick(p._id, p.userId)}>Delete</button>
                        </td>
                      </tr> 
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm h-100">
            
            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3"> 
              <h5 className="mb-0">Project Details</h5>
              <button className="btn btn-sm btn-primary" onClick={addNewProject}>New Project</button>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">User Id: </label>
                  <input type="text" className="" placeholder="Enter project name" ref={userIdRef} required/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Login User name: </label>
                  <input type="text" className="" placeholder="Enter User login name" ref={userNameRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Project Name: </label>
                  <input type="text" className="" placeholder="Enter project name" ref={projNameRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Description: </label>
                  <input type="text" className="" placeholder="Enter project description" ref={projectDescRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">GitHub: </label>
                  <input type="text" className="" placeholder="GitHub URL" ref={gitHubRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Live URL: </label>
                  <input type="text" className="" placeholder="Live URL" ref={urlRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date: </label>
                  <input type="text" className="" placeholder="Start project date" ref={startAtRef} /> 
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date: </label>
                  <input type="text" className="" placeholder="End project date" ref={endAtRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Status: </label>
                  <input type="text" className="" placeholder="Update status" ref={statusRef}/> 
                </div>
                <div className="mb-3">
                  <label className="form-label">Reason: </label>
                  <input type="text" className="" placeholder="Update reason" ref={reasonRef}/> 
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary">Clear</button>
                  <button type="submit" className="btn btn-success">Update</button>
                </div>
                <div>
                  <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th hidden={true}>#</th>
                      <th>Status</th>
                      <th>Reason</th>
                      <th>Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projDetail && projDetail.map( d => 
                      
                      
                      <tr key={d._id}>
                        <td hidden={true} >{d._id}</td>
                        <td>{d.status}</td>      
                        <td>{d.reason}</td>
                        <td>{d.createAt}</td>
                        
                      </tr> 
                      
                    )}
                  </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>          
      </div>  
    </div>  
  )
}      
