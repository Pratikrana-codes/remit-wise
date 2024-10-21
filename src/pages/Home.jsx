import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAuth } from '../store/auth';

const Home = () => {

  const {isLoggedIn} =useAuth();

  return (
    <>
    {/* first section */}
      <main> 
        <section className='section-hero'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Leading the Way in Secure Transfers!</p>
              <h1>Save When You Send Worldwide</h1>
              <p>
              At Remit Wise, we make sending and receiving money across borders quick, secure, and affordable. Whether you're supporting loved ones, paying for services, or handling business transactions, our platform is designed to simplify international payments.
              </p>
              <br />
              
            <div className="btn btn-group">
              {isLoggedIn?<NavLink to="/remitterinfo">
                <button className='btn'>Send money</button>
              </NavLink>:
              <p></p>  }
            </div>
            </div>

            <div className="hero-image">
                <img 
                    src="/images/registration.jpg" 
                    alt="Coding together" 
                    width="400" 
                    height="400"/>
            </div>
          </div>
        </section>
      </main>
    
   {/*  2nd Section starts here */}
    <section className="section-analytics">
      <div className="container grid grid-four-cols">
        <div className="div1">
          <h2>50+</h2>
          <p>Registered companies</p>
        </div>
        <div className="div1">
          <h2>10,000+</h2>
          <p>Happy clients</p>
        </div>
        <div className="div1">
          <h2>500+</h2>
          <p>Well known Developers</p>
        </div>
        <div className="div1">
          <h2>24/7</h2>;
          <p>Service</p>
        </div>
      </div>
    </section>

    {/* third section  */}
    <section className='section-hero'>
          <div className="container grid grid-two-cols">
          <div className="hero-image">
                <img 
                    src="/images/registration.jpg" 
                    alt="Coding together" 
                    width="400" 
                    height="400"/>
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
              Ready to take the first step towards a more efficient and secure
              international money transfers. Let's
              discuss why most of the people choose Us! and how you can send money to your loved ones.
              </p>
              <br />
              
            <div className="btn btn-group">
              <NavLink to="/about">
                <button className='btn'>Why and How</button>
              </NavLink>
            </div>
            </div>

            
          </div>
        </section>

        

      
              
 
    </>
  )
}

export default Home