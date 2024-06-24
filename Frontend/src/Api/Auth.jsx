import axios from "axios";

const URL = "http://localhost:5000/";

export const postRegister = async (registerData) => {
  try {
    const response = await axios.post(`${URL}register`, registerData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export const postLogin = async (loginData) => {
  try {
    const response = await axios.post(`${URL}login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Erros", error);
    throw error;
  }
};
