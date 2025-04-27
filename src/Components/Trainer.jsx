import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Trainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/get-trainer")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTrainers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  return (
    <div className="container mx-auto p-4">
    
      <h1 className="text-2xl font-bold text-center mb-4">Trainer List</h1>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
      <Link to="/AddTrainer" className='btn btn-primary' >Add Trainer</Link>
      </div>

      <div className="overflow-x-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 ">Trainer ID</th>
              <th className="border border-gray-300 px-4 py-2 ">Trainer Name</th>
              <th className="border border-gray-300 px-4 py-2 ">Mobile</th>
              <th className="border border-gray-300 px-4 py-2 ">Subject</th>
              <th className="border border-gray-300 px-4 py-2 ">Salary</th>
              <th className="border border-gray-300 px-4 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.TrainerId} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{trainer.TrainerId}</td>
                <td className="border border-gray-300 px-4 py-2">{trainer.TrainerName}</td>
                <td className="border border-gray-300 px-4 py-2">{trainer.Mobile}</td>
                <td className="border border-gray-300 px-4 py-2">{trainer.Subject}</td>
                <td className="border border-gray-300 px-4 py-2">{trainer.Salary}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/EditTrainer/${trainer.TrainerId}`} className="btn bi bi-pen-fill bg-warning mx-2"></Link>
                  <Link to={`/DeleteTrainer/${trainer.TrainerId}`} className="btn bi bi-trash-fill bg-danger"></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className='btn btn-dark' style={{marginLeft:"964px", marginTop:"5px"}}>Back</Link>
    </div>
  );
}


export default Trainer