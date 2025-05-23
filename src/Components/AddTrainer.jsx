import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const AddTrainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    TrainerId: "",
    TrainerName: "",
    Mobile: "",
    Subject: "",
    Salary: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://training-mng-backend.onrender.com/add-trainer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => navigate("/"))
      .catch((err) => alert("Error: " + err.message));
  };
  return (
    <div className="container mx-auto p-4 w-25">
      <h2 className=" font-bold mb-4 ">Add Trainer</h2>
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
        <button type="submit" className="btn btn-success w-100 m-2">Add</button>
        <Link to="/" className='btn btn-primary w-100 m-2' >Back</Link>
      </form>
    </div>
  )
}

export default AddTrainer