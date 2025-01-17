import React, { useState } from "react";
import "./RegisterPage.css"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../service/UserService";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const userNameRegex = /^[A-Za-z0-9\s,.-]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    const nameRegex = /^[A-Za-z ]+$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/; 
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    const postalCodeRegex = /^[A-Za-z0-9]{5,10}$/;
    const phoneRegex = /^[0-9]+$/;

    if (!formData.username) return "UserName is required.";
    if (!userNameRegex.test(formData.username)) return "UserName contains invalid characters.";

    if (!formData.password) return "Password is required.";
    if (!passwordRegex.test(formData.password)) return "Password must contain letters and numbers only.";

    if (!formData.firstName) return "First name is required.";
    if (!nameRegex.test(formData.firstName)) return "First name should not contain numbers or special characters.";

    if (!formData.lastName) return "Last name is required.";
    if (!nameRegex.test(formData.lastName)) return "Last name should not contain numbers or special characters.";

    if (!formData.dob) return "Date of birth is required.";
    if (!dobRegex.test(formData.dob)) return "Date of birth must be in YYYY-MM-DD format.";

    if (!formData.addressLine1) return "Address Line 1 is required.";
    if (!addressRegex.test(formData.addressLine1)) return "Address Line 1 contains invalid characters.";

    if (formData.addressLine2 && !addressRegex.test(formData.addressLine2)) {
      return "Address Line 2 contains invalid characters.";
    }

    if (formData.addressLine3 && !addressRegex.test(formData.addressLine3)) {
      return "Address Line 3 contains invalid characters.";
    }

    if (!formData.postalCode) return "Postal code is required.";
    if (!postalCodeRegex.test(formData.postalCode)) return "Postal code must be 5-10 alphanumeric characters.";

    if (!formData.phoneNumber) return "Phone number is required.";
    if (!phoneRegex.test(formData.phoneNumber)) return "Phone number must be numerical.";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validate();
    if (errorMsg) {
      toast.error(errorMsg, { position: "top-center" });;
      return;
    }
    

    const payload = {
      username: formData.username,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      phoneNumber: formData.phoneNumber,
      address: {
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        addressLine3: formData.addressLine3,
        postalCode: formData.postalCode,
      },
    };

  
    try {
        const res = await UserService.saveUser(payload);
        if (res.status === 200 || res.status === 201) {
          toast.success("Registered Successfully!", { position: "top-center" });
          setFormData({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            dob: "",
            phoneNumber: "",
            addressLine1: "",
            addressLine2: "",
            addressLine3: "",
            postalCode: "",
          });
          setError("");
        } else {
          toast.error("Something went wrong!", { position: "top-center" });
        }
      } catch (err) {
        toast.error("Server Error!", { position: "top-center" });
      }
  };

 

  return (
    <div className="register-container">
      <h2 className="heading">Register Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label>Firstname:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your firstname"
          />
        </div>
        <div className="form-group">
          <label>Lastname:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your lastname"
          />
        </div>
        <div className="form-group">
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Enter additional address"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="addressLine3"
            value={formData.addressLine3}
            onChange={handleChange}
            placeholder="Enter additional address"
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter postal code"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default RegisterPage;
