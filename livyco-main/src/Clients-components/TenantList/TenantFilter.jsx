import React, { useState } from "react";

const Filter = ({ onClose }) => {
    const [selectedBuilding, setSelectedBuilding] = useState("Hostel 1");
    const [selectedRoomType, setSelectedRoomType] = useState("Single Sharing");
    const [selectedFloor, setSelectedFloor] = useState("1st Floor");
  
    const buildings = ["Hostel 1", "Hostel 2"];
    const roomTypes = [
      "Single Sharing",
      "Double Sharing",
      "3 Sharing",
      "4 Sharing",
      "5 Sharing",
      "5+ Sharing",
    ];
    const floors = ["1st Floor", "2nd Floor", "3rd Floor", "4th Floor"];
    return (
      <div className="p-6 w-full max-w-md mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Filter by</h2>
        
        {/* Building Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2 flex items-center">
            <span className="mr-2">🏢</span> Building
          </h3>
          <div className="flex gap-2">
            {buildings.map((building) => (
              <button
                key={building}
                className={`px-4 py-2 border rounded-lg ${
                  selectedBuilding === building ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setSelectedBuilding(building)}
              >
                {building}
              </button>
            ))}
          </div>
        </div>
  
        {/* Room Type Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2 flex items-center">
            <span className="mr-2">🛏️</span> Room Type
          </h3>
          <div>
            {roomTypes.map((room) => (
              <label key={room} className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="roomType"
                  value={room}
                  checked={selectedRoomType === room}
                  onChange={() => setSelectedRoomType(room)}
                  className="w-4 h-4"
                />
                <span>{room}</span>
              </label>
            ))}
          </div>
        </div>
  
        {/* Floor Number Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Floor Number</h3>
          <div className="flex gap-2">
            {floors.map((floor) => (
              <button
                key={floor}
                className={`px-4 py-2 border rounded-lg ${
                  selectedFloor === floor ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setSelectedFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
  
        {/* Apply Button */}
  
    <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg mt-4">
          Apply
        </button>
      </div>

  );
};

export default Filter;