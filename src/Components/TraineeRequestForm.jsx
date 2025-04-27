import { useState } from "react";
import { Link } from "react-router-dom";

const TraineeRequestForm = () => {
    const [name, setName] = useState("");
    const [traineeClass, setTraineeClass] = useState("");
    const [number, setNumber] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [trainingRoom, setTrainingRoom] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://training-mng-backend.onrender.com/request-trainee", 
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                TraineeName: name, 
                Class: traineeClass, 
                Number: parseInt(number), 
                Age: parseInt(age),
                Dob: dob,
                Gender: gender,
                TraineeId: Date.now(),
                TrainingRoom: trainingRoom
            })
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Trainee Request Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type="text" 
                    placeholder="TraineeName" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={styles.input}
                />

                <input 
                    type="text" 
                    placeholder="Class" 
                    value={traineeClass} 
                    onChange={(e) => setTraineeClass(e.target.value)} 
                    required 
                    style={styles.input}
                />

                <input 
                    type="number" 
                    placeholder="Number" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)} 
                    required 
                    style={styles.input}
                />

                <input 
                    type="number" 
                    placeholder="Age" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    required 
                    style={styles.input}
                />

                <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    required 
                    style={styles.input}
                />

                <select 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)} 
                    required
                    style={styles.select}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <select 
                    value={trainingRoom} 
                    onChange={(e) => setTrainingRoom(e.target.value)} 
                    required
                    style={styles.select}
                >
                    <option value="">Select a Training Room</option>
                    <option value="Room A">Room A</option>
                    <option value="Room B">Room B</option>
                </select>

                <div>
                    <button type="submit" style={styles.button}>Submit Request</button>
                    <Link to="/" className='btn btn-primary w-60 m-2'>Back</Link>
                </div>
            </form>
        </div>
    );
};

// Inline CSS
const styles = {
    container: {
        width: "40%",
        margin: "50px auto",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        color: "#333",
        fontSize: "22px",
        marginBottom: "15px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
    },
    input: {
        width: "80%",
        padding: "10px",
        fontSize: "14px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
    },
    select: {
        width: "85%",
        padding: "10px",
        fontSize: "14px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        cursor: "pointer",
    },
    button: {
        width: "85%",
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "0.3s",
    },
};

export default TraineeRequestForm;
