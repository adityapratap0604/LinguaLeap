import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './TeacherLogin';
import "./Signup.css"
// import '../login_singup/Signup';



function TeacherSignup() {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');

useEffect(()=>{
  localStorage.setItem('email', email);
   localStorage.setItem('uname', uname);
})
  const [values, setValues] = useState({
    uname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('uname', uname);
    console.log(values);

    axios
      .post(process.env.REACT_APP_API_URL+"/teachersignup", values)
      .then((res) => {
        console.log(res.data);
        navigate("/teacherlogin");
      })
      .catch((err) => console.log(err));
  };


  return (
    // <div>Signup</div>
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6"> <section className="login-wrap mtb-40">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 mb-5">
                  <div className="login-box">
                    <h1 className="text-center mb-4">Teacher SignUp</h1>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input type="text" name="uname" className="form-control" placeholder="Username" value={values.uname} onChange={handleInput} />
                      </div>
                      <div className="form-group">
                        <input type="text" name="email" className="form-control" placeholder="Email" value={values.email} onChange={handleInput} />
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="Password" value={values.password} onChange={handleInput} />
                      </div>
                      <div className="form-group">
                        <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password" onChange={handleInput} />
                      </div>
                      <div className="form-group">
                        <button type="submit" className='btn btn-success'>Sign up</button>
                        <Link to="/teacherlogin" className="btn btn-primary mx-3">Log In</Link>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </section></div>
          <div className="col-md-6">
            <img src="image/onetoone.png" alt="" className='imagessss' />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherSignup