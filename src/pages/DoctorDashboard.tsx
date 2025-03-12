// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { FileText, LogOut, Upload } from "lucide-react";
// import axios from "axios";
// import UploadDocument from "./UploadDocument"; // ✅ Import Upload Component

// interface Document {
//   _id: string;
//   fileUrl: string;
//   documentType: string;
//   uploadedBy: "Patient" | "Doctor";
//   uploadedAt: string;
//   bodyPart?: string;
//   visitReason?: string;
// }

// export default function DoctorDashboard() {
//   const { aadharNumber } = useParams<{ aadharNumber: string }>(); // ✅ Fetch Aadhar Number from URL
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [patient, setPatient] = useState<any>(null);
//   const [showUpload, setShowUpload] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!aadharNumber) {
//       navigate("/doctor/login");
//       return;
//     }

//     const fetchPatientData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/patient/${aadharNumber}`);
//         setPatient(response.data);
//       } catch (error) {
//         console.error("❌ Error fetching patient details", error);
//         navigate("/doctor/login");
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/documents/${aadharNumber}`);
//         setDocuments(response.data);
//       } catch (error) {
//         console.error("❌ Error fetching documents", error);
//       }
//     };

//     fetchPatientData();
//     fetchDocuments();
//   }, [aadharNumber, navigate]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* 🔹 Navbar */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Doctor Portal</span>
//             </div>
//             <button
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 navigate("/");
//               }}
//               className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//             >
//               <LogOut className="h-5 w-5 mr-1" />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Patient Profile Section */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Profile</h2>
//           {patient ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
//                 <strong>Name:</strong> {patient.name}
//               </div>
//               <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
//                 <strong>Aadhar Number:</strong> {patient.aadharNumber}
//               </div>
//               <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
//                 <strong>Age:</strong> {patient.age} years
//               </div>
//               <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
//                 <strong>Blood Group:</strong> {patient.bloodGroup}
//               </div>
//               <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
//                 <strong>Last Visit:</strong> {patient.lastVisit || "N/A"}
//               </div>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-lg">Loading patient details...</p>
//           )}
//         </div>

//         {/* 🔹 Upload Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold text-gray-900">Upload Medical Document</h2>
//           <p className="text-gray-600">Doctors can upload documents for this patient.</p>

//           {/* Show/Hide Upload Form */}
//           {/* <button
//             onClick={() => setShowUpload(!showUpload)}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             {showUpload ? "Hide Upload Form" : "Upload New Document"}
        
//           </button> */}
//            <Link to="/doctor/upload" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                         <Upload className="h-5 w-5 mr-2" />
//                         Upload New Document
//             </Link>

//           {/* {showUpload && <UploadDocument patientId={aadharNumber!} uploadedBy="Doctor" />} */}
//         </div>

//         {/* 🔹 Medical Documents Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>

//           <div className="overflow-x-auto mt-4">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Body Part</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded By</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.length === 0 ? (
//                   <tr>
//                     <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No documents found.</td>
//                   </tr>
//                 ) : (
//                   documents.map((doc) => (
//                     <tr key={doc._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4">{doc.documentType}</td>
//                       <td className="px-6 py-4">{doc.bodyPart || "N/A"}</td>
//                       <td className="px-6 py-4">{doc.visitReason || "N/A"}</td>
//                       <td className="px-6 py-4">{doc.uploadedBy}</td>
//                       <td className="px-6 py-4">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
//                       <td className="px-6 py-4">
//                         <button
//                           onClick={() => window.open(`${doc.fileUrl}`, "_blank")}
//                           className="text-blue-600 hover:underline"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FileText, LogOut, Upload } from "lucide-react";
import axios from "axios";
import UploadDocument from "./UploadDocument"; // ✅ Import Upload Component

interface Document {
  _id: string;
  fileUrl: string;
  documentType: string;
  uploadedBy: "Patient" | "Doctor";
  uploadedAt: string;
  bodyPart?: string;
  visitReason?: string;
}

export default function DoctorDashboard() {
  const { aadharNumber } = useParams<{ aadharNumber: string }>(); // ✅ Fetch Aadhar Number from URL
  const [documents, setDocuments] = useState<Document[]>([]);
  const [patient, setPatient] = useState<any>(null);
  const [showUpload, setShowUpload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!aadharNumber) {
      navigate("/doctor/login");
      return;
    }

    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/patient/${aadharNumber}`);
        setPatient(response.data);
      } catch (error) {
        console.error("❌ Error fetching patient details", error);
        navigate("/doctor/login");
      }
    };

    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/documents/${aadharNumber}`);
        setDocuments(response.data);
      } catch (error) {
        console.error("❌ Error fetching documents", error);
      }
    };

    fetchPatientData();
    fetchDocuments();
  }, [aadharNumber, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Doctor Portal</span>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-1" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Patient Profile Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Profile</h2>
          {patient ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
                <strong>Name:</strong> {patient.name}
              </div>
              <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
                <strong>Aadhar Number:</strong> {patient.aadharNumber}
              </div>
              <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
                <strong>Age:</strong> {patient.age} years
              </div>
              <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
                <strong>Blood Group:</strong> {patient.bloodGroup}
              </div>
              <div className="p-4 border border-gray-300 rounded-lg text-lg bg-gray-100">
                <strong>Last Visit:</strong> {patient.lastVisit || "N/A"}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-lg">Loading patient details...</p>
          )}
        </div>

        {/* 🔹 Upload Section */}
        {/* <div className="bg-white shadow-lg rounded-lg p-6 mb-8"> */}
        <div>
          {/* <h2 className="text-2xl font-bold text-gray-900">Upload Medical Document</h2>
          <p className="text-gray-600">Doctors can upload documents for this patient.</p> */}

          {/* Show/Hide Upload Form */}
          {/* <button
            onClick={() => setShowUpload(!showUpload)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {showUpload ? "Hide Upload Form" : "Upload New Document"}
          </button> */}

          {/* Show Upload Form When Clicked */}
          {/* {showUpload && <UploadDocument patientId={aadharNumber!} uploadedBy="Doctor" />} */}
        </div>

        {/* 🔹 Medical Documents Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Body Part</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No documents found.</td>
                  </tr>
                ) : (
                  documents.map((doc) => (
                    <tr key={doc._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{doc.documentType}</td>
                      <td className="px-6 py-4">{doc.bodyPart || "N/A"}</td>
                      <td className="px-6 py-4">{doc.visitReason || "N/A"}</td>
                      <td className="px-6 py-4">{doc.uploadedBy}</td>
                      <td className="px-6 py-4">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => window.open(`${doc.fileUrl}`, "_blank")}
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
