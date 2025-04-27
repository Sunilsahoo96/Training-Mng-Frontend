import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Trainee = () => {
  const [trainees, setTrainees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://training-mng-backend.onrender.com/get-trainee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTrainees(data);
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
      
      <h1 className="text-2xl font-bold text-center mb-4">Trainee List</h1>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
      
      </div>
      <div className="overflow-x-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Trainee ID</th>
              <th className="border border-gray-300 px-4 py-2">Trainee Name</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Number</th>
              <th className="border border-gray-300 px-4 py-2">DOB</th>
              <th className="border border-gray-300 px-4 py-2">TrainingRoom</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
          
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr key={trainee.TraineeId} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{trainee.TraineeId}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.TraineeName}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Class}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Gender}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Age}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Number}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Dob}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.TrainingRoom}</td>
                <td className="border border-gray-300 px-4 py-2">{trainee.Action}
                  <Link to={`/EditTrainee/${trainee.TraineeId}`} className="btn bi bi-pen-fill bg-warning mx-2"></Link>
          <Link to={`/DeleteTrainee/${trainee.TraineeId}`} className="btn bi bi-trash-fill bg-danger"></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className='btn btn-dark' style={{marginLeft:"1155px", marginTop:"5px"}}>Back</Link>
    </div>
  )
}

export default Trainee