import React, { useEffect, useState } from 'react'
import './login.css'
import pic from "./images/mountain.jpg"
import pic2 from "./images/logo192.png"
import Login from './login'

function Signin() {
    const[inpval,setInpval]=useState({
        email:"",
        password:""
    })
    const [isLogin, setIsLogin] = useState(true);

    const getData=(e)=>{
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

        const{email,password}=inpval;

        const getlogin=localStorage.getItem("userlogin")

        setIsLogin(true);
       
        if(getlogin && getlogin.length)
        {
            const userdata=JSON.parse(getlogin);
            const userlogin=userdata.filter((el,k)=>{
                return el.email === email && el.password === password
            });

            console.log(userlogin)
            
        }
    }

    const showSignin = () => {
        setIsLogin(false);

    }
    return ( 
        isLogin ?
        <Login ads={showSignin} />
        :
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

                        <button className='buttonstyle1' type='submit'>Log in</button><br></br>
                    </form>


                    <p className='bottompara'>Don't have an account?<b>Sign Up</b></p>
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

export default Signin
