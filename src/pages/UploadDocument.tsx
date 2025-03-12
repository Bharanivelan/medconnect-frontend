// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, ArrowLeft, LogOut, Eye, Brain, Heart, Settings as Lungs, Bone, Ear, Thermometer, Pill, Stethoscope } from 'lucide-react';

// // Body part icons mapping
// const bodyPartIcons = {
//   head: <Brain className="h-8 w-8" />,
//   eye: <Eye className="h-8 w-8" />,
//   ear: <Ear className="h-8 w-8" />,
//   heart: <Heart className="h-8 w-8" />,
//   lungs: <Lungs className="h-8 w-8" />,
//   bone: <Bone className="h-8 w-8" />,
//   general: <Stethoscope className="h-8 w-8" />,
//   fever: <Thermometer className="h-8 w-8" />,
//   medication: <Pill className="h-8 w-8" />
// };

// type BodyPartKey = keyof typeof bodyPartIcons;

// export default function UploadDocument() {
//   const [file, setFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState('');
//   const [bodyPart, setBodyPart] = useState('');
//   const [visitReason, setVisitReason] = useState('');
//   const [isUploading, setIsUploading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file || !documentType || !bodyPart || !visitReason) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setIsUploading(true);
//     try {
//       // In a real app, you would upload the file to a server here
//       // For now, we'll simulate an upload with a timeout
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Add the document to localStorage for demo purposes
//       const documents = JSON.parse(localStorage.getItem('documents') || '[]');
//       documents.push({
//         id: Date.now(),
//         name: file.name,
//         type: documentType,
//         bodyPart: bodyPart,
//         reason: visitReason,
//         date: new Date().toISOString().split('T')[0],
//         url: URL.createObjectURL(file) // This is temporary and will only work for the current session
//       });
//       localStorage.setItem('documents', JSON.stringify(documents));
      
//       navigate('/patient/dashboard');
//     } catch (error) {
//       alert('Error uploading document. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       // Validate file type and size
//       const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
//       const maxSize = 10 * 1024 * 1024; // 10MB

//       if (!allowedTypes.includes(selectedFile.type)) {
//         alert('Please upload a PDF, JPG, or PNG file');
//         return;
//       }

//       if (selectedFile.size > maxSize) {
//         alert('File size must be less than 10MB');
//         return;
//       }

//       setFile(selectedFile);
//     }
//   };

//   const handleLogout = () => {
//     // In a real app, you would clear authentication tokens here
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Upload className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center">
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

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <button
//           onClick={() => navigate('/patient/dashboard')}
//           className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
//         >
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to Dashboard
//         </button>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Medical Document</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Body Part / Medical Concern
//               </label>
//               <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
//                 {Object.entries(bodyPartIcons).map(([key, icon]) => (
//                   <div 
//                     key={key}
//                     onClick={() => setBodyPart(key)}
//                     className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${
//                       bodyPart === key 
//                         ? 'bg-blue-100 border-blue-500 text-blue-700' 
//                         : 'border-gray-200 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className={`${bodyPart === key ? 'text-blue-600' : 'text-gray-500'}`}>
//                       {icon}
//                     </div>
//                     <span className="mt-2 text-sm font-medium capitalize">{key}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="visitReason" className="block text-sm font-medium text-gray-700">
//                 Reason for Hospital Visit
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="visitReason"
//                   name="visitReason"
//                   value={visitReason}
//                   onChange={(e) => setVisitReason(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="E.g., Eye checkup, Headache, Annual physical, etc."
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Document Type
//               </label>
//               <select
//                 value={documentType}
//                 onChange={(e) => setDocumentType(e.target.value)}
//                 className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
//                 required
//               >
//                 <option value="">Select type</option>
//                 <option value="Prescription">Prescription</option>
//                 <option value="Lab Report">Lab Report</option>
//                 <option value="X-Ray">X-Ray</option>
//                 <option value="MRI Scan">MRI Scan</option>
//                 <option value="CT Scan">CT Scan</option>
//                 <option value="Ultrasound">Ultrasound</option>
//                 <option value="Vaccination Record">Vaccination Record</option>
//                 <option value="Doctor's Note">Doctor's Note</option>
//                 <option value="Discharge Summary">Discharge Summary</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload File
//               </label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                   <div className="flex text-sm text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//                     >
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                         onChange={handleFileChange}
//                         accept=".pdf,.jpg,.jpeg,.png"
//                         required
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     PDF, JPG, PNG up to 10MB
//                   </p>
//                   {file && (
//                     <p className="text-sm text-green-600">
//                       Selected file: {file.name}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isUploading}
//                 className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//                   isUploading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {isUploading ? 'Uploading...' : 'Upload Document'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


//---------------------------------------

// import React, { useState } from "react";
// import axios from "axios";

// export default function UploadDocument({ patientId }: { patientId: string }) {
//     const [file, setFile] = useState<File | null>(null);
//     const [documentType, setDocumentType] = useState("");
//     const [uploadedBy, setUploadedBy] = useState<"Patient" | "Doctor">("Patient");

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setFile(e.target.files[0]);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file || !documentType) {
//             alert("Please select a file and document type");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("patientId", patientId);
//         formData.append("uploadedBy", uploadedBy);
//         formData.append("documentType", documentType);

//         try {
//             const response = await axios.post("http://localhost:5000/api/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("File uploaded successfully!");
//             window.location.reload(); // Refresh dashboard
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Upload failed");
//         }
//     };

//     return (
//         <div className="p-4 border rounded shadow">
//             <h2 className="text-lg font-bold">Upload New Document</h2>
//             <input type="file" onChange={handleFileChange} className="mt-2" />
//             <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="mt-2">
//                 <option value="">Select Document Type</option>
//                 <option value="Prescription">Prescription</option>
//                 <option value="Lab Report">Lab Report</option>
//                 <option value="X-Ray">X-Ray</option>
//             </select>
//             <select value={uploadedBy} onChange={(e) => setUploadedBy(e.target.value as "Patient" | "Doctor")} className="mt-2">
//                 <option value="Patient">Uploaded by Patient</option>
//                 <option value="Doctor">Uploaded by Doctor</option>
//             </select>
//             <button onClick={handleUpload} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
//                 Upload
//             </button>
//         </div>
//     );
// }


// import React, { useState } from "react";
// import axios from "axios";

// export default function UploadDocument({ patientId }: { patientId: string }) {
//     const [file, setFile] = useState<File | null>(null);
//     const [documentType, setDocumentType] = useState("");
//     const [uploadedBy, setUploadedBy] = useState<"Patient" | "Doctor">("Patient");
//     const [uploading, setUploading] = useState(false);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setFile(e.target.files[0]);
//         }
//     };

//     const handleUpload = async () => {
//         if (!file || !documentType) {
//             alert("Please select a file and document type");
//             return;
//         }

//         setUploading(true);

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("patientId", patientId);
//         formData.append("uploadedBy", uploadedBy);
//         formData.append("documentType", documentType);

//         try {
//             const response = await axios.post("http://localhost:5000/api/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("File uploaded successfully!");
//             window.location.reload();
//         } catch (error) {
//             console.error("Upload Error:", error);
//             alert("Upload failed");
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Upload New Document</h2>
            
//             <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">Select File</label>
//                 <input type="file" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded-lg" />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">Document Type</label>
//                 <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-lg">
//                     <option value="">Select Document Type</option>
//                     <option value="Prescription">Prescription</option>
//                     <option value="Lab Report">Lab Report</option>
//                     <option value="X-Ray">X-Ray</option>
//                 </select>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">Uploaded By</label>
//                 <select value={uploadedBy} onChange={(e) => setUploadedBy(e.target.value as "Patient" | "Doctor")}
//                         className="w-full p-2 border border-gray-300 rounded-lg">
//                     <option value="Patient">Patient</option>
//                     <option value="Doctor">Doctor</option>
//                 </select>
//             </div>

//             <button onClick={handleUpload} 
//                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                     disabled={uploading}>
//                 {uploading ? "Uploading..." : "Upload"}
//             </button>
//         </div>
//     );
// }


//----------correct UI


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Upload, ArrowLeft, LogOut, Eye, Brain, Heart, Settings as Lungs, Bone, Ear, Thermometer, Pill, Stethoscope } from 'lucide-react';
// import axios from 'axios';

// // Body part icons mapping
// const bodyPartIcons = {
//   head: <Brain className="h-8 w-8" />,
//   eye: <Eye className="h-8 w-8" />,
//   ear: <Ear className="h-8 w-8" />,
//   heart: <Heart className="h-8 w-8" />,
//   lungs: <Lungs className="h-8 w-8" />,
//   bone: <Bone className="h-8 w-8" />,
//   general: <Stethoscope className="h-8 w-8" />,
//   fever: <Thermometer className="h-8 w-8" />,
//   medication: <Pill className="h-8 w-8" />
// };

// export default function UploadDocument({ patientId }: { patientId: string }) {
//   const [file, setFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState('');
//   const [bodyPart, setBodyPart] = useState('');
//   const [visitReason, setVisitReason] = useState('');
//   const [isUploading, setIsUploading] = useState(false);
//   const navigate = useNavigate();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
//       const maxSize = 10 * 1024 * 1024; // 10MB

//       if (!allowedTypes.includes(selectedFile.type)) {
//         alert('Please upload a PDF, JPG, or PNG file');
//         return;
//       }

//       if (selectedFile.size > maxSize) {
//         alert('File size must be less than 10MB');
//         return;
//       }

//       setFile(selectedFile);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file || !documentType || !bodyPart || !visitReason) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("patientId", patientId);
//     formData.append("documentType", documentType);
//     formData.append("bodyPart", bodyPart);
//     formData.append("visitReason", visitReason);
//     formData.append("uploadedBy", "Patient");

//     try {
//       await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("File uploaded successfully!");

//       // 🚀 Redirect to dashboard after upload
//       navigate("/patient/dashboard");
//     } catch (error) {
//       console.error("Upload Error:", error);
//       alert("Upload failed. Please try again.");
//     } finally {
//       setIsUploading(false);
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
//               <Upload className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center">
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

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <button
//           onClick={() => navigate('/patient/dashboard')}
//           className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
//         >
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to Dashboard
//         </button>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Medical Document</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Body Part / Medical Concern
//               </label>
//               <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
//                 {Object.entries(bodyPartIcons).map(([key, icon]) => (
//                   <div 
//                     key={key}
//                     onClick={() => setBodyPart(key)}
//                     className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${
//                       bodyPart === key 
//                         ? 'bg-blue-100 border-blue-500 text-blue-700' 
//                         : 'border-gray-200 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className={`${bodyPart === key ? 'text-blue-600' : 'text-gray-500'}`}>
//                       {icon}
//                     </div>
//                     <span className="mt-2 text-sm font-medium capitalize">{key}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Reason for Hospital Visit
//               </label>
//               <input
//                 type="text"
//                 value={visitReason}
//                 onChange={(e) => setVisitReason(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="E.g., Eye checkup, Headache, Annual physical, etc."
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Document Type
//               </label>
//               <select
//                 value={documentType}
//                 onChange={(e) => setDocumentType(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select type</option>
//                 <option value="Prescription">Prescription</option>
//                 <option value="Lab Report">Lab Report</option>
//                 <option value="X-Ray">X-Ray</option>
//                 <option value="MRI Scan">MRI Scan</option>
//                 <option value="CT Scan">CT Scan</option>
//                 <option value="Ultrasound">Ultrasound</option>
//                 <option value="Vaccination Record">Vaccination Record</option>
//                 <option value="Doctor's Note">Doctor's Note</option>
//                 <option value="Discharge Summary">Discharge Summary</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload File
//               </label>
//               <input type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" required className="w-full mt-2" />
//             </div>

//             <button type="submit" disabled={isUploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               {isUploading ? "Uploading..." : "Upload Document"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Upload, ArrowLeft, LogOut, Eye, Brain, Heart, Settings as Lungs, Bone, Ear, Thermometer, Pill, Stethoscope } from "lucide-react";
// import axios from "axios";

// // Body part icons mapping
// const bodyPartIcons = {
//   head: <Brain className="h-8 w-8" />,
//   eye: <Eye className="h-8 w-8" />,
//   ear: <Ear className="h-8 w-8" />,
//   heart: <Heart className="h-8 w-8" />,
//   lungs: <Lungs className="h-8 w-8" />,
//   bone: <Bone className="h-8 w-8" />,
//   general: <Stethoscope className="h-8 w-8" />,
//   fever: <Thermometer className="h-8 w-8" />,
//   medication: <Pill className="h-8 w-8" />,
// };

// export default function UploadDocument() {
//   const [file, setFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState("");
//   const [bodyPart, setBodyPart] = useState("");
//   const [visitReason, setVisitReason] = useState("");
//   const [patientId, setPatientId] = useState<string | null>(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Fetch patient ID from backend
//   useEffect(() => {
//     const fetchPatientDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         if (response.data.aadharNumber) {
//           setPatientId(response.data.aadharNumber);
//           console.log("✅ Patient ID Fetched:", response.data.aadharNumber);
//         } else {
//           console.error("❌ No Patient ID found!");
//         }
//       } catch (error) {
//         console.error("❌ Error fetching patient details", error);
//         navigate("/patient/login");
//       }
//     };

//     fetchPatientDetails();
//   }, [navigate]);

//   // ✅ Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
//       const maxSize = 10 * 1024 * 1024; // 10MB

//       if (!allowedTypes.includes(selectedFile.type)) {
//         alert("Please upload a PDF, JPG, or PNG file");
//         return;
//       }

//       if (selectedFile.size > maxSize) {
//         alert("File size must be less than 10MB");
//         return;
//       }

//       setFile(selectedFile);
//     }
//   };

//   // ✅ Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!file || !documentType || !bodyPart || !visitReason || !patientId) {
//       alert("❌ Error: Missing Required Fields!");
//       return;
//     }

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("patientId", patientId);
//     formData.append("documentType", documentType);
//     formData.append("bodyPart", bodyPart);
//     formData.append("visitReason", visitReason);
//     formData.append("uploadedBy", "Patient");

//     try {
//       await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("File uploaded successfully!");
//       navigate("/patient/dashboard");
//     } catch (error) {
//       console.error("❌ Upload Error:", error);
//       alert("Upload failed. Please try again.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Upload className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
//                 onClick={() => navigate("/")}
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <button onClick={() => navigate("/patient/dashboard")} className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to Dashboard
//         </button>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Medical Document</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Body Part / Medical Concern</label>
//               <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
//                 {Object.entries(bodyPartIcons).map(([key, icon]) => (
//                   <div
//                     key={key}
//                     onClick={() => setBodyPart(key)}
//                     className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${
//                       bodyPart === key ? "bg-blue-100 border-blue-500 text-blue-700" : "border-gray-200 hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className={`${bodyPart === key ? "text-blue-600" : "text-gray-500"}`}>{icon}</div>
//                     <span className="mt-2 text-sm font-medium capitalize">{key}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Reason for Hospital Visit</label>
//               <input
//                 type="text"
//                 value={visitReason}
//                 onChange={(e) => setVisitReason(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 placeholder="E.g., Eye checkup, Headache, Annual physical, etc."
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Document Type</label>
//               <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
//                 <option value="">Select type</option>
//                 <option value="Prescription">Prescription</option>
//                 <option value="Lab Report">Lab Report</option>
//                 <option value="X-Ray">X-Ray</option>
//                 <option value="MRI Scan">MRI Scan</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Upload File</label>
//               <input type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" required className="w-full mt-2" />
//             </div>

//             <button type="submit" disabled={isUploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               {isUploading ? "Uploading..." : "Upload Document"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


//---------------------------------------------------


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Upload, ArrowLeft } from "lucide-react";
// import axios from "axios";

// export default function UploadDocument() {
//   const [file, setFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState("");
//   const [patientId, setPatientId] = useState<string | null>(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Fetch patient ID from backend
//   useEffect(() => {
//     const fetchPatientDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         if (response.data.aadharNumber) {
//           setPatientId(response.data.aadharNumber);
//           console.log("✅ Patient ID Fetched:", response.data.aadharNumber);
//         } else {
//           console.error("❌ No Patient ID found!");
//         }
//       } catch (error) {
//         console.error("❌ Error fetching patient details", error);
//         navigate("/patient/login");
//       }
//     };

//     fetchPatientDetails();
//   }, [navigate]);

//   // ✅ Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   // ✅ Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!file || !documentType || !patientId) {
//       alert("❌ Error: Missing Required Fields!");
//       return;
//     }

//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("patientId", patientId);
//     formData.append("documentType", documentType);
//     formData.append("uploadedBy", "Patient");

//     try {
//       await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("File uploaded successfully!");
//       navigate("/patient/dashboard");
//     } catch (error) {
//       console.error("❌ Upload Error:", error);
//       alert("Upload failed. Please try again.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <button onClick={() => navigate("/patient/dashboard")} className="text-blue-600">
//         <ArrowLeft className="inline-block w-5 h-5" /> Back to Dashboard
//       </button>

//       <h2 className="text-2xl font-bold mt-4">Upload Medical Document</h2>
//       <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//         <input type="file" onChange={handleFileChange} required className="border p-2 rounded w-full" />
//         <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} required className="border p-2 rounded w-full">
//           <option value="">Select Document Type</option>
//           <option value="Prescription">Prescription</option>
//           <option value="Lab Report">Lab Report</option>
//           <option value="X-Ray">X-Ray</option>
//           <option value="MRI Scan">MRI Scan</option>
//         </select>
//         <button type="submit" disabled={isUploading} className="bg-blue-600 text-white px-4 py-2 rounded">
//           {isUploading ? "Uploading..." : "Upload Document"}
//         </button>
//       </form>
//     </div>
//   );
// }

//----------------------------Below is the best code for uploading

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowLeft, LogOut, Eye, Brain, Heart, Settings as Lungs, Bone, Ear, Thermometer, Pill, Stethoscope } from "lucide-react";
import axios from "axios";

// ✅ Body part icons mapping
const bodyPartIcons = {
  head: <Brain className="h-8 w-8" />,
  eye: <Eye className="h-8 w-8" />,
  ear: <Ear className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
  lungs: <Lungs className="h-8 w-8" />,
  bone: <Bone className="h-8 w-8" />,
  general: <Stethoscope className="h-8 w-8" />,
  fever: <Thermometer className="h-8 w-8" />,
  medication: <Pill className="h-8 w-8" />,
};

// ✅ Full list of document types
const documentTypes = [
  "Prescription",
  "Lab Report",
  "X-Ray",
  "MRI Scan",
  "CT Scan",
  "Ultrasound",
  "ECG Report",
  "Blood Test Report",
  "Doctor's Note",
  "Discharge Summary",
  "Vaccination Record",
  "Insurance Document",
  "Surgical Report",
  "Medical Certificate",
  "Other",
];

export default function UploadDocument() {
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [visitReason, setVisitReason] = useState("");
  const [patientId, setPatientId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch patient ID from backend
  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (response.data.aadharNumber) {
          setPatientId(response.data.aadharNumber);
          console.log("✅ Patient ID Fetched:", response.data.aadharNumber);
        } else {
          console.error("❌ No Patient ID found!");
        }
      } catch (error) {
        console.error("❌ Error fetching patient details", error);
        navigate("/patient/login");
      }
    };

    fetchPatientDetails();
  }, [navigate]);

  // ✅ Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(selectedFile.type)) {
        alert("❌ Only PDF, JPG, or PNG files are allowed.");
        return;
      }

      if (selectedFile.size > maxSize) {
        alert("❌ File size must be less than 10MB.");
        return;
      }

      setFile(selectedFile);
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !documentType || !bodyPart || !visitReason || !patientId) {
      alert("❌ Error: All fields are required.");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("patientId", patientId);
    formData.append("documentType", documentType);
    formData.append("bodyPart", bodyPart);
    formData.append("visitReason", visitReason);
    formData.append("uploadedBy", "Patient");

    try {
      await axios.post("http://localhost:5001/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // alert("✅ File uploaded successfully!");
      navigate("/patient/dashboard");
    } catch (error) {
      console.error("❌ Upload Error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Upload className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-gray-700 hover:text-red-600 transition-colors" onClick={() => navigate("/")}>
                <LogOut className="h-5 w-5 mr-1" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={() => navigate("/patient/dashboard")} className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Medical Document</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ✅ Body Part / Medical Concern */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Body Part / Medical Concern</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {Object.entries(bodyPartIcons).map(([key, icon]) => (
                  <div
                    key={key}
                    onClick={() => setBodyPart(key)}
                    className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      bodyPart === key ? "bg-blue-100 border-blue-500 text-blue-700" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`${bodyPart === key ? "text-blue-600" : "text-gray-500"}`}>{icon}</div>
                    <span className="mt-2 text-sm font-medium capitalize">{key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Reason for Hospital Visit */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Reason for Hospital Visit</label>
              <input type="text" value={visitReason} onChange={(e) => setVisitReason(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>

            {/* ✅ Document Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Document Type</label>
              <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                <option value="">Select type</option>
                {documentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* ✅ File Upload Section (Updated) */}
            <div className="border p-4 rounded-md text-red-600">
              <label className="block text-sm font-medium">Upload File (Max: 10MB | Allowed: PDF, JPG, PNG)</label>
              <input type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" required className="w-full mt-2" />
            </div>

            <button type="submit" disabled={isUploading} className="w-full bg-blue-600 text-white py-2 rounded-lg">{isUploading ? "Uploading..." : "Upload Document"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

