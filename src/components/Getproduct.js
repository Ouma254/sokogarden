import { useState, useEffect } from "react"; // for state management
import axios from "axios"; // for the API Access
import { Link, useNavigate } from "react-router-dom"; // used to link other components


const Getproduct = () => {
    // initialize the hooks
    const [products, setProducts] = useState([]); // empty array  
    const [loading, setLoading] = useState(""); // loading message to show loading state
    const [error, setError] = useState("");  // error message to showing when an error occurs

    // create an object of useNavigate()
    const navigate = useNavigate();

    // specify the location the location of image
    const img_url = "https://makena.alwaysdata.net/static/images/";

    // function to help help fetch the data
    const getProducts = async () => {
        // set the state to be loading
        setLoading("Please wait, we are retrieving the products.. ");

        // try - catch to assist managing the process
        try {
            const response = await axios.get("https://makena.alwaysdata.net/api/get_product_details");
            setProducts(response.data);
            setLoading("");
        } catch(error) {
            setLoading("");
            setError("There is an error!");
        }
    }

    // useEffect to help trigger the process of products fetching once the component has fully loaded
    useEffect(() => {
        // call the function responsible for fetching the products
        getProducts();
    }, [])

    return (
        <div className="row ">
            <h3 className="mt-5">Available Products</h3>

            {/* bind the variables */}
            {loading && <p>{loading}</p>}
            {error && <p className="text-danger">{error}</p>}

            {/* map the products and display them */}
            {products.map((product) => (
                // create a ui for each product to be displayed on
                <div className="col-md-3 justify-content-center mb-4" key={product.id}>
                    {/* card to help display the products */}
                    <div className="card shadow card-margin">
                        {/* product image */}
                        <img
                            className="product_img mt-4"
                            src={img_url + product.product_photo}
                            alt={product.product_name}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description}</p>
                        <b className="text-warning">{product.product_cost}  KES</b> <br />

                        {/* button */}
                        <button
                            className="btn btn-dark mt-2 w-100"
                            onClick={() => navigate('/makepayment', {state : {product}})}
                        >
                            Purchase Now

                        </button>
                    </div>

                </div>
            ))}
            
        </div>
    )
}

export default Getproduct;