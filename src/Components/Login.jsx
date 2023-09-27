import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {

    const [ email,setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ error,setError ] = useState("")
    const navigate = useNavigate()


    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault()    
        axios.post('http://localhost:5000/login',{email,password})
        .then(result => {
            if(result.data.message == "sucessfully login"){
              window.localStorage.setItem("id",result.data.id)
            setError("");
            navigate('/products')
            window.location.reload();
          
            }
            else if(result.data.message == "Please fill all fields"){
               setError("Please fill all fields")
            }
            else if(result.data.message === "incorrect password"){
                setError("incorrect password")
            } else if(result.data.message === "email not found"){
                setError("email not found")
            } else {
                setError("")
            }
            console.log(result)    
        }).catch(err => console.log(err))
    }

  return (
    <>
      <div className="registration-container">
        <div className="register-sub-box">
         <form onSubmit={handleSubmit}>
           <h1 className="title">Login</h1>  
           
            <h3>Email</h3>
            <input 
             type="text"
             placeholder='Your Email'
             onChange={(e) => setEmail(e.target.value)}
            //  required
           /> 
           <h3>Password</h3>
            <input 
             type="password"
             placeholder='Password'
             onChange={(e) => setPassword(e.target.value)}
            //  required
           /> 
           <button type='submit'>Login</button>
           <p className='error'>{error}</p>

         </form>
         <p className='route-link'><Link to = "/auth/register">Don' have an account?</Link></p>
        </div>  
      </div> 
    </>
  )
}

export default Login
