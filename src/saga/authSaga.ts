import { takeLatest, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { loginSuccess, registerSuccess, loginFailure, registerFailure } from '../features/authSlice';

interface LoginPayload {
  username: string; 
  password: string;
}

interface RegisterPayload {
  username: string; 
  password: string;
  role: string;
}

interface User {
  id: string; 
  username: string; 
  role: string; 
}

// Login Saga
function* login(action: { type: string; payload: LoginPayload }): Generator<unknown, void, AxiosResponse<{ user: User }>> {
  try {
    const response: AxiosResponse<{ user: User }> = yield call(axios.post, 'http://localhost:5000/api/login', action.payload);
    const user = response.data.user;
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure());
    console.error('Login failed:', error); // This logs the AxiosError you're seeing in the console
  }
}


// Register Saga
function* register(action: { type: string; payload: RegisterPayload }): Generator<unknown, void, AxiosResponse<{ user: User }>> {
  try {
    const response: AxiosResponse<{ user: User }> = yield call(axios.post, 'http://localhost:5000/api/register', action.payload);
    const user = response.data.user; 
    yield put(registerSuccess(user));
    // Optionally navigate to login page here
  } catch (error) {
    yield put(registerFailure());
    console.error('Registration failed:', error);
  }
}

// Watcher Saga
function* authSaga() {
  yield takeLatest('auth/login', login); 
  yield takeLatest('auth/register', register); 
}

export default authSaga;
