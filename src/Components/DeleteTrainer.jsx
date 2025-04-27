import React from 'react'

import {  useParams, useNavigate } from "react-router-dom";

const DeleteTrainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const handleDelete = () => {
      fetch(`https://training-mng-backend.onrender.com/delete-trainer/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete trainer");
          }
          return response.json();
        })
        .then(() => navigate("/"))
        .catch((err) => alert("Error: " + err.message));
    };
  return (
    <div className="container mx-auto p-4 text-center">
        <h2 className="mb-4">Are you sure you want to delete this trainer?</h2>
        <button onClick={handleDelete} className="btn btn-danger mx-2">Yes, Delete</button>
        <button onClick={() => navigate("/Trainer")} className="btn btn-primary">Cancel</button>
      </div>
  )
}

export default DeleteTrainer