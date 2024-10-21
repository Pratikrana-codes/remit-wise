// import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Sendmoney = () => {

    // const navigate = useNavigate();

    const [form3Error,setForm3Error]= useState('');

    const [form3Data,setForm3Data] =useState({
        currency:'',
        amount:'',
        benificiaryGets:'',
        paymentMode:'',
        remarks:''
    });

    const handleChange = (e) => {
        let {name,value}= e.target;
        setForm3Data({
            ...form3Data,
            [name]:value,
        });
    };

    const isFormComplete=()=>{

        return Object.values(form3Data).every((value) => value.trim() !== "");
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // this line prevents the page from reloading

        if(isFormComplete()){
            setForm3Error("");
            console.log('Send money submitted:', form3Data);
        }else{
            setForm3Error("All fields are required!");
        }
    }

return (
    <>
        <section className='section-sendmoneyInfo'>
                <div className="heading">Send Money</div>
            <div className="sendmoneyInfo">
                <form onSubmit={handleSubmit} className='form'>
                            <label>
                            Currency:
                            <select 
                                name="currency"
                                onChange={handleChange}
                            >
                            <option value="">Select Currency</option>
                            <option value="INR">INR</option>
                            <option value="AUD">AUD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                                     {/* Add more countries as needed */}
                            </select>
                            </label>
                            <label>
                                Amount to Pay:
                                <input 
                                type="text"
                                name='amount'
                                onChange={handleChange}

                                placeholder='Amount' />
                            </label>

                            <label>
                                Benificiary Gets:
                                <input 
                                type="text"
                                name='benificiaryGets'
                                onChange={handleChange}

                                placeholder='Beneficiary Gets' />
                            </label>
                            <label>
                            Payment mode:
                            <select 
                                name="paymentMode"
                                onChange={handleChange}
 
                            >
                            <option value="">Payment Mode</option>
                            <option value="Credit card">Credit card</option>
                            <option value="Debit card">Debit card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Google Pay">Google Pay</option>
                                      {/* Add more countries as needed */}
                            </select>
                            </label>

                            <label>
                                Remarks:
                                <input 
                                type="text"
                                name='remarks'
                                onChange={handleChange}

                                placeholder='Remarks' />
                            </label>

                            <button type='submit'>Submit</button>

                </form>
            </div>
        </section>
    </>
);
};


export default Sendmoney