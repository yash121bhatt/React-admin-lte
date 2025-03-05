import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
}
  return (
    <div className='hold-transition login-page'>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

            <form onSubmit={handleSubmit} method="post">
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Change password</button>
                </div>
                {/* /.col */}
              </div>
            </form>

            <p className="mt-3 mb-1">
              <Link to={'/'} >Login</Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
