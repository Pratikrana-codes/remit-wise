import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const URL = 'http://localhost:5000/api/auth/login';

const Login = () => {

   const [user,setUser] = useState({
      email:"",
      password:""
   });

   const navigate = useNavigate();

   const {storeTokenInLS} = useAuth();


   const handleInput = (e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setUser({
         ...user,
         [name]:value,
      })
}

   const handleSubmit =async (e)=>{
   e.preventDefault();

   try {
      const response = await fetch(URL,{
         method:"POST",
         headers:{
            'Content-Type':'application/json',
         },
         body:JSON.stringify(user),
      });
      if(response.ok){
         alert("Login successful");
         const res_data = await response.json();
         storeTokenInLS(res_data.token);

         setUser({email:" ",password:" "});
         navigate('/');
      }else{
         alert('Invalid credentials');
         console.log("Invalid credentials");
         
      }
      console.log(response);
      
   } catch (error) {
      console.log(error);
   }
   }

return (
   <>
      <section>
            <main>
               <div className="section-login">
                  <div className="container grid grid-two-cols">
                        <div className="login-image">
                           <img 
                              src="/images/registration.jpg" 
                              alt="Image"
                              width="500"
                              height="500" />
                        </div>
                        <div className="login-form">
                           <h1 className='main-heading'>Login Form</h1>
                           <br />

                           <form onSubmit={handleSubmit}>
                              <div>
                                    <label htmlFor="email">email </label>
                                    <input 
                                       type="text" 
                                       name='email' 
                                       // placeholder='Enter email' 
                                       id="email"
                                       value={user.email} 
                                       required 
                                       autoComplete='off'
                                       onChange={handleInput}
                                       />
                              </div>
                                 
                              <div>
                                    <label htmlFor="password">password </label>
                                    <input 
                                       type="password" 
                                       name='password' 
                                       // placeholder='Enter password' 
                                       id="password" 
                                       value={user.password}
                                       required 
                                       autoComplete='off'
                                       onChange={handleInput}

                                       />
                              </div>
                              <br />

                              <button type='submit' className='btn'>Login Now</button>
                           </form>
                        </div>

                  </div>
               </div>
            </main>
      </section>
            </>
  )
}

export default Login