import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TrainerDashboard = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/trainee-requests")
            .then(res => res.json())
            .then(data => setRequests(data))
            .catch(error => console.error("Error fetching trainee requests:", error));
    }, []);

    const handleApproval = async (id, status) => {
        await fetch(`http://localhost:8000/approve-trainee/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }) // ✅ No training room selection required
        });

        setRequests(prevRequests => prevRequests.filter(request => request.TraineeId !== id)); // ✅ Correct state update
    };

    return (
        <div style={{ width: "50%", margin: "50px auto", textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h2>Pending Trainee Requests</h2>

            {requests.length > 0 ? (
                requests.map(request => (
                    <div key={request.TraineeId} style={{ background: "#fff", padding: "10px", margin: "10px 0", borderRadius: "5px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
                        <p>{request.TraineeName} - {request.Class}</p>
                        <button onClick={() => handleApproval(request.TraineeId, "Accepted")}>Approve</button>
                        <button onClick={() => handleApproval(request.TraineeId, "Rejected")}>Reject</button>
                    </div>
                ))
            ) : (
                <p>No pending requests.</p>
            )}
            <Link to="/" className='btn btn-primary w-60 m-2'>Back</Link>
        </div>
    );
};

export default TrainerDashboard;
