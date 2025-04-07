import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser,
  },
  reducers: {
    register: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    login: (state, action) => {
      const registeredUser = JSON.parse(localStorage.getItem("user"));
      if (
        registeredUser &&
        registeredUser.email === action.payload.email &&
        registeredUser.password === action.payload.password
      ) {
        state.user = registeredUser;
      } else {
        alert("Invalid email or password");
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
