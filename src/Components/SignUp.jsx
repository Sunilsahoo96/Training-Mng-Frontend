import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Token received:", data.token);  // ✅ Debugging step

        setCookie("authToken", data.token, { path: "/", maxAge: 86400 });

        navigate("/");  // ✅ Ensure route is correct
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div >
      <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={handleSignup}  className="p-5 bg-white shadow-lg rounded rounded-4 text-center" style={{width:"400px", height:"400px"}}>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-100 form-control p-2 mb-4 border rounded"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-100 form-control p-2 mb-4  border rounded"
            />
          </div>

          <div>
            <button type="submit" className="w-100 bg-success text-white p-2 mb-3 btn">
              Sign Up
            </button>
          </div>
          <div>Already have an Account? <Link to="/signin"> Log In</Link></div>
        </form>
        
      </div>

    </div>
  );
};

export default Signup;
