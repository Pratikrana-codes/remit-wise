import { React, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';



const Remitterinfo = () => {

    const navigate = useNavigate();

    
    const {isLoggedIn} =useAuth();

    const [form1Data, setForm1Data] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        panNumber: '',
        aadharNumber: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
        address: '',
        bankName: '',
        accountNumber: '',
        ifscCode: ''
    });

        const [formError, setformError] = useState("");

    // Handle form field change
    const handleChange = (e) => {
        let name = e.target.name;
        let value  = e.target.value;
        setForm1Data({
            ...form1Data,
            [name]: value,
    });
    };

    // function to check if the user has filled the complete form
    const isFormComplete = () => {
        // Check if all fields are filled (non-empty and non-null values)
        return Object.values(form1Data).every((value) => value.trim() !== "");
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(isFormComplete()){
            setformError("");
            console.log('Remitter data Submitted:', form1Data);
            try {
                const response =  await fetch(`http://localhost:5000/api/info1/remitter`,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(form1Data),
                });
                
                if(response.ok){
                    alert('information saved successfully')
                    const remitter_data = await response.json();
                    // console.log('message ',mes_data);
                }
            } catch (error) {
                console.log('remiter form',error);
            }
            navigate('/beneficiaryinfo');
        }else{
            setformError("All fields are required!");
        }

        
      // Handle form submission logic here
    };

return (
    <>
        <section className='section-remitterInfo'>
        <div className="remitterInfo">
        <form onSubmit={handleSubmit} className='form'>
      {/* Remitter's Personal Information */}
        <h2 className='heading'>Remitter's Personal Information</h2><br />
        <label>
        Full Name:
        <input 
            type="text" 
            name="fullName" 
            value={form1Data.fullName} 
            onChange={handleChange} 
            placeholder="FULL NAME" 
        />
        </label>
        <label>
        Email:
        <input 
            type="email" 
            name="email" 
            value={form1Data.email} 
            onChange={handleChange} 
            placeholder="EMAIL" 
        />
        </label>
        <label>
        Phone Number:
        <input 
            type="text" 
            name="phoneNumber" 
            value={form1Data.phoneNumber} 
            onChange={handleChange} 
            placeholder="PHONE NUMBER" 
        />
        </label>
        <label>
        Date of Birth:
        <input 
            type="text" 
            name="dateOfBirth" 
            value={form1Data.dateOfBirth} 
            onChange={handleChange} 
            placeholder="dd-mm-yyyy" 
        />
        </label>
        <label>
        PAN Number:
        <input 
            type="text" 
            name="panNumber" 
            value={form1Data.panNumber} 
            onChange={handleChange} 
            placeholder="PAN NUMBER" 
        />
      </label>
      <label>
        Aadhar Number:
        <input 
            type="text" 
            name="aadharNumber" 
            value={form1Data.aadharNumber} 
            onChange={handleChange} 
            placeholder="AADHAR NUMBER" 
        />
        </label>
        <label>
        Country:
        <select 
            name="country" 
            value={form1Data.country} 
            onChange={handleChange}
        >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="USA">America</option>
          {/* Add more countries as needed */}
        </select>
        </label>
        <label>
        State/Province:
        <input 
            type="text" 
            name="state" 
            value={form1Data.state} 
            onChange={handleChange} 
            placeholder="STATE/PROVINCE" 
        />
        </label>
        <label>
        City:
        <input 
            type="text" 
            name="city" 
            value={form1Data.city} 
            onChange={handleChange} 
            placeholder="CITY" 
        />
        </label>
        <label>
        Postal Code:
        <input 
            type="text" 
            name="postalCode" 
            value={form1Data.postalCode} 
            onChange={handleChange} 
            placeholder="POSTAL CODE" 
        />
        </label>
        <label>
        Address:
        <input 
            type="text" 
            name="address" 
            value={form1Data.address} 
            onChange={handleChange} 
            placeholder="ADDRESS" 
        />
        </label><br />

      {/* Remitter's Bank Information */}
        <h2 className='heading'>Remitter's Bank Information</h2> <br /><br />
        <label>
        Bank Name:
        <input 
            type="text" 
            name="bankName" 
            value={form1Data.bankName} 
            onChange={handleChange} 
            placeholder="BANK NAME" 
        />
        </label>
        <label>
        Account Number:
        <input 
        type="text" 
            name="accountNumber" 
            value={form1Data.accountNumber} 
            onChange={handleChange} 
            placeholder="ACCOUNT NUMBER" 
        />
        </label>
        <label>
        IFSC Code:
        <input 
            type="text" 
            name="ifscCode" 
            value={form1Data.ifscCode} 
            onChange={handleChange} 
            placeholder="IFSC CODE" 
        />
        </label>

      {/* Submit Button */}
                <button type='submit' > Submit </button>
    </form>

        </div>
    
    </section>


    </>
)

}
export default Remitterinfo