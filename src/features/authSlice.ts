import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string; 
  role: string; 
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null; 
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure(state) {
      state.isAuthenticated = false;  // Ensure user is marked as not authenticated on failure
      state.user = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerFailure(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout, registerSuccess, loginFailure, registerFailure } = authSlice.actions;
export default authSlice.reducer;
