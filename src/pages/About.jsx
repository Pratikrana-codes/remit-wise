import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';



const About = () => {
  const {isLoggedIn} =useAuth(); 

  return (
    <>
      <main>
        <section className='section-about'>
          <div className="container grid grid-two-cols">
            <div className="content">
                <h1>Why Choose Us?</h1><br />

                <div className="main-content">
                    <p><span>Fast Transfers</span> : Quick, real-time money transfers with no delays.</p> 
                    <p><span>Global coverage </span> : Send money to multiple countries effortlessly.</p>
                    <p><span>Great Exchange rates</span> : Competitive rates, maximizing the value of your transfer.</p>
                    <p><span>Low Fees</span> : Affordable, transparent pricing with no hidden costs.</p>
                    <p><span>Secure Transactions </span> : Advanced encryption keeps your money safe.</p>
                    <p><span>24/7 Support</span> : We're here to assist you anytime, anywhere. </p>
                </div>
            </div>
            <div className="content-image">
                    <img src="images/registration.jpg" alt="Image of girl" width="400" height="400"/>
            </div>
          </div>
        </section>
      </main>
      <div className='line'></div>

      <section className='section-how'>
          <div className="container grid grid-two-cols">
          <div className="content-image">
                <img 
                    src="/images/registration.jpg" 
                    alt="Coding together" 
                    width="400" 
                    height="400"/>
            </div>
            <div className="main-content">
                    <h1>How to send money?</h1><br />

                    <p><span>Sign Up</span> : Create your account.</p> 
                    <p><span>Verify Identity </span> : Submit required documents.</p>
                    <p><span>Add Payment Method</span> : Link your bank or card.</p>
                    <p><span>Enter Recipient Details</span> :  Provide the recipient's info.</p>
                    <p><span>Specify Amount </span> :Enter how much you want to send.</p>
                    <p><span>Review & Confirm</span> : Check details and confirm the transaction.</p><br />
            <div className="btn btn-group">
              { isLoggedIn? " ":
              <NavLink to="/register">
                <button className='btn'>Register Now</button>
              </NavLink>
}
            </div>
            </div>

            
          </div>
        </section>
      
    </>
  )
}

export default About