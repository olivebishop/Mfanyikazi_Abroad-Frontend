import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import Content from "./Content";
import DashboardFooter from "./DashboardFooter";
//import ViewUser from "./Protected-routes/ViewUser";;
//import AddJob from "../../pages/dashboard/Protected-routes/manage-jobs/AddJobs";
//import ViewJob from "../../pages/dashboard/Protected-routes/manage-jobs/ViewJobs";


const Dashboard = ({ loggedIn }) => {
  const [selectedComponent, setSelectedComponent] = useState("content");

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 flex">
        <Sidebar onSelectComponent={setSelectedComponent} />
        
        <div className="flex-1">
          {/* Conditional rendering for selected component */}
          {/*selectedComponent === "content" && <Content />}
          {selectedComponent === "viewUser" && <ViewUser />}
          {selectedComponent === "addCountry" && <AddCountry />} 
          {selectedComponent === "viewCountry" && <ViewCountry />} 
          {selectedComponent === "addCourses" && <AddCourses />} 
          {selectedComponent === "viewCourses" && <ViewCourses />} 
          {selectedComponent === "addJob" && <AddJob />}
          {selectedComponent === "viewJob" && <ViewJob />}
          {selectedComponent === "viewReports" && <ViewReports />}
          {selectedComponent === "viewDocs" && <viewDocs />}
          {selectedComponent === "profile" && <Profile/>}
          {selectedComponent === "checkLogs" && <CheckLogs/>*/}

          {/* AdminChart will only render when selectedComponent is "content" */}
          {/*selectedComponent === "content" && <AdminChart />*/}


          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;