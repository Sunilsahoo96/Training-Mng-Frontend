import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Navbar = () => {
  const [cookies, removeCookie] = useCookies(["authToken", "userEmail"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("authToken", { path: "/" });
    alert("Logged Out Succesfully");
    navigate("/signin");
  };

  return (
    <div style={{ height: "100vh", }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: "10px" }}>
        <div className="container-fluid">
          {/* Logo & Heading */}
          <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "20px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Logo"
              style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
            />
            Admin Management
          </Link>

          {/* Toggle Button for Mobile View */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Trainer">Trainer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Trainee">Trainee</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TraineeRequest">Trainee Requests</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TrainerDashboard">Trainer Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Attendance">Attendance</Link>
              </li>
              <li className="nav-item">
                {cookies.authToken && (
                  <button onClick={handleLogout} className="btn btn-danger px-4 py-2">
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {
          cookies.authToken && (
            <h2 className="d-flex justify-content-between p-4"><span>Welcome Back</span> <span>{cookies.userEmail}</span></h2>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
