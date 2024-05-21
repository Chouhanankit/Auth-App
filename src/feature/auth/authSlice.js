import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";

const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
})

export default authSlice.reducer;

export const userRegister = createAsyncThunk("REGISTER/USER", (formData) => {
    return authService.Register(formData)
})