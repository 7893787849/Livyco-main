import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ClientNav from "../Client-Navbar/ClientNav";
import { useNavigate } from "react-router-dom";

const tenantRequests = [
  {
    name: "Tenant Name",
    email: "TenantName@gmail.com",
    checkInDate: "2-2-2021",
    checkOutDate: "2-2-2021",
    outstandingDue: "Non",
    advancePaid: "2,000",
  },
  {
    name: "Tenant Name",
    email: "TenantName@gmail.com",
    checkInDate: "2-2-2021",
    checkOutDate: "2-2-2021",
    outstandingDue: "5000",
    advancePaid: "2,000",
  },
  {
    name: "Tenant Name",
    email: "TenantName@gmail.com",
    checkInDate: "2-2-2021",
    checkOutDate: "2-2-2021",
    outstandingDue: "Non",
    advancePaid: "3,000",
  },
];

const TenantCheckoutRequest = () => {
    const navigate = useNavigate();
  return (
    <>
      <ClientNav />
      <div className="p-6 bg-[#F8F8FF]  min-h-screen">
        <h2 className="text-gray-600 text-sm mb-4">Home / Tenant Request</h2>
        <div className=" p-4 ">
          <div className="flex items-center  mb-4">
            <input
              type="text"
              placeholder="Search By name , Room number"
              className="w-1/2 p-2 border rounded-3xl bg-[#F8F8FF] text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
           <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4974 7.79199L29.1641 7.79199M5.83073 28.2087H10.2057M5.83073 7.79199L11.6641 7.79199M16.0391 28.2087L29.1641 28.2087M24.7891 18.0003H29.1641M5.83073 18.0003L18.9557 18.0003" stroke="#333333" stroke-linecap="round"/>
<path d="M11.6667 7.79167C11.6667 9.4025 12.9725 10.7083 14.5833 10.7083C16.1942 10.7083 17.5 9.4025 17.5 7.79167C17.5 6.18084 16.1942 4.875 14.5833 4.875C12.9725 4.875 11.6667 6.18084 11.6667 7.79167Z" stroke="#333333" stroke-linecap="round"/>
<path d="M18.9557 17.9997C18.9557 19.6105 20.2616 20.9163 21.8724 20.9163C23.4832 20.9163 24.7891 19.6105 24.7891 17.9997C24.7891 16.3888 23.4832 15.083 21.8724 15.083C20.2616 15.083 18.9557 16.3888 18.9557 17.9997Z" stroke="#333333" stroke-linecap="round"/>
<path d="M10.2057 28.2087C10.2057 29.8195 11.5116 31.1253 13.1224 31.1253C14.7332 31.1253 16.0391 29.8195 16.0391 28.2087C16.0391 26.5978 14.7332 25.292 13.1224 25.292C11.5116 25.292 10.2057 26.5978 10.2057 28.2087Z" stroke="#333333" stroke-linecap="round"/>
</svg>

          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 text-sm border-b">
                <th className="p-3">Tenant Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Check-in Date</th>
                <th className="p-3">Check-out Date</th>
                <th className="p-3">Outstanding Payment Due</th>
                <th className="p-3">Advance Paid</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tenantRequests.map((tenant, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F8F8FF"} `}>
                  <td className="p-3">{tenant.name}</td>
                  <td className="p-3">{tenant.email}</td>
                  <td className="p-3">{tenant.checkInDate}</td>
                  <td className="p-3">{tenant.checkOutDate}</td>
                  <td className="p-3">{tenant.outstandingDue}</td>
                  <td className="p-3">{tenant.advancePaid}</td>
                  <td className="p-3"
                   onClick={() => navigate(`/client/approvecheckout/${tenant.id}`, { state: tenant })}
                  >
                    <FiExternalLink className="text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TenantCheckoutRequest;
