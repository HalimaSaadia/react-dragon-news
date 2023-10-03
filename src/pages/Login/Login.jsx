import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const {logIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const handleOnsubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
    .then(result => {
      console.log(result.user)
      setSuccess("successfully login")
      navigate(location?.state ?  location.state : "/")
    })
    .catch(error => {
      setError(error.message)
    })
  };
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleOnsubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-active">Login</button>
              </div>
            </form>

            <div className="mx-auto mb-5">
              <p>
                Don not have account{" "}
                <Link className="text-red-600" to="/register">
                  Register
                </Link>
              </p>
            </div>

            <div className="mx-auto mb-5">
             {success ?  <p className="text-green-600">{success} </p> : <p className="text-red-600">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
