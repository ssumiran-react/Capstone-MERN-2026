
export default function UserItem({u}){
  console.log ("UserItem:",u._id);  
  return (
    <div className="col-12 col-md-4" style={{maxWidth: "18rem"}} key={u._id}>
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center p-3">
          <h6 className="" hidden={true}>{u._id}</h6>  
          <h6 className="card-title fw-bold">{u.firstName} {u.lastName}</h6>
          <p className="card-text small text-muted">{u.role}</p>
          <button className="btn btn-primary btn-sm">Projects</button>
        </div>
      </div>
    </div>
  )  
}