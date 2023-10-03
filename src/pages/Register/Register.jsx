import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");

    createUser(email, password)
    .then(res => console.log(res.user))
    .catch(err => console.log(err.message))
  };
  return (
  <div>
    <Navbar />
   <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col   md:w-3/4 lg:1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleOnsubmit}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-active">Register</button>
            </div>
          </form>

          <div className="mx-auto mb-5">
            <p>
              Already have an account ?
              <Link className="text-red-600" to="/login">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
