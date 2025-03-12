// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Stethoscope, User, Phone, Mail, Droplet } from 'lucide-react';

// export default function PatientRegister() {
//   const [formData, setFormData] = useState({
//     name: '',
//     aadharNumber: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     email: '',
//     bloodGroup: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     // Name validation
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     // Aadhar validation (12 digits)
//     if (!formData.aadharNumber.trim()) {
//       newErrors.aadharNumber = 'Aadhar number is required';
//     } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
//       newErrors.aadharNumber = 'Aadhar number must be 12 digits';
//     }
    
//     // Age validation
//     if (!formData.age.trim()) {
//       newErrors.age = 'Age is required';
//     } else if (parseInt(formData.age) <= 0 || parseInt(formData.age) > 120) {
//       newErrors.age = 'Please enter a valid age';
//     }
    
//     // Gender validation
//     if (!formData.gender) {
//       newErrors.gender = 'Gender is required';
//     }
    
//     // Phone validation
//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Phone number must be 10 digits';
//     }
    
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     // Blood group validation
//     if (!formData.bloodGroup) {
//       newErrors.bloodGroup = 'Blood group is required';
//     }
    
//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     // Confirm password validation
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       // In a real app, you would send this data to your backend
//       console.log('Registration data:', formData);
      
//       // Generate a unique patient ID
//       const patientId = `MED-2024-${Math.floor(1000 + Math.random() * 9000)}`;
      
//       // For demo purposes, store in localStorage
//       localStorage.setItem('registeredPatient', JSON.stringify({
//         ...formData,
//         patientId
//       }));
      
//       // Navigate to login page
//       navigate('/patient/login', { state: { registered: true } });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <div className="flex justify-center">
//             <Stethoscope className="h-12 w-12 text-blue-600" />
//           </div>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Create Your Patient Account
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/patient/login" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
//               {/* Name */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`block w-full pl-10 pr-3 py-2 border ${
//                       errors.name ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//               </div>

//               {/* Aadhar Number */}
//               <div>
//                 <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">
//                   Aadhar Number
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="aadharNumber"
//                     id="aadharNumber"
//                     value={formData.aadharNumber}
//                     onChange={handleChange}
//                     className={`block w-full px-3 py-2 border ${
//                       errors.aadharNumber ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="123456789012"
//                     maxLength={12}
//                   />
//                 </div>
//                 {errors.aadharNumber && <p className="mt-1 text-sm text-red-600">{errors.aadharNumber}</p>}
//               </div>

//               {/* Age */}
//               <div>
//                 <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//                   Age
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="number"
//                     name="age"
//                     id="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     className={`block w-full px-3 py-2 border ${
//                       errors.age ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="35"
//                     min="1"
//                     max="120"
//                   />
//                 </div>
//                 {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
//               </div>

//               {/* Gender */}
//               <div>
//                 <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//                   Gender
//                 </label>
//                 <div className="mt-1">
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className={`block w-full px-3 py-2 border ${
//                       errors.gender ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
//               </div>

//               {/* Phone Number */}
//               <div>
//                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Phone className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     id="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className={`block w-full pl-10 pr-3 py-2 border ${
//                       errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="9876543210"
//                     maxLength={10}
//                   />
//                 </div>
//                 {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`block w-full pl-10 pr-3 py-2 border ${
//                       errors.email ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="john.doe@example.com"
//                   />
//                 </div>
//                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//               </div>

//               {/* Blood Group */}
//               <div>
//                 <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
//                   Blood Group
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Droplet className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <select
//                     id="bloodGroup"
//                     name="bloodGroup"
//                     value={formData.bloodGroup}
//                     onChange={handleChange}
//                     className={`block w-full pl-10 pr-3 py-2 border ${
//                       errors.bloodGroup ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                   >
//                     <option value="">Select Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                 </div>
//                 {errors.bloodGroup && <p className="mt-1 text-sm text-red-600">{errors.bloodGroup}</p>}
//               </div>

//               {/* Password */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={`block w-full px-3 py-2 border ${
//                       errors.password ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={`block w-full px-3 py-2 border ${
//                       errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Stethoscope, User, Phone, Mail, Droplet } from 'lucide-react';
// import API from '../api/api';

// export default function PatientRegister() {
//   const [formData, setFormData] = useState({
//     name: '',
//     aadharNumber: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     email: '',
//     bloodGroup: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await API.post('/register', { ...formData, role: 'patient' });
//       navigate('/patient/login', { state: { registered: true } });
//     } catch (error) {
//       alert('Registration failed! Try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <div className="flex justify-center">
//             <Stethoscope className="h-12 w-12 text-blue-600" />
//           </div>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create Your Patient Account</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/patient/login" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign in
//             </Link>
//           </p>
//         </div>
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="john.doe@example.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="••••••••"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   id="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api/api';
// import { Stethoscope, User, Phone, Mail, Droplet } from 'lucide-react';

// export default function PatientRegister() {
//   const [formData, setFormData] = useState({
//     name: '',
//     aadharNumber: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     email: '',
//     bloodGroup: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await API.post('/register', formData);
//       navigate('/patient/login');
//     } catch (error) {
//       alert('Registration failed! Try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <Stethoscope className="h-12 w-12 text-blue-600" />
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Your Patient Account</h2>
//       </div>
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleRegister}>
//             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
//               <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <input type="text" name="aadharNumber" placeholder="Aadhar Number" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <input type="number" name="age" placeholder="Age" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <select name="gender" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <select name="bloodGroup" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
//                 <option value="">Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//               <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//               <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
//             </div>
//             <div className="mt-6">
//               <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">Register</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// ----------------------------------------------------------------------------------------



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Stethoscope, User, Phone, Mail, Droplet } from 'lucide-react';
import API from '../api/api';

export default function PatientRegister() {
  const [formData, setFormData] = useState({
    name: '',
    aadharNumber: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    bloodGroup: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/register', formData);
      navigate('/patient/login');
    } catch (error) {
      alert('Registration failed! Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Stethoscope className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Your Patient Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/patient/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {['name', 'aadharNumber', 'age', 'phoneNumber', 'email'].map((field) => (
                <div key={field}>
                  <input
                    type={field === 'age' || field === 'phoneNumber' ? 'number' : 'text'}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              ))}

              <select name="gender" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select name="bloodGroup" onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>

              {['password', 'confirmPassword'].map((field) => (
                <div key={field}>
                  <input
                    type="password"
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Stethoscope, Lock, Mail, User, Phone, UserCheck } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import API from "../api/api";

// // ✅ Validation Schema using Yup
// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   aadharNumber: yup.string().matches(/^[0-9]{12}$/, "Aadhar must be 12 digits").required("Aadhar is required"),
//   age: yup.number().typeError("Age must be a number").min(18, "Must be 18+").required("Age is required"),
//   gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required("Gender is required"),
//   phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required("Phone is required"),
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   bloodGroup: yup.string().required("Blood group is required"),
//   password: yup
//     .string()
//     .min(8, "At least 8 characters")
//     .matches(/[A-Z]/, "1 uppercase letter")
//     .matches(/[a-z]/, "1 lowercase letter")
//     .matches(/[0-9]/, "1 number")
//     .matches(/[!@#$%^&*]/, "1 special character")
//     .required("Password is required"),
//   confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Confirm password is required"),
// });

// export default function PatientRegister() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

//   const [passwordFocused, setPasswordFocused] = useState(false);
//   const passwordValue = watch("password");

//   const onSubmit = async (data: any) => {
//     try {
//       await API.post("/register", data);
//       navigate("/patient/login");
//     } catch (error) {
//       alert("Registration failed! Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="flex items-center bg-blue-600 text-white px-6 py-4">
//           <Stethoscope className="h-10 w-10" />
//           <h2 className="ml-3 text-2xl font-semibold">Create Patient Account</h2>
//         </div>

//         <div className="p-8">
//           <p className="text-gray-600 mb-6">
//             Already have an account?{" "}
//             <Link to="/patient/login" className="text-blue-600 hover:underline">
//               Sign in
//             </Link>
//           </p>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
//             {/* Name Field */}
//             <div className="relative">
//               <User className="input-icon" />
//               <input {...register("name")} placeholder="Full Name" className="input-field" />
//               {errors.name && <p className="error-text">{errors.name.message}</p>}
//             </div>

//             {/* Aadhar Field */}
//             <div className="relative">
//               <UserCheck className="input-icon" />
//               <input {...register("aadharNumber")} placeholder="Aadhar Number" className="input-field" />
//               {errors.aadharNumber && <p className="error-text">{errors.aadharNumber.message}</p>}
//             </div>

//             {/* Age & Phone */}
//             <div className="relative">
//               <input type="number" {...register("age")} placeholder="Age" className="input-field" />
//               {errors.age && <p className="error-text">{errors.age.message}</p>}
//             </div>

//             <div className="relative">
//               <Phone className="input-icon" />
//               <input {...register("phoneNumber")} placeholder="Phone Number" className="input-field" />
//               {errors.phoneNumber && <p className="error-text">{errors.phoneNumber.message}</p>}
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <Mail className="input-icon" />
//               <input {...register("email")} placeholder="Email" className="input-field" />
//               {errors.email && <p className="error-text">{errors.email.message}</p>}
//             </div>

//             {/* Gender & Blood Group */}
//             <select {...register("gender")} className="input-field">
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.gender && <p className="error-text">{errors.gender.message}</p>}

//             <select {...register("bloodGroup")} className="input-field">
//               <option value="">Select Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>
//             {errors.bloodGroup && <p className="error-text">{errors.bloodGroup.message}</p>}

//             {/* Password */}
//             <div className="relative">
//               <Lock className="input-icon" />
//               <input type="password" {...register("password")} placeholder="Password" className="input-field"
//                 onFocus={() => setPasswordFocused(true)}
//               />
//               {errors.password && <p className="error-text">{errors.password.message}</p>}
//             </div>

//             <div className="relative">
//               <Lock className="input-icon" />
//               <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="input-field" />
//               {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
//             </div>
//           </form>

//           {passwordFocused && (
//             <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//               <h4 className="text-gray-700 font-semibold">Password Requirements:</h4>
//               <ul className="text-gray-600 text-sm list-disc list-inside mt-2">
//                 <li className={passwordValue?.length >= 8 ? "valid" : "invalid"}>At least 8 characters</li>
//                 <li className={/[A-Z]/.test(passwordValue) ? "valid" : "invalid"}>One uppercase letter</li>
//                 <li className={/[a-z]/.test(passwordValue) ? "valid" : "invalid"}>One lowercase letter</li>
//                 <li className={/[0-9]/.test(passwordValue) ? "valid" : "invalid"}>One number</li>
//                 <li className={/[!@#$%^&*]/.test(passwordValue) ? "valid" : "invalid"}>One special character</li>
//               </ul>
//             </div>
//           )}

//           <button type="submit" className="btn-submit mt-6 w-full">Register</button>
//         </div>
//       </div>
//     </div>
//   );
// }


//---------------------


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Stethoscope, Lock, Mail, User, Phone, UserCheck } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import API from "../api/api";

// // ✅ Validation Schema using Yup
// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   aadharNumber: yup.string().matches(/^[0-9]{12}$/, "Aadhar must be 12 digits").required("Aadhar is required"),
//   age: yup.number().typeError("Age must be a number").min(18, "Must be 18+").required("Age is required"),
//   gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required("Gender is required"),
//   phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required("Phone is required"),
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   bloodGroup: yup.string().required("Blood group is required"),
//   password: yup
//     .string()
//     .min(8, "At least 8 characters")
//     .matches(/[A-Z]/, "1 uppercase letter")
//     .matches(/[a-z]/, "1 lowercase letter")
//     .matches(/[0-9]/, "1 number")
//     .matches(/[!@#$%^&*]/, "1 special character")
//     .required("Password is required"),
//   confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Confirm password is required"),
// });

// export default function PatientRegister() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

//   const [passwordFocused, setPasswordFocused] = useState(false);
//   const passwordValue = watch("password");

//   // ✅ FIXED onSubmit function
//   const onSubmit = async (data: any) => {
//     console.log("🟢 Submitting Data:", data); // Debug Log

//     try {
//       const response = await API.post("/register", data);
//       console.log("✅ Registration Successful:", response.data); // Debug Log
//       alert("Registration Successful!");
//       navigate("/patient/login");
//     } catch (error) {
//       console.error("❌ Registration Failed:", error.response ? error.response.data : error.message);
//       alert("Registration failed! Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center items-center">
//       <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        
//         {/* Header Section */}
//         <div className="flex items-center bg-blue-600 text-white px-6 py-4">
//           <Stethoscope className="h-10 w-10" />
//           <h2 className="ml-3 text-2xl font-semibold">Create Patient Account</h2>
//         </div>

//         {/* Form Section */}
//         <div className="p-8">
//           <p className="text-gray-600 mb-6 text-center">
//             Already have an account?{" "}
//             <Link to="/patient/login" className="text-blue-600 hover:underline">
//               Sign in
//             </Link>
//           </p>

//           {/* ✅ FIXED FORM HANDLING (Added `onSubmit`) */}
//           <form className="grid grid-cols-12 gap-6" onSubmit={handleSubmit(onSubmit)}>
            
//             {/* Left Side Fields */}
//             <div className="col-span-5 space-y-6">
//               <div className="flex items-center space-x-3">
//                 <User className="text-gray-500" />
//                 <input {...register("name")} placeholder="Full Name" className="input-field w-full" />
//               </div>
//               {errors.name && <p className="error-text">{errors.name.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <UserCheck className="text-gray-500" />
//                 <input {...register("aadharNumber")} placeholder="Aadhar Number" className="input-field w-full" />
//               </div>
//               {errors.aadharNumber && <p className="error-text">{errors.aadharNumber.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Phone className="text-gray-500" />
//                 <input {...register("phoneNumber")} placeholder="Phone Number" className="input-field w-full" />
//               </div>
//               {errors.phoneNumber && <p className="error-text">{errors.phoneNumber.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Mail className="text-gray-500" />
//                 <input {...register("email")} placeholder="Email" className="input-field w-full" />
//               </div>
//               {errors.email && <p className="error-text">{errors.email.message}</p>}
//             </div>

//             {/* Center Divider Line */}
//             <div className="col-span-2 flex justify-center">
//               <div className="w-[1px] bg-gray-300 h-full"></div>
//             </div>

//             {/* Right Side Fields */}
//             <div className="col-span-5 space-y-6">
//               <select {...register("gender")} className="input-field w-full">
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.gender && <p className="error-text">{errors.gender.message}</p>}

//               <select {...register("bloodGroup")} className="input-field w-full">
//                 <option value="">Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//               {errors.bloodGroup && <p className="error-text">{errors.bloodGroup.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Lock className="text-gray-500" />
//                 <input type="password" {...register("password")} placeholder="Password" className="input-field w-full"
//                   onFocus={() => setPasswordFocused(true)}
//                 />
//               </div>
//               {errors.password && <p className="error-text">{errors.password.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Lock className="text-gray-500" />
//                 <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="input-field w-full" />
//               </div>
//               {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
//             </div>

//             {/* ✅ FIXED REGISTER BUTTON (Added `type="submit"`) */}
//             <div className="col-span-12">
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//                 Register
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }

//-----------------

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Stethoscope, Lock, Mail, User, Phone, UserCheck } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import API from "../api/api";

// // ✅ Validation Schema using Yup
// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   aadharNumber: yup.string().matches(/^[0-9]{12}$/, "Aadhar must be 12 digits").required("Aadhar is required"),
//   age: yup.number().typeError("Age must be a number").min(18, "Must be 18+").required("Age is required"),
//   gender: yup.string().oneOf(["Male", "Female", "Other"], "Invalid gender").required("Gender is required"),
//   phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").required("Phone is required"),
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   bloodGroup: yup.string().required("Blood group is required"),
//   password: yup
//     .string()
//     .min(8, "At least 8 characters")
//     .matches(/[A-Z]/, "1 uppercase letter")
//     .matches(/[a-z]/, "1 lowercase letter")
//     .matches(/[0-9]/, "1 number")
//     .matches(/[!@#$%^&*]/, "1 special character")
//     .required("Password is required"),
//   confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Confirm password is required"),
// });

// export default function PatientRegister() {
//   const navigate = useNavigate();
//   // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
//   const { register, handleSubmit, getValues, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


//   const [passwordFocused, setPasswordFocused] = useState(false);

//   // ✅ FIXED onSubmit function
//   // const onSubmit = async (data: any) => {
//   //   console.log("🟢 Submitting Data:", data); // Debug Log - Check if this prints in console

//   //   try {
//   //     const response = await API.post("/register", data);
//   //     console.log("✅ Registration Successful:", response.data); // Debug Log
//   //     alert("Registration Successful!");
//   //     navigate("/patient/login");
//   //   } catch (error: unknown) {
//   //     if (error instanceof Error) {
//   //       console.error("❌ Registration Failed:", error.message);
//   //     }
//   //     alert("Registration failed! Try again.");
//   //   }
//   // };

//   const onSubmit = async (data: any) => {
//     console.log("🔥 handleSubmit(onSubmit) is running!", data); // Debug Log
  
//     try {
//       const response = await API.post("/register", data);
//       console.log("✅ API Response:", response.data);
//       alert("Registration Successful!");
//       navigate("/patient/login");
//     } catch (error: unknown) {
//       console.error("❌ API Error:", error);
//       alert("Registration failed! Check console for details.");
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center items-center">
//       <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        
//         {/* Header Section */}
//         <div className="flex items-center bg-blue-600 text-white px-6 py-4">
//           <Stethoscope className="h-10 w-10" />
//           <h2 className="ml-3 text-2xl font-semibold">Create Patient Account</h2>
//         </div>

//         {/* Form Section */}
//         <div className="p-8">
//           <p className="text-gray-600 mb-6 text-center">
//             Already have an account?{" "}
//             <Link to="/patient/login" className="text-blue-600 hover:underline">
//               Sign in
//             </Link>
//           </p>

//           {/* ✅ FIXED FORM HANDLING */}
//           {/* <form className="grid grid-cols-12 gap-6" onSubmit={(e) => { 
//             e.preventDefault();
//             console.log("✅ Form Manually Submitted"); 
//             handleSubmit(onSubmit)(); 
//           }}> */}
// <form className="grid grid-cols-12 gap-6" onSubmit={(e) => { 
//     e.preventDefault();
//     console.log("✅ Form Manually Submitted"); 

//     const formData = getValues(); // ✅ Get form values manually
//     console.log("📌 Extracted Form Data:", formData); // Debugging step

//     handleSubmit(() => onSubmit(formData))()
//       .then(() => console.log("🔥 handleSubmit executed successfully!"))
//       .catch((error) => console.error("❌ handleSubmit failed:", error));
// }}>

            
//             {/* Left Side Fields */}
//             <div className="col-span-5 space-y-6">
//               <div className="flex items-center space-x-3">
//                 <User className="text-gray-500" />
//                 <input {...register("name")} placeholder="Full Name" className="input-field w-full" />
//               </div>
//               {errors.name && <p className="error-text">{errors.name.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <UserCheck className="text-gray-500" />
//                 <input {...register("aadharNumber")} placeholder="Aadhar Number" className="input-field w-full" />
//               </div>
//               {errors.aadharNumber && <p className="error-text">{errors.aadharNumber.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Phone className="text-gray-500" />
//                 <input {...register("phoneNumber")} placeholder="Phone Number" className="input-field w-full" />
//               </div>
//               {errors.phoneNumber && <p className="error-text">{errors.phoneNumber.message}</p>}

//               <div className="flex items-center space-x-3">
//                 <Mail className="text-gray-500" />
//                 <input {...register("email")} placeholder="Email" className="input-field w-full" />
//               </div>
//               {errors.email && <p className="error-text">{errors.email.message}</p>}
//             </div>

//             {/* Center Divider Line */}
//             <div className="col-span-2 flex justify-center">
//               <div className="w-[1px] bg-gray-300 h-full"></div>
//             </div>

//             {/* Right Side Fields */}
//             <div className="col-span-5 space-y-6">
//               <select {...register("gender")} className="input-field w-full">
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//               {errors.gender && <p className="error-text">{errors.gender.message}</p>}

//               <select {...register("bloodGroup")} className="input-field w-full">
//                 <option value="">Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//               {errors.bloodGroup && <p className="error-text">{errors.bloodGroup.message}</p>}
//             </div>

//             {/* ✅ FIXED REGISTER BUTTON */}
//             <div className="col-span-12">
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//                 Register
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }
