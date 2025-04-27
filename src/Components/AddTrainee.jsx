import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTrainee = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    TraineeId: "",
    TraineeName: "",
    Class: "",
    Gender: "",
    Age: "",
    Number: "",
    Dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/add-trainee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => navigate("/"))
      .catch((err) => alert("Error: " + err.message));
  };
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
         <div className="container mx-auto p-4 w-25">
      <h2 className=" font-bold mb-4 ">Add Trainee</h2>
      <form onSubmit={handleSubmit} className="my-4 ">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key}
            className="d-block my-2 form-control w-100"
          />
        ))}
        <button type="submit" className="btn btn-success w-100">Add</button>
      </form>
    </div>
    </div>
  )
}

export default AddTrainee