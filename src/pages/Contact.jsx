import React, { useState } from 'react';
import { useAuth } from '../store/auth';

const Contact = () => {

  const [contact,setContact] = useState({
    username:"",
    email:"",
    message:"",
  })

  const [userData,setUserData] = useState(true);
  const {user} = useAuth();

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })

    setUserData(false);
  }

  //lets tackle the handleinput
  const handleInput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]:value,
    })

  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    console.log(contact);
    try {
      const response =  await fetch(`http://localhost:5000/api/form/contact`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(contact),
      });
  
      if(response.ok){
      alert('Message sent successfully')
      const mes_data = await response.json();
      // console.log('message ',mes_data);

    }
    } catch (error) {
      console.log('contact form',error);
    }
    
    
}
  return (
    <>
        <section className='section-contact'>
              <div className="contact-content container">
                  <div className="contact-content container grid grid-two-cols">
                          <h1 className='main-heading'>Contact Form</h1>
                  </div> 
                   {/* contact page main  */}

                  <div className="container grid grid-two-cols">
                    <div className="contact-img">
                      <img src="/images/registration.jpg" alt="We are always ready to help" />
                    </div>

                    {/* contact content  */}
                    <section className="section-form">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="username">username </label>
                          <input type="text" name='username' id='username' value={contact.username} onChange={handleInput} required autoComplete='off' />
                        </div>

                        <div>
                          <label htmlFor="email">email </label>
                          <input type="text" name='email' id='email' value={contact.email} onChange={handleInput} required autoComplete='off' />
                        </div>

                        <div>
                          <label htmlFor="message">message </label>
                          <textarea name="message" id="message" value={contact.message} onChange={handleInput} cols='40' rows='5'></textarea>
                        </div>

                        <div>
                          <button type='submit'>Submit</button>
                        </div>
                      </form>
                    </section>

                  </div>
                  
              </div>
      </section>
    </>
  )
}

export default Contact