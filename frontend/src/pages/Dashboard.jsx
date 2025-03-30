import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./HealthcareDashboard.css"; // Import your CSS file

function HealthcareDashboard() {
  // Sample user data (replace with actual data fetching)
  const [user, setUser] = useState({
    profilePic: "user-profile.jpg", // Replace with your image path
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    medicalHistory: [
      {
        id: 1,
        date: "2023-01-15",
        report: "Checkup Report 1.pdf",
        type: "pdf",
      },
      { id: 2, date: "2023-03-20", report: "X-ray Image 1.jpg", type: "image" },
      {
        id: 3,
        date: "2023-05-10",
        report: "Blood Test Results.pdf",
        type: "pdf",
      },
    ],
  });

  const [selectedBarcodeData, setSelectedBarcodeData] = useState({
    firstName: true,
    lastName: true,
    dateOfBirth: false, // Initially, date of birth is hidden
  });

  const [newReport, setNewReport] = useState({
    date: "",
    report: null, // File upload
    type: "",
  });

  const handleBarcodeDataChange = (field) => {
    setSelectedBarcodeData({
      ...selectedBarcodeData,
      [field]: !selectedBarcodeData[field],
    });
  };

  const generateBarcodeData = () => {
    let barcodeData = "";
    if (selectedBarcodeData.firstName)
      barcodeData += `First Name: ${user.firstName}\n`;
    if (selectedBarcodeData.lastName)
      barcodeData += `Last Name: ${user.lastName}\n`;
    if (selectedBarcodeData.dateOfBirth)
      barcodeData += `Date of Birth: ${user.dateOfBirth}\n`;
    return barcodeData;
  };

  const handleReportChange = (e) => {
    setNewReport({ ...newReport, report: e.target.files[0] });
  };

  const handleAddReport = () => {
    // Implement your report upload logic here (e.g., send to server)
    if (newReport.report) {
      let type = newReport.report.type.split("/")[0];
      const newReportEntry = {
        id: user.medicalHistory.length + 1,
        date: newReport.date,
        report: newReport.report.name,
        type: type,
      };
      setUser({
        ...user,
        medicalHistory: [...user.medicalHistory, newReportEntry],
      });
      setNewReport({ date: "", report: null, type: "" });
    }
  };

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <div className="barcode-section">
          <QRCode value={generateBarcodeData()} />
          <div className="barcode-controls">
            <label>
              <input
                type="checkbox"
                checked={selectedBarcodeData.firstName}
                onChange={() => handleBarcodeDataChange("firstName")}
              />
              First Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBarcodeData.lastName}
                onChange={() => handleBarcodeDataChange("lastName")}
              />
              Last Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedBarcodeData.dateOfBirth}
                onChange={() => handleBarcodeDataChange("dateOfBirth")}
              />
              Date of Birth
            </label>
          </div>
        </div>
      </div>

      <div className="medical-history-section">
        <h2>Medical History</h2>
        <ul>
          {user.medicalHistory.map((report) => (
            <li key={report.id}>
              {report.date} -{" "}
              <a
                href={`/reports/${report.report}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {report.report}
              </a>{" "}
              ({report.type})
            </li>
          ))}
        </ul>

        <div className="add-report-form">
          <h3>Add Report</h3>
          <input
            type="date"
            value={newReport.date}
            onChange={(e) =>
              setNewReport({ ...newReport, date: e.target.value })
            }
          />
          <input type="file" onChange={handleReportChange} />
          <button onClick={handleAddReport}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default HealthcareDashboard;
