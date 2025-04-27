import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTrainee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainee, setTrainee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching Trainee with ID:", id);
    fetch(`http://localhost:8000/get-trainee/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setTrainee(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setTrainee({ ...trainee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/edit-trainee/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trainee),
    })
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className="container mx-auto p-4 w-25">
      <h2 className="mb-4">Edit Trainee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="TraineeName" value={trainee.TraineeName} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Trainee Name" />
        <input name="Class" value={trainee.Class} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Class" />
        <input name="Gender" value={trainee.Gender} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Gender" />
        <input name="Age" value={trainee.Age} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Age" />
        <input name="Number" value={trainee.Number} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Number" />
        <input name="Dob" value={trainee.Dob} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="DOB" />
        <button type="submit" className="btn btn-success w-100">Update</button>
      </form>
    </div>
    </div>
  )
}

export default EditTrainee