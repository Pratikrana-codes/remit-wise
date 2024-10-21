import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
        {/* <footer className="container footer ">
      <div className="footer-bottom">
        <p>&copy; 2024 International Money Transfer. All rights reserved.</p>
      </div>
    </footer> */}
      <footer className="footer">
          <div className="container grid grid-four-cols">
            <div className="heading">
            <h2>We are expanding</h2>
            <br />
            <p>Currently in 5 countries</p>
            </div>
            <div className="div1">
              <img 
                src="/images/india.png" 
                alt="flag of india" 
                width="100" 
                height="100" />
                <br />
                <p>India</p>
            </div>
            
            <div className='div1'>
              <img
                src="/images/australia.png" 
                alt="flag of australia" 
                width="100"
                height="100"/>  <br />
                <p>Australia</p>
            </div>
            
            <div className='div1'>
              <img
                src="/images/unitedKingdom.png" 
                alt="flag of United Kindom" 
                width="100"
                height="100"/> <br />
                <p>England</p>
            </div>
            <div className="div1">
              <img 
                src="/images/unitedStates.png" 
                alt="flag of america" 
                width="100"  
                height="100" />  <br />
                <p>America</p>
            </div>
            <div className='div1'>
              <img
                src="/images/france.png" 
                alt="flag of france" 
                width="100"
                height="100"/> <br />
                <p>France</p>
            </div>  
          </div>
          <div className='footer-box'>
                <div className="list-item">
                  <ul>
                    <li>🏛️Remit Wise</li>
                    <li>Legal Complaints</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                  </ul>
                </div>
                <div className="footer-bottom">
                    {/* <NavLink to="/">Rana ka khandan</NavLink> */}
                    <p className='footer-bottom'>&copy; 2024 Remit Wise Payments Limited.</p>
                </div>
                <div className='footer-content'>
                    Wise is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011
                    , Firm <br />Reference 900507, for the issuing of electronic money. 
                     Wise works with a local bank partner to offer <br /> the service in India with the approval of the Reserve Bank of India.
                </div>
          </div>
          
      </footer>
    </>
  )
}

export default Footer