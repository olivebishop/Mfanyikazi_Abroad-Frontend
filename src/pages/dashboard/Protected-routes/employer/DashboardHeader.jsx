import React, { useEffect, useState } from "react";
import {
  BiLogOutCircle,
  BiMessageSquare,
  BiBell,
  BiSearch,
  BiHelpCircle,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import profile from "../../../../assets/profile.png";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const publicRoutes = ["/", "/about", "/services", "/contact", "/signup", "/forgot-password", "/account-type", "/terms-and-conditions","/country", "/reset-password","/employer-signup","/employee-signup","/agency-signup","/pending-verification","/submit-verification", "/agency-verification","/employer-verification"]; //public routes
    if (!token && !publicRoutes.includes(window.location.pathname)) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleHelpIconClick = () => {
    setShowHelpModal(true);
  };

  const handleCloseHelpModal = () => {
    setShowHelpModal(false);
  };

  const handleEmergencyCall = () => {
    window.open("tel:999");
  };

  const handleSendMessage = () => {
    window.open("mailto:support@example.com");
  };

  const handleProfileClick = () => {
    setShowProfileModal(true);
  };

  const handleProfileModalClose = () => {
    setShowProfileModal(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleProfileUpdate = () => {
    // Perform profile update logic
    console.log("Username:", username);
    console.log("Profile Image:", profileImage);
    setShowProfileModal(false);
  };

  // Get the authToken state
  const authToken = localStorage.getItem("authToken");

  return (
    <header className={`bg-slate-900 text-white p-4 fixed top-0 left-0 w-full z-50 ${authToken ? "" : "hidden"}`}>
      <div className="flex flex-wrap items-center justify-between">
        {/* Profile */}
        <div
          className="flex items-center space-x-2 mb-2 sm:mb-0 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          <h6 className="text-lg font-semibold">Employer Dashboard</h6>
        </div>

        {/* Search, Message, Notification, and Logout Icons */}
        <div className="flex items-center space-x-4">
          <BiSearch className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-gray-800 bg-white rounded-md focus:outline-none"
          />
          <BiMessageSquare
            className="h-6 w-6 cursor-pointer"
            onClick={handleSendMessage}
          />
          <BiBell className="h-6 w-6" />
          <BiHelpCircle
            className="h-6 w-6 cursor-pointer"
            onClick={handleHelpIconClick}
          />
          <BiLogOutCircle
            className="h-6 w-6 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* ... rest of the modal ... */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <p>
              Contact emergency services by calling{" "}
              <span className="font-semibold">999</span>.
            </p>
            <p>
              Send a message to the support team for assistance or inquiries.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleEmergencyCall}
              >
                Emergency Call
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 ml-2 rounded hover:bg-gray-400"
                onClick={handleCloseHelpModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* ... rest of the modal ... */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Update Profile</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="border border-gray-300 px-2 py-1 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Profile Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border border-gray-300 px-2 py-1 rounded-md w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleProfileUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 ml-2 rounded hover:bg-gray-400"
                onClick={handleProfileModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
