import axios from "axios";
import { hydrate } from "react-dom";
 
const api = axios.create({
  baseURL: "http://localhost:3043",
  headers: {
    "Content-type": "application/json"
  }
});


export const createHr = async (hr) => {
  try {
    const response = await api.post('/littuss/hr/hrregister', hr);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
 
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/littuss/hr/hrregister/{email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
 
export const loginUser = async (credentials) => {
  try {
    console.log(credentials.email);
    const response = await api.post('/littuss/hr/hrlogin', credentials);
    console.log(response.data);
    // alert("User Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
 
export const registerUser = async (hr) => {
  try {
    console.log("hi" + hr)
    const response = await api.post('/littuss/hr/hrregister', hr);
    console.log("end")
    alert("successfully registered");
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};


export const loginClient = async (credentials) => {
  try {
    const response = await api.post('/client', credentials);
    console.log(response.data);
    // You can handle the login response as needed
    alert("Client Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};