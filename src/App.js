import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trainer from "./Components/Trainer";
import Trainee from "./Components/Trainee";
import AddTrainer from "./Components/AddTrainer";
import EditTrainee from "./Components/EditTrainee";
import EditTrainer from "./Components/EditTrainer";
import DeleteTrainer from "./Components/DeleteTrainer";
import {DeleteTrainee} from "./Components/DeleteTrainee";
import Admin from "./Components/Admin";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";

import TraineeRequestForm from "./Components/TraineeRequestForm";
import TrainerDashboard from "./Components/TrainerDashboard";
import Attendance from "./Components/Attendance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Admin />} />
          <Route path="/Trainer" element={<Trainer />} />
          <Route path="/Trainee" element={<Trainee />} />
          <Route path="/EditTrainee/:id" element={<EditTrainee />} />
          <Route path="/EditTrainer/:id" element={<EditTrainer />} />
          <Route path="/DeleteTrainer/:id" element={<DeleteTrainer />} />
          <Route path="/DeleteTrainee/:id" element={<DeleteTrainee />} />
          <Route path="/AddTrainer" element={<AddTrainer />} />
         
          <Route path="/TrainerDashboard" element={<TrainerDashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
        </Route>

        {/* Public Routes */}
        <Route path="/TraineeRequest" element={<TraineeRequestForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
