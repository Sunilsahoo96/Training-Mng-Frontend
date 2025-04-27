import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditTrainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/get-trainer/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTrainer(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/edit-trainer/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trainer),
    })
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className="container mx-auto p-4 w-25">
      <h2 className="mb-4">Edit Trainer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="TrainerName" value={trainer.TrainerName} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Trainer Name" />
        <input name="Mobile" value={trainer.Mobile} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Mobile" />
        <input name="Subject" value={trainer.Subject} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Subject" />
        <input name="Salary" value={trainer.Salary} onChange={handleChange} className="form-control w-100 d-block my-2" placeholder="Salary" />
        <button type="submit" className="btn btn-success w-100">Update</button>
      </form>
    </div>
    </div>
  )
}

export default EditTrainer