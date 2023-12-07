// import useState from react
import { useState } from "react";
import axios from "axios";

const Registration = () => {
    // create state variable for the formdata
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",	
    });

    // create state variable for handling errors to the individual fields
    const [formErrors, setFormErrors] = useState({
        userName: "",
        email: "",
        password: "",
        phone: "",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // validate the form data
        // if the password is less than 6 characters and does not contain a special character show the error message.
        if(formData.password.length < 6 || !formData.password.includes("@")) {
            setFormErrors({ ...formErrors, password: "Password should be minimum 6 characters and should contain a special character @" });
        }
        // we can use fetch or axios to send the data to the server.
        // create the user data server
        const userData = {
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
        };

        // give userData object with sample data filled.

         //use axios to send the data to the server
        // axios.post("http://localhost:3001/api/users", userData)
        //     .then((response) => {
        //         console.log(response.data);

        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // use axios to send the data to the server using async and await

        const postUserData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/api/users", userData);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        postUserData();
      };

    const redColor ={color: "red"};
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleInputChange} />
                {formErrors.userName && <span style={redColor}>{formErrors.userName}</span>}
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                {/* show errro message for the password  */}
                {formErrors.password && <span style={redColor}>{formErrors.password}</span>}
                </div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;

