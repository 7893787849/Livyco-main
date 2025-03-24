import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMessageCircle, FiPhone } from "react-icons/fi";
import ClientNav from "../Client-Navbar/ClientNav";

const ApproveCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tenant = location.state || {}; // Ensure tenant data is passed

  return (
    <>
      <ClientNav />
      <div className="p-6 bg-white min-h-screen">
        <h2
          className="text-gray-500 text-sm cursor-pointer mb-6"
          onClick={() => navigate(-1)}
        >
          Home / Tenant Request
        </h2>

        {/* Tenant Profile Section */}
        <div className="bg-white p-6 flex items-center justify-between mb-6 border rounded-lg">
          <div className="flex gap-4 items-center">
            <img
              src={tenant.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h2 className="text-xl font-semibold">{tenant.name}</h2>
              <p className="text-gray-500">{tenant.tenantId}</p>
            </div>
          </div>
          {/* Contact Buttons */}
          <div className="flex space-x-4">
            <button className="p-3 bg-yellow-400 rounded-full shadow-md">
              <FiMessageCircle className="text-black text-lg" />
            </button>
            <button className="p-3 bg-yellow-400 rounded-full shadow-md">
              <FiPhone className="text-black text-lg" />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Basic Details */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-700 mb-4">Basic Details</h3>
            <div className="text-gray-600">
              <p><strong>Email ID:</strong> {tenant.email}</p>
              <p><strong>Date of Birth:</strong> {tenant.dob}</p>
              <p><strong>Aadhar Number:</strong> {tenant.aadhar}</p>
              <p><strong>Emergency Contact:</strong> {tenant.emergencyContact} ({tenant.emergencyName})</p>
              <p><strong>Address:</strong> {tenant.address}</p>
            </div>
          </div>

          {/* Stay Details */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-700 mb-4">Stay Details</h3>
            <div className="text-gray-600">
              <p className="font-semibold">{tenant.hostelName}</p>
              <p className="text-gray-500">{tenant.hostelAddress}</p>
              <p><strong>Check-in Date:</strong> {tenant.checkInDate}</p>
              <p><strong>Check-out Date:</strong> {tenant.checkOutDate}</p>
              <p><strong>Details:</strong> {tenant.roomDetails}</p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-700 mb-4">Payment Details</h3>
            <div className="text-gray-600">
              <p><strong>Advance Paid:</strong> ₹{tenant.advancePaid}</p>
              <p><strong>Rent per month:</strong> ₹{tenant.rentPerMonth}</p>
              <p><strong>Total Rent Paid:</strong> ₹{tenant.totalRentPaid}</p>
              <p><strong>Last Due Paid On:</strong> {tenant.lastDueDate}</p>
              <p><strong>Outstanding Due:</strong> ₹{tenant.outstandingDue}</p>
            </div>
          </div>
        </div>

        {/* Approve and Process Refund Button */}
        <div className="flex justify-center mt-8">
          <button className="w-64 py-3 bg-[#0827B2] text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
            Approve and Process Refund
          </button>
        </div>
      </div>
    </>
  );
};

export default ApproveCheckout;
