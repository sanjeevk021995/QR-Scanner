import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeSettings = ({ userData }) => {
  const [selectedFields, setSelectedFields] = useState({
    name: true,
    email: false,
    phone: false,
    address: false,
    height: false,
    weight: false,
    bloodType: false,
    allergies: false,
  });

  const handleCheckboxChange = (field) => {
    setSelectedFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const qrCodeValue = Object.keys(selectedFields)
    .filter((key) => selectedFields[key])
    .map((key) => `${key}: ${userData[key]}`)
    .join("\n");

  return (
    <div className="card p-3">
      <h5>Select Data for QR Code</h5>
      {Object.keys(selectedFields).map((field) => (
        <div key={field}>
          <input
            type="checkbox"
            checked={selectedFields[field]}
            onChange={() => handleCheckboxChange(field)}
          />
          <label> {field}</label>
        </div>
      ))}
      <div className="qr-code mt-3">
        <QRCodeCanvas value={qrCodeValue} size={120} />
      </div>
    </div>
  );
};

export default QRCodeSettings;
