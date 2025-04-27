import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Attendance = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/attendance") 
            .then(res => res.json())
            .then(data => {
                setTotal(data.attendance);  // ✅ Only update total attendance count
            })
            .catch(error => console.error("❌ Error fetching attendance:", error));
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Training Attendance</h2>
            <p style={styles.totalPresent}>Total Present: <strong>{total}</strong></p>

            <Link to="/" className='btn btn-primary w-60 m-2'>Back</Link>
        </div>
    );
};

// Inline CSS styles
const styles = {
    container: {
        width: "50%",
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
        fontSize: "24px",
        marginBottom: "15px",
    },
    totalPresent: {
        fontSize: "20px",
        color: "#555",
        fontWeight: "bold",
    },
};

export default Attendance;
