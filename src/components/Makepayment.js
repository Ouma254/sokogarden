import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

const Makepayment = () => {
    // extract the location of the received request
    const {product} = useLocation().state || {};

    // create a hook to hold phone number
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    // create a submit function 
    const submit = async (e) => {
        e.preventDefault(); // prevents default actions

        // update the the state using the setMessage()
        setMessage("Please wait as we Process!");
        
        // create an object of the FormData()
        const data = new FormData();
        data.append("phone", phone);
        data.append("amount",  product.product_cost);

        // post the data to the api
        const response = await axios.post("https://makena.alwaysdata.net/api/mpesa_payment", data);

        setMessage("Please complete payment on your phone");

    } 

    return (
        <div>
            <h1>LIPA NA MPESA</h1>
            <p>Product Name: {product.product_name}</p>
            <p>Product Cost: {product.product_cost}</p>

            <form onSubmit={submit}>
                {message} <br />
                <input
                    type='text'
                    placeholder='Enter your phone number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br /> <br />
                <button className='btn btn-dark'>Make Payment</button>
            </form>
        </div>
    );
};

export default Makepayment;