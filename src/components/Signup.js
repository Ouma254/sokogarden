import { Link } from "react-router-dom"; // it is used for navigation or routing
import {useState} from 'react'; // it is used for state management
import axios from "axios"; //it is used to access the API

const Signup = () => {
    // Initialize the variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const  [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    // an arrow function to submit user data
    const submit = async (e) => {
        e.preventDefault(); // prevent default JS actions e.g submit
        

        // update the state of the app to be
        setLoading("Please wait as we upload your data");
        try {
            // let the user enter their details
            // update the user details using the hooks
            // create an object called Formdata()
            const data = new FormData();
            data.append('username', username);
            data.append('email', email);
            data.append('passwd', password);
            data.append('phone', phone);

            // console.log(username, email, password, phone);

            // post the data to the API
            // CREATE AN OBJECT TO STORE THE API Details
            const response = await axios.post("https://makena.alwaysdata.net/api/signup", data,
                
             );

            // set the state to be loading
            setLoading("Loading")
            setSuccess(response.data.message)



            // Clear the input fields
            setUsername("");
            setEmail("");
            setPassword("");
            setPhone("");
        } catch(error) {

            setLoading(""); //update loading hook to be empty
            setError(error.message);
            
        }
        
    }


    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <form onSubmit={submit}>
                    {loading}
                    {error}
                    {success}


                    <input 
                    type="text" 
                    className = "form-control" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username" 
                    required/>
                    
                    <br />

                    <input 
                    type="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email.." 
                    required />

                    <br />
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control" 
                    placeholder="Enter password.." 
                    required />

                    <br />

                    <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control" 
                    placeholder="Enter phone number.." 
                    required />

                    <br />
                    <button type="submit" className="btn btn-primary">
                        Create Account
                    </button>
                </form>

                Already have an account? <Link to='/signin'>Sign In</Link>

            </div>
        </div>
    )
}

export default Signup;