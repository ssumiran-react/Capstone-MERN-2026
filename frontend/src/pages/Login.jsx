import { useRef } from "react";

export default function Login(props) {

  const userNameRef = useRef();
  const passwordRef = useRef();

  async function onLoginSubmit(e) { 
    //console.log(userNameRef.current.value," onLoginSubmit ",passwordRef.current.value);
    e.preventDefault();

    try{
      //Pass login info to App
      props.userLogin({
        userName:userNameRef.current.value,
        password:passwordRef.current.value
      });
    }catch(e) {
      console.error(e);
    }
  }
  return (
    <div className="bg-light d-flex align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="bg-primary text-white d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                    style={{width: "60px", height: "60px"}}>
                    <i className="bi bi-shield-lock-fill fs-3"></i>
                  </div>
                  <h2 className="fw-bold text-dark mb-1">Welcome Back</h2>
                  <p className="text-muted small">Please enter your credentials to log in</p>
                </div>

                <form onSubmit={onLoginSubmit} className="needs-validation">
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary small">User Name</label>
                    <div className="input-group">
                      <input type="text" className="form-index form-control border-start-0 bg-light" 
                        ref={userNameRef} placeholder="Login user name" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label fw-semibold text-secondary small mb-0">Password</label>
                    </div>
                    <div className="input-group">
                      <input type="password" className="form-control border-start-0 bg-light"
                        ref={passwordRef} placeholder="••••••••" required />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-2.5 fw-bold rounded-3 mb-3">
                    Sign In <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}