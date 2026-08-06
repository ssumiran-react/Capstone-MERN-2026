import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

import ProjectItem from "./ProjectItem";


export default function ProjectList() {  //console.log("ProjectList")
  const {projectData, setProjectData}= useContext(ProjectContext); 
    
  console.log("ProjectList: ", projectData);
  return (
    <div className="container-fluid" >
      <div className="row g-4">

      <div className="col-lg-7">
      <div className="card shadow-sm h-100">
        <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0">Project List</h5>
          {/* <button className="btn btn-sm btn-primary">Add New</button> */}
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
                    <td><span className="badge bg-success">{p.isActive=="Y" ? "Active":"Inactive"}</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary py-0 px-1">Edit</button>
                      <button className="btn btn-sm btn-outline-danger py-0 px-1">Delete</button>
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
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">Form Details (Create / Update)</h5>
        </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Item Name</label>
                {/* <input type="text" className="form-control" placeholder="Enter name"> </input> */}
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" >
                    <option >Active</option>
                    <option>Inactive</option>
                </select>
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-success">Save Item</button>
              </div>
            </form>
          </div>
      </div>
      </div>          
    </div>  
    </div>  
  )
}      
// "projectName":"Testid App",
//   "projectDesc":"Testid App validates app id.",
//   "gitHub":"",
//   "url":"",
//   "startAt":"2026-08-03T18:32:11.087Z",
//   "endAt":"2026-08-07T18:32:11.087Z",
//   "userId":"6a70dcab34f17d9f5bd4f935",
//   "userName":"test2",
//   "isActive":"Y",
//   "details":[{
//     "status":"Initial",
//     "reason":"New project.",
//     "createdAt":"2026-08-03T17:02:11.087Z"
//   }]