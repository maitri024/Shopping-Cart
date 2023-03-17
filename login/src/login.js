import React, { useState } from 'react'
import './login.css'
import pic from "./images/mountain.jpg"
import pic2 from "./images/logo192.png"
import pic3 from "./images/google.jpg"
import { NavLink } from 'react-router-dom'

function Login({ads}) {

    const[inpval,setInpval]=useState({
        email:"",
        password:""
    })

    const getData=(e)=>{
        // console.log(e.target.value)
    const{value,name}=e.target;
    setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
    })
    }
    
    const[data,setData]=useState([]);
    

    const handleSubmit = (e) => {
    e.preventDefault();
    ads()

     localStorage.setItem("userlogin",JSON.stringify([...data,inpval]))
    }
    return (
       
        <div className='whole'>
            <div className='container leftside'>
                <h1 className='headline'><img src={pic2}></img>Giihan</h1>

                <h1 className='welcome'>Welcome back</h1>

                <p className='para'>The faster you fill the faster you get a ticket</p>
                <form className='loginpage' onSubmit={handleSubmit}>

                    <label><b>Email:</b><br></br>
                        <input type="text" placeholder='Enter your mail' autoComplete='on'  
                            onChange={getData} name="email"></input>
                    </label><br></br><br></br>
                    <label><b>Password:</b><br></br>
                        <input type="password" placeholder='6 characters'  
                            onChange={getData} name="password"></input>
                    </label><br></br>
                    <input type="checkbox"></input>
                    <p class="sidepara">Remember Me </p>
                    <p class="rightpara">Forgot Password</p>

                    <button className='buttonstyle1' type='submit'>Sign In</button><br></br>
                    <button className='buttonstyle1'><NavLink to="/signin">Login</NavLink></button><br></br>
                    
                </form>


                <p className='bottompara'>Don't have an account?<b><NavLink to="/signin">Login</NavLink></b></p>
            </div>
            <div className='container rightside'>
                <img src={pic}></img>
                <div class="top-right">Apexa</div>
                <div class="bottom-left">
                    <h1>Karina Siaf</h1>
                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </p>
                </div>
            </div>
        </div>

    )
}


export default Login
