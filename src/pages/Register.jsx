import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import { useContext } from 'react';
import { useAuth } from '../store/auth';

const Register = () => {
    const [user,setUser]= useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });



    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();

    const handleInput = (e)=>{
        console.log(e);
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
                const response =  await fetch(`http://localhost:5000/api/auth/register`,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(user),
                });
                if(response.ok){
                    alert('Registered successfully')
                    const res_data = await response.json();
                    console.log('response-- ',res_data);
                    // store the token in localhost
                    storeTokenInLS(res_data.token);
                    setUser({
                        username:"",
                        email:"",
                        phone:"",
                        password:""
                    })
                    navigate('/login');
                }
                console.log(response);
            } catch (error) {
                console.log('registration',error);
            }
            
        }

return (
    <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                                src="/images/registration.jpg" 
                                alt="Image"
                                width="500"
                                height="500" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading'>Registration Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text" 
                                        name='username' 
                                        // placeholder='Enter username' 
                                        id="username"
                                        value={user.username}
                                        required 
                                        autoComplete='off'
                                        onChange={handleInput}
                                        />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
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
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number" 
                                        name='phone' 
                                        // placeholder='Enter phone' 
                                        id="phone" 
                                        value={user.phone}
                                        required 
                                        autoComplete='off'
                                        onChange={handleInput}

                                        />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
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

                                <button type='submit' className='btn'>Register Now</button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
)
}

export default Register