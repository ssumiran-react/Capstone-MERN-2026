
export default function UserItem({u, onUserProjectClick}){
  //console.log ("UserItem:",u._id);  

  async function onProjectClick(e, uId) { 
    e.preventDefault();
    //console.log(uId," oncli ");
    onUserProjectClick(uId);
  }  

  return (
    <div className="col-12 col-md-3" style={{maxWidth: "15rem"}}>
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center p-3">
          <h6 className="" hidden={true}>{u._id}</h6>  
          <h6 className="card-title fw-bold">{u.firstName} {u.lastName}</h6>
          <p className="card-text small text-muted">{u.role}</p>
          <button className="btn btn-primary btn-sm" 
            onClick={(e)=>onProjectClick(e,u._id)}>Projects</button>
        </div>
      </div>
    </div>
  )  
}