import { useState } from "react";
import axios from "axios";


const ProductForm = (props) => {
    // will need a check to get user info to validate user isLoggedIn == true - otherwise people will break our app... i haven't coded this anywhere
    const [formDetails, setFormDetails] = useState({});
    const [formErrors, setFormErrors] = useState({});

    //get logged-in-user info

    const onChangeHandler = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/placeholder", formDetails, {withCredentials: true})
            .then(res => {
                console.log("add/update product:", res)
            })
            .catch(err => {
                setFormErrors(err.data);
                console.log("error in Product Form Submission:", err);
            })

    }

    return (
        <div className="formGroup">
            <form onSubmit={handleSubmit}>
                <p className="text-danger">{formErrors?.error}</p>
                <div className="form-field">
                    <p>Name of DevTool:</p>
                    <input type="text" name="toolName" id="toolName" className="form-control" placeholder="CoPilot, Ansible, BitBucket, etc." onChange={ (e) => onChangeHandler(e) } />
                </div>

                <div className="form-field">
                    <p>Category:</p>
                    <input type="text" name="toolCategory" id="toolCategory" className="form-control" placeholder="Frontend, Backend, etc." onChange={ (e) => onChangeHandler(e) } />
                </div>

                <div className="form-field">
                    <p>Link to tool docs/homepage:</p>
                    <input type="text" name="toolLink" id="toolLink" className="form-control" placeholder="http://www.somewhere.com/" onChange={ (e) => onChangeHandler(e) } />
                </div>

                <div className="form-field">
                    {/* this needs to be given a flexible text field size - text area isn't really suitable for this still, (idk it makes inputs weird imo) */}
                    <p>Description:</p>
                    <input type="text" name="toolDescription" id="toolDescription" className="form-control" placeholder="This tool does 'x' and makes our lives easier/better because of 'y'... etc. etc." onChange={ (e) => onChangeHandler(e) } />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default ProductForm;