
import {  useParams, useNavigate } from "react-router-dom";

export function DeleteTrainee() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const handleDelete = () => {
      fetch(`http://localhost:8000/delete-trainee/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete trainee");
          }
          alert("Trainee Deleted Succesfully...")
          return response.json(); 
        })
        
        .then(() => navigate("/"))
        .catch((err) => alert("Error: " + err.message));
    };
  
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="mb-4">Are you sure you want to delete this trainee?</h2>
        <button onClick={handleDelete} className="btn btn-danger">Yes, Delete</button>
        <button onClick={() => navigate("/Trainee")} className="btn btn-primary mx-2">Cancel</button>
      </div>
    );
  }