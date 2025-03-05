import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ForgotePassword = () => {
   const navigate = useNavigate();
   
   const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/reset-password')
}

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

            <form onSubmit={handleSubmit} method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                </div>
                
              </div>
            </form>

            <p className="mt-3 mb-1">
              <Link to={'/'} >Login</Link>
            </p>
            <p className="mb-0">
              <Link to={'/register'} className="text-center">Register a new membership</Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ForgotePassword
