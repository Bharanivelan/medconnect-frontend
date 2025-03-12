// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Stethoscope, Search, LogOut } from 'lucide-react';

// export default function DoctorLogin() {
//   const [patientId, setPatientId] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, validate the patient ID
//     // For demo purposes, we'll just check if it matches our mock patient
//     if (patientId === 'MED-2024-001') {
//       setIsLoggedIn(true);
//       navigate('/patient/dashboard');
//     } else {
//       alert('Invalid Patient ID. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setPatientId('');
//     // In a real app, you would clear authentication tokens here
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <Stethoscope className="h-12 w-12 text-blue-600" />
//         </div>
//         <div className="flex justify-between items-center">
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Doctor Access Portal
//           </h2>
//           {isLoggedIn && (
//             <button
//               onClick={handleLogout}
//               className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//             >
//               <LogOut className="h-5 w-5 mr-1" />
//               <span>Logout</span>
//             </button>
//           )}
//         </div>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Enter patient's unique ID to access their medical records
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
//                 Patient ID
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="patientId"
//                   name="patientId"
//                   type="text"
//                   required
//                   value={patientId}
//                   onChange={(e) => setPatientId(e.target.value)}
//                   className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter Patient ID (e.g., MED-2024-001)"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Access Patient Records
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Important Notice
//                 </span>
//               </div>
//             </div>
//             <p className="mt-4 text-xs text-center text-gray-500">
//               Access to patient records is monitored and logged. Only access records of patients under your care.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DoctorLogin() {
  const [aadharNumber, setAadharNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!aadharNumber.match(/^\d{12}$/)) {
      alert("❌ Enter a valid 12-digit Aadhar Number");
      return;
    }

    try {
      // ✅ Check if patient exists before navigating
      const response = await axios.get(`http://localhost:5001/api/patient/${aadharNumber}`);

      if (response.status === 200) {
        navigate(`/doctor/dashboard/${aadharNumber}`); // ✅ Redirect to patient dashboard for the doctor
      }
    } catch (error) {
      alert("❌ Patient not found! Please enter a valid Aadhar Number.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Doctor Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Patient's Aadhar Number</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Aadhar Number"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Access Patient Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
