import axios from "axios";

const API_URL = "http://localhost:8000/api/users/"; // Adjust as needed

// Function for login
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}login/`, { email, password });
  console.log("response", response);
  return response.data; // returns { access, refresh, user_type, name }
};

// Function for password reset
export const resetPassword = async (email) => {
  const response = await axios.post(`${API_URL}reset-password/`, { email });
  console.log("Reset password response:", response);
  return response.data; // Adjust as needed based on your API response
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}forgot-password/`, { email });
  console.log("Forgot password response:", response);
  return response.data; // Adjust as needed based on your API response
};
