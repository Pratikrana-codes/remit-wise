import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Benificiaryinfo = () => {

    const navigate = useNavigate();

    const [formError, setformError] =useState('');
    
    const [form2Data, setForm2Data] = useState({
        accName: '',
        accNum: '',
        country: '',
        stateName: '',
        cityName: '',
        postalCode: '',
        address: '',
        bankName:'',
        bankAdd:'',
        bankCountry:'',
        swiftCode:'',
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value  = e.target.value;
        setForm2Data({
            ...form2Data,
            [name]: value,
    });
};

     // function to check if the user has filled the complete form
    const isFormComplete = () => {
        // Check if all fields are filled (non-empty and non-null values)
        return Object.values(form2Data).every((value) => value.trim() !== "");
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        if(isFormComplete()){
            setformError("");
            console.log('Beneficiary data Submitted:', form2Data);

            try {
                const response =  await fetch(`http://localhost:5000/api/info2/benificiary`,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(form2Data),
                });
                
                if(response.ok){
                    alert('Message sent successfully')
                    const benificiary_data = await response.json();
                    // console.log('message ',mes_data);
                }
            } catch (error) {
                console.log('benificiary form',error);
            }
            navigate('/sendmoney');
        }else{
            setformError("All fields are required!");
        }
    }


return (
    <>
            <section className="section-benificiaryInfo">
                <div className='benificiaryInfo'>
                    <form onSubmit={handleSubmit} className='form'>
                        <h2 className='heading'>Benificiary personal information</h2><br />
                        <label>
                            Account Holder's Name:
                            <input 
                            type="text"
                            name="accName"
                            onChange={handleChange}
                            placeholder="Account Holder's Name" 
                            />
                        </label>
                        <label>
                            Account Number:
                            <input 
                            type="text"
                            name="accNum"
                            onChange={handleChange}

                            placeholder="Account Number"
                            />
                        </label>
                        
                        <label>
                            Country:
                            <select 
                                name="country"
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
                            Select State/Region:
                            <input
                            type="text"
                            name="stateName"
                            onChange={handleChange}
                            placeholder="Select State"
                            />
                        </label>
                        <label>
                            City:
                            <input 
                            type="text" 
                            name="cityName"  
                            onChange={handleChange}
                            placeholder="City"
                            />
                        </label>
                        <label>
                            Address:
                            <input 
                            type="text" 
                            name="address"  
                            onChange={handleChange}
                            placeholder="Address"
                            />
                        </label>
                        <label>
                            Postal Code:
                            <input
                            type="text"
                            name="postalCode"
                            onChange={handleChange}
                            placeholder="Postal Code"
                            />
                        </label> <br />
                        <h2 className='heading'>Benificiary Bank Information</h2><br />
                        <label>
                            Bank Name:
                            <input 
                            type="text" 
                            name="bankName"  
                            onChange={handleChange}
                            placeholder="Bank Name"
                            />
                        </label>
                        <label>
                            Bank address:
                            <input
                            type="text"
                            name="bankAdd"
                            onChange={handleChange}

                            placeholder="Bank Address"
                            />
                        </label>
                        <label>
                            Bank country:
                            <input 
                            type="text"
                            name="bankCountry"
                            onChange={handleChange}

                            placeholder="Bank Country"
                            />
                        </label>
                        <label>
                            Swift code:
                            <input
                            type="text"
                            name="swiftCode"
                            onChange={handleChange}

                            placeholder="Swift Code"
                            />
                        </label>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </section>
    </>
)
}

export default Benificiaryinfo