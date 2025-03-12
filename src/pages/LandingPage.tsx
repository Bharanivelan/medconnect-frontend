import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Users, FileText, Shield, Clock, Activity } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MedConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/patient/login"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Patient Login
              </Link>
              <Link
                to="/doctor/login"
                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Doctor Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Your Medical Records,
              <span className="text-blue-600"> All in One Place</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Securely store and access all your medical documents, prescriptions, and test reports in one centralized location.
              Share with healthcare providers instantly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Document Storage</h3>
                <p className="mt-2 text-gray-600">
                  Organize and categorize your medical documents intelligently with our advanced filing system
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Seamless Doctor Connection</h3>
                <p className="mt-2 text-gray-600">
                  Share your medical history securely with healthcare providers for better coordination
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Bank-Level Security</h3>
                <p className="mt-2 text-gray-600">
                  Your medical data is protected with state-of-the-art encryption and security measures
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedConnect?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">24/7 Access</h3>
                  <p className="mt-2 text-gray-600">
                    Access your medical records anytime, anywhere. No more waiting for office hours or physical copies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Better Healthcare Decisions</h3>
                  <p className="mt-2 text-gray-600">
                    Complete medical history at your fingertips helps doctors make more informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-blue-600 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Take Control of Your Medical Records?
              </h2>
              <p className="text-blue-100 mb-6">
                Join thousands of patients who have already simplified their healthcare journey.
              </p>
              <Link
                to="/patient/login"
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-50 transition"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}