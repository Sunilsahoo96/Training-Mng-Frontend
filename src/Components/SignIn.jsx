import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await fetch("https://training-mng-backend.onrender.com/trainees");
      const trainees = await response.json();
  
      if (!response.ok) {
        setError("Error fetching trainee data");
        return;
      }
  
      const user = trainees.find((t) => t.Email === email && t.Password === password);
  
      if (user) {
        // Store auth token and email in cookies
        setCookie("authToken", "valid-user-token", { path: "/", maxAge: 86400 });
        setCookie("userEmail", user.Email, { path: "/", maxAge: 86400 });
  
        alert("Signed in successfully!");
        navigate("/");
      } else {
        alert("Email or Password Invalid....");
        navigate("/signup");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };
  

  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={handleSignin} className="p-5 bg-white shadow-lg rounded rounded-4 text-center" style={{width:"400px", height:"400px"}}>
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div>
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 mb-4 border rounded form-control w-100"
            />
          </div>

          <div>
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-100 form-control p-2 mb-4 border rounded"
            />
          </div>

          <div>
            <button type="submit" className="btn w-100 bg-success text-white p-2 mb-3 rounded">
              Sign In
            </button>
          </div>
          <div>Don't have an account? <Link to="/signup"> Sign Up</Link></div>
        </form>

      </div>
      
    </div>
  );
};

export default Signin;
