import React, { useState } from "react";

function MultiStepRegistrationForm() {
  const [userDetails, setUserDetails] = useState({});
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });

  console.log(userDetails);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep1 = () => {
    const { name, email, password } = formData;
    const newErrors = {};
    // Implement email validation logic here
    if (!name) {
      newErrors.name = "Name is Required";
    }
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (!isValidEmail1(email)) {
      newErrors.email = "Invalid email address";
    }
    // Implement  password validation logic here
    // Populate 'newErrors' object with validation errors

    if (!password) {
      newErrors.password = "password is requird";
    } else if (password.length < 6) {
      newErrors.password = "pasword must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail1 = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep2 = () => {
    const { dob, gender } = formData;
    const newErrors = {};

    // Implement date of birth and gender validation logic here
    // Populate 'newErrors' object with validation errors
    if (!dob) {
      newErrors.dob = " Date of Birth is Requird";
    }

    if (!gender) {
      newErrors.gender = " Gender is Requird";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const { name, email, password, dob, gender } = formData;
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      setUserDetails(formData);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Implement submission logic here
    // Send data to the server or perform any necessary actions
    // You can access user data in 'formData'
    // Reset the form or navigate to a success page as needed
  };
  return (
    <div>
      <h1 className=" mt-10 text-center text-2xl font-bold text-yellow-800">
        Multi-Step Registration Form
      </h1>
      {step === 1 && (
        <div>
          {/* Step 1: User Info Implement input fields and validation error display */}

          <h1 className=" my-10 ml-10 text-lg font-semibold">step 1</h1>
          <div className="text-center ">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              className=" border-2 border-green-200  py-2 px-5 "
            />
            <p className=" text-red-500">{errors.name}</p>
          </div>
          <div className=" mt-4 text-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              className="border-2 border-green-200  py-2 px-5 "
            />
            <p className=" text-red-500">{errors.email}</p>
          </div>
          <div className="mt-5 text-center">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create Password"
              className="border-2 border-green-200  py-2 px-5 "
            />
            <p className=" text-red-500">{errors.password}</p>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1 className=" my-10 ml-10 text-lg font-semibold">
          Step 2: Profile Info Implement input fields and validation error
          display
          </h1>
          <div className="mt-5 text-center">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="border-2 border-green-200  py-2 px-5"
            />
            <p className=" text-red-500">{errors.dob}</p>
          </div>
          <div className="mt-5 text-center">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="border-2 border-green-200  py-2 px-7"
            >
              <option value="">Select Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="transgender">transgender</option>
            </select>
            <p className=" text-red-500">{errors.gender}</p>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1 className=" my-10 ml-10 text-lg font-semibold">
          Step 3: Confirmation Display a summary of user input
          </h1>
        
          <h1 className="text-center font-semibold ">Name : {userDetails.name}</h1>
          <h2 className="text-center mt-2 font-semibold ">email : {userDetails.email}</h2>
          <h2 className="text-center mt-2 font-semibold ">password : {userDetails.password}</h2>
          <h2 className="text-center mt-2 font-semibold ">Date Of Birth : {userDetails.dob}</h2>
          <h2 className="text-center mt-2 font-semibold ">gender : {userDetails.gender}</h2>
        </div>
      )}
      <div className="flex justify-center gap-5">
        {step > 1 && <div>
          <button onClick={handlePrev} className=" mt-5  bg-yellow-800 py-2 px-10 text-white rounded">Previous</button>
          </div>}
        {step < 3 && (
         <div>
           <button
            onClick={handleNext}
            className=" mt-5  bg-yellow-800 py-2 px-10 text-white rounded"
          >
            Next
          </button>
         </div>
        )}
        {step === 3 && <button onClick={handleSubmit} className=" mt-5  bg-yellow-800 py-2 px-10 text-white rounded">Submit</button>}
      </div>
    </div>
  );
}

export default MultiStepRegistrationForm;
