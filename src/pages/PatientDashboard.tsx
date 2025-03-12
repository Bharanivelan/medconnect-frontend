// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FileText, Upload, User, Eye, Copy, CheckCircle, LogOut } from 'lucide-react';

// interface Document {
//   id: number;
//   name: string;
//   type: string;
//   date: string;
//   bodyPart?: string;
//   reason?: string;
//   url?: string;
// }

// const mockPatient = {
//   name: "John Doe",
//   age: 35,
//   bloodGroup: "O+",
//   lastVisit: "2024-03-15",
//   patientId: "MED-2024-001"
// };

// export default function PatientDashboard() {
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
//   const [copied, setCopied] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load documents from localStorage
//     const storedDocuments = JSON.parse(localStorage.getItem('documents') || '[]');
//     setDocuments([
//       ...storedDocuments,
//       // Keep some mock data for demonstration
//       { id: 1, name: "Blood Test Report", date: "2024-03-15", type: "Lab Report", bodyPart: "Blood", reason: "Annual checkup" },
//       { id: 2, name: "X-Ray Chest", date: "2024-03-10", type: "X-Ray", bodyPart: "Chest", reason: "Persistent cough" },
//       { id: 3, name: "Prescription", date: "2024-03-01", type: "Prescription", bodyPart: "Head", reason: "Migraine" },
//     ]);
//   }, []);

//   const handleViewDocument = (document: Document) => {
//     setSelectedDocument(document);
//     if (document.url) {
//       window.open(document.url, '_blank');
//     }
//   };

//   const copyPatientId = () => {
//     navigator.clipboard.writeText(mockPatient.patientId);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleLogout = () => {
//     // In a real app, you would clear authentication tokens here
//     // For now, just navigate to the landing page
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <User className="h-6 w-6 text-gray-600" />
//                 <span className="ml-2 text-gray-800">{mockPatient.name}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <div className="flex justify-between items-start mb-4">
//             <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
//             <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
//               <span className="text-sm text-gray-500">Patient ID:</span>
//               <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
//                 {mockPatient.patientId}
//               </code>
//               <button
//                 onClick={copyPatientId}
//                 className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
//                 title="Copy Patient ID"
//               >
//                 {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Name</p>
//               <p className="font-medium">{mockPatient.name}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Age</p>
//               <p className="font-medium">{mockPatient.age} years</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Blood Group</p>
//               <p className="font-medium">{mockPatient.bloodGroup}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Last Visit</p>
//               <p className="font-medium">{mockPatient.lastVisit}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>
//             <Link
//               to="/patient/upload"
//               className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               <Upload className="h-5 w-5 mr-2" />
//               Upload New Document
//             </Link>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Document Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Body Part
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Reason for Visit
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.map((doc) => (
//                   <tr key={doc.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{doc.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                         {doc.type}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">{doc.bodyPart || "N/A"}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">{doc.reason || "N/A"}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">{doc.date}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button
//                         onClick={() => handleViewDocument(doc)}
//                         className="text-blue-600 hover:text-blue-900 flex items-center"
//                       >
//                         <Eye className="h-4 w-4 mr-1" />
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

//-----------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api/api';

// export default function PatientDashboard() {
//   const [user, setUser] = useState<any>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await API.get('/profile');
//         setUser(response.data);
//       } catch (error) {
//         localStorage.removeItem('token');
//         navigate('/patient/login');
//       }
//     };
//     fetchUser();
//   }, [navigate]);

//   return (
//     <div>
//       <h2>Patient Dashboard</h2>
//       {user ? (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }


//------------------------------------


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FileText, Upload, User, Eye, Copy, CheckCircle, LogOut } from 'lucide-react';
// import API from '../api/api';

// interface Document {
//   id: number;
//   name: string;
//   type: string;
//   date: string;
//   bodyPart?: string;
//   reason?: string;
//   url?: string;
// }

// export default function PatientDashboard() {
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
//   const [copied, setCopied] = useState(false);
//   const [patient, setPatient] = useState<any>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await API.get('/profile');
//         setPatient(response.data);
//       } catch (error) {
//         localStorage.removeItem('token');
//         navigate('/patient/login');
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         const response = await API.get('/documents');
//         setDocuments(response.data);
//       } catch (error) {
//         console.error("Error fetching documents", error);
//       }
//     };

//     fetchUser();
//     fetchDocuments();
//   }, [navigate]);

//   const handleViewDocument = (document: Document) => {
//     setSelectedDocument(document);
//     if (document.url) {
//       window.open(document.url, '_blank');
//     }
//   };

//   const copyPatientId = () => {
//     if (patient) {
//       navigator.clipboard.writeText(patient.patientId);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <User className="h-6 w-6 text-gray-600" />
//                 <span className="ml-2 text-gray-800">{patient?.name || 'Loading...'}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <div className="flex justify-between items-start mb-4">
//             <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
//             <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
//               <span className="text-sm text-gray-500">Patient ID:</span>
//               <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
//                 {patient?.patientId || 'Loading...'}
//               </code>
//               <button
//                 onClick={copyPatientId}
//                 className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
//                 title="Copy Patient ID"
//               >
//                 {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Name</p>
//               <p className="font-medium">{patient?.name || 'Loading...'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Age</p>
//               <p className="font-medium">{patient?.age || 'Loading...'} years</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Blood Group</p>
//               <p className="font-medium">{patient?.bloodGroup || 'Loading...'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Last Visit</p>
//               <p className="font-medium">{patient?.lastVisit || 'Loading...'}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>
//             <Link
//               to="/patient/upload"
//               className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               <Upload className="h-5 w-5 mr-2" />
//               Upload New Document
//             </Link>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Part</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason for Visit</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.map((doc) => (
//                   <tr key={doc.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.bodyPart || 'N/A'}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.reason || 'N/A'}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


//-------------------------------------------


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UploadDocument from "./UploadDocument";

// interface Document {
//     _id: string;
//     fileUrl: string;
//     uploadedBy: "Patient" | "Doctor";
//     documentType: string;
//     uploadedAt: string;
// }

// export default function PatientDashboard({ patientId }: { patientId: string }) {
//     const [documents, setDocuments] = useState<Document[]>([]);

//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/documents/${patientId}`)
//             .then((response) => setDocuments(response.data))
//             .catch((error) => console.error("Fetch Error:", error));
//     }, [patientId]);

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold">Patient Dashboard</h1>
//             <UploadDocument patientId={patientId} />
            
//             <h2 className="mt-4 text-xl font-semibold">Uploaded Documents</h2>
//             {documents.length === 0 ? (
//                 <p>No documents uploaded yet.</p>
//             ) : (
//                 <ul className="mt-2">
//                     {documents.map((doc) => (
//                         <li key={doc._id} className="border p-2 mt-2 flex justify-between">
//                             <span>{doc.documentType} - {new Date(doc.uploadedAt).toLocaleDateString()} ({doc.uploadedBy})</span>
//                             <a href={`http://localhost:5000${doc.fileUrl}`} target="_blank" className="text-blue-600 hover:underline">
//                                 View
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }


//--------------------------------------------correct UI

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FileText, Upload, User, Eye, Copy, CheckCircle, LogOut } from 'lucide-react';
// import axios from 'axios';
// import API from '../api/api';

// interface Document {
//   _id: string;
//   fileUrl: string;
//   documentType: string;
//   uploadedBy: "Patient" | "Doctor";
//   uploadedAt: string;
// }

// export default function PatientDashboard() {
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [copied, setCopied] = useState(false);
//   const [patient, setPatient] = useState<any>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await API.get('/profile');
//         setPatient(response.data);
//       } catch (error) {
//         localStorage.removeItem('token');
//         navigate('/patient/login');
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         if (!patient?.aadharNumber) return;
//         const response = await axios.get(`http://localhost:5000/api/documents/${patient.aadharNumber}`);
//         setDocuments(response.data);
//       } catch (error) {
//         console.error("Error fetching documents", error);
//       }
//     };

//     fetchUser();
//   }, [navigate, patient?.aadharNumber]);

//   const copyPatientId = () => {
//     if (patient) {
//       navigator.clipboard.writeText(patient.aadharNumber);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <User className="h-6 w-6 text-gray-600" />
//                 <span className="ml-2 text-gray-800">{patient?.name || 'Loading...'}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <div className="flex justify-between items-start mb-4">
//             <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
//             <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
//               <span className="text-sm text-gray-500">Patient ID:</span>
//               <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
//                 {patient?.aadharNumber || 'Loading...'}
//               </code>
//               <button
//                 onClick={copyPatientId}
//                 className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
//                 title="Copy Patient ID"
//               >
//                 {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Name</p>
//               <p className="font-medium">{patient?.name || 'Loading...'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Age</p>
//               <p className="font-medium">{patient?.age || 'Loading...'} years</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Blood Group</p>
//               <p className="font-medium">{patient?.bloodGroup || 'Loading...'}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Last Visit</p>
//               <p className="font-medium">{patient?.lastVisit || 'Loading...'}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>
//             <Link
//               to="/patient/upload"
//               className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               <Upload className="h-5 w-5 mr-2" />
//               Upload New Document
//             </Link>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.length === 0 ? (
//                   <tr>
//                     <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No documents uploaded yet.</td>
//                   </tr>
//                 ) : (
//                   documents.map((doc) => (
//                     <tr key={doc._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.documentType}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadedBy}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer"
//                           onClick={() => window.open(`http://localhost:5000${doc.fileUrl}`, '_blank')}>
//                         View
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

//-----------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// interface Document {
//   _id: string;
//   documentType: string;
//   uploadedBy: string;
//   fileUrl: string;
//   uploadedAt: string;
// }

// export default function PatientDashboard() {
//   const [patientId, setPatientId] = useState<string | null>(null);
//   const [documents, setDocuments] = useState<Document[]>([]);

//   // ✅ Fetch patient ID
//   useEffect(() => {
//     const fetchPatientDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         if (response.data.aadharNumber) {
//           setPatientId(response.data.aadharNumber);
//           console.log("✅ Patient ID Fetched:", response.data.aadharNumber);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching patient details", error);
//       }
//     };

//     fetchPatientDetails();
//   }, []);

//   // ✅ Fetch documents
//   useEffect(() => {
//     if (patientId) {
//       axios.get(`http://localhost:5000/api/documents/${patientId}`).then((response) => {
//         setDocuments(response.data);
//       });
//     }
//   }, [patientId]);

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold">Patient Dashboard</h2>
//       <Link to="/patient/upload" className="text-blue-600">Upload New Document</Link>

//       <h3 className="mt-6 text-lg font-semibold">Uploaded Documents</h3>
//       {documents.map((doc) => (
//         <div key={doc._id} className="border p-3 mt-2 rounded">
//           <p>Type: {doc.documentType} - Uploaded By: {doc.uploadedBy}</p>
//           <a href={`http://localhost:5000${doc.fileUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">View File</a>
//         </div>
//       ))}
//     </div>
//   );
// }

//---------------------------------------------------------------------------correct code is below---------------------------------

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileText, Upload, User, Eye, Copy, CheckCircle, LogOut } from "lucide-react";
import axios from "axios";
import API from "../api/api";

interface Document {
  _id: string;
  fileUrl: string;
  documentType: string;
  uploadedBy: "Patient" | "Doctor";
  uploadedAt: string;
}

export default function PatientDashboard() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [copied, setCopied] = useState(false);
  const [patient, setPatient] = useState<any>(null);
  const navigate = useNavigate();

  // ✅ Fetch Patient Data & Documents
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get("/profile");
        setPatient(response.data);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/patient/login");
      }
    };

    const fetchDocuments = async () => {
      try {
        if (!patient?.aadharNumber) return;
        const response = await axios.get(`http://localhost:5001/api/documents/${patient.aadharNumber}`);
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching documents", error);
      }
    };

    fetchUser();
    fetchDocuments();
  }, [navigate, patient?.aadharNumber]);

  // ✅ Copy Patient ID to Clipboard
  const copyPatientId = () => {
    if (patient) {
      navigator.clipboard.writeText(patient.aadharNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-6 w-6 text-gray-600" />
                <span className="ml-2 text-gray-800">{patient?.name || "Loading..."}</span>
              </div>
              <button onClick={handleLogout} className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                <LogOut className="h-5 w-5 mr-1" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ✅ Patient Information */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
            <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
              <span className="text-sm text-gray-500">Patient ID:</span>
              <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                {patient?.aadharNumber || "Loading..."}
              </code>
              <button
                onClick={copyPatientId}
                className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
                title="Copy Patient ID"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{patient?.name || "Loading..."}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{patient?.age || "Loading..."} years</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Blood Group</p>
              <p className="font-medium">{patient?.bloodGroup || "Loading..."}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Visit</p>
              <p className="font-medium">{patient?.lastVisit}</p>
            </div>
          </div>
        </div>

        {/* ✅ Medical Documents Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>
            <Link to="/patient/upload" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <Upload className="h-5 w-5 mr-2" />
              Upload New Document
            </Link>
          </div>

          {/* ✅ Documents Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No documents uploaded yet.</td>
                  </tr>
                ) : (
                  documents.map((doc) => (
                    <tr key={doc._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.documentType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadedBy}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer"
                          onClick={() => window.open(`${doc.fileUrl}`, "_blank")}>
                        View
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


//-------------------------------------------Above is the best perfect code


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FileText, Upload, User, Eye, Copy, CheckCircle, LogOut } from "lucide-react";
// import axios from "axios";
// import API from "../api/api";

// interface Document {
//   _id: string;
//   fileUrl: string;
//   documentType: string;
//   uploadedBy: "Patient" | "Doctor";
//   uploadedAt: string;
//   bodyPart?: string;  // ✅ Added bodyPart field
//   visitReason?: string;  // ✅ Added visitReason field
// }

// export default function PatientDashboard() {
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [copied, setCopied] = useState(false);
//   const [patient, setPatient] = useState<any>(null);
//   const navigate = useNavigate();

//   // ✅ Fetch Patient Data & Documents
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await API.get("/profile");
//         setPatient(response.data);
//       } catch (error) {
//         localStorage.removeItem("token");
//         navigate("/patient/login");
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         if (!patient?.aadharNumber) return;
//         const response = await axios.get(`http://localhost:5000/api/documents/${patient.aadharNumber}`);
//         setDocuments(response.data);
//       } catch (error) {
//         console.error("Error fetching documents", error);
//       }
//     };

//     fetchUser();
//     fetchDocuments();
//   }, [navigate, patient?.aadharNumber]);

//   // ✅ Copy Patient ID to Clipboard
//   const copyPatientId = () => {
//     if (patient) {
//       navigator.clipboard.writeText(patient.aadharNumber);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* ✅ Navigation Bar */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <User className="h-6 w-6 text-gray-600" />
//                 <span className="ml-2 text-gray-800">{patient?.name || "Loading..."}</span>
//               </div>
//               <button onClick={() => navigate("/")} className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* ✅ Patient Information */}
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <div className="flex justify-between items-start mb-4">
//             <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
//             <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
//               <span className="text-sm text-gray-500">Patient ID:</span>
//               <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
//                 {patient?.aadharNumber || "Loading..."}
//               </code>
//               <button
//                 onClick={copyPatientId}
//                 className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
//                 title="Copy Patient ID"
//               >
//                 {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Medical Documents */}
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>
//             <Link
//               to="/patient/upload"
//               className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             >
//               <Upload className="h-5 w-5 mr-2" />
//               Upload New Document
//             </Link>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Part / Medical Concern</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason for Visit</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.length === 0 ? (
//                   <tr>
//                     <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No documents uploaded yet.</td>
//                   </tr>
//                 ) : (
//                   documents.map((doc) => (
//                     <tr key={doc._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.documentType}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.bodyPart || "N/A"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.visitReason || "N/A"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadedBy}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(doc.uploadedAt).toLocaleDateString()}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer"
//                           onClick={() => window.open(`http://localhost:5000${doc.fileUrl}`, '_blank')}>
//                         View
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



//-------------------------visible layout is the above code

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FileText, Upload, User, LogOut } from "lucide-react";
// import axios from "axios";

// interface Document {
//   _id: string;
//   fileUrl: string;
//   documentType: string;
//   uploadedBy: "Patient" | "Doctor";
//   uploadedAt: string;
//   bodyPart?: string;
//   visitReason?: string;
// }

// export default function PatientDashboard() {
//   const { aadharNumber } = useParams<{ aadharNumber?: string }>(); // ✅ Aadhar Number for doctors only
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [patient, setPatient] = useState<any>(null);
//   const navigate = useNavigate();
//   const [isDoctor, setIsDoctor] = useState(false); // ✅ Track if user is a doctor

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/patient/login");
//           return;
//         }

//         const response = await axios.get("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.data.role === "doctor") {
//           setIsDoctor(true); // ✅ Mark user as doctor
//           if (!aadharNumber) {
//             navigate("/doctor/login"); // Redirect if doctor didn't enter aadhar number
//           }
//         } else {
//           setPatient(response.data); // ✅ Patient data for normal login
//         }
//       } catch (error) {
//         localStorage.removeItem("token");
//         navigate("/patient/login");
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         const idToFetch = aadharNumber || patient?.aadharNumber; // ✅ Doctor fetches by Aadhar, Patient fetches own
//         if (!idToFetch) return;
//         const response = await axios.get(`http://localhost:5000/api/documents/${idToFetch}`);
//         setDocuments(response.data);
//       } catch (error) {
//         console.error("Error fetching documents", error);
//       }
//     };

//     fetchUser();
//     fetchDocuments();
//   }, [aadharNumber, navigate, patient?.aadharNumber]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FileText className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => {
//                   localStorage.removeItem("token");
//                   navigate(isDoctor ? "/doctor/login" : "/patient/login");
//                 }}
//                 className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
//           <p className="text-sm text-gray-500">Aadhar Number: {patient?.aadharNumber || "Loading..."}</p>
//           <p className="text-sm text-gray-500">Name: {patient?.name || "Loading..."}</p>
//           <p className="text-sm text-gray-500">Age: {patient?.age || "Loading..."} years</p>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-900">Medical Documents</h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Part</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {documents.map((doc) => (
//                   <tr key={doc._id}>
//                     <td>{doc.documentType}</td>
//                     <td>{doc.bodyPart || "N/A"}</td>
//                     <td>{doc.visitReason || "N/A"}</td>
//                     <td>{new Date(doc.uploadedAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
