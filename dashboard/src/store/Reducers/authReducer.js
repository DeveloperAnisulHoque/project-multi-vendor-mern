import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: null,
    userInfo: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // createuser
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.loader = false;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
        state.loader = false;
        state.userInfo = action.payload.data;
      });
  },
});

export const getAuthData = (state) => state.auth;

export const { clearMessage } = authReducer.actions;

export default authReducer.reducer;
