import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'register/user',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logInUser = createAsyncThunk(
  'login/user',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('logout/user', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshing = createAsyncThunk(
  'refreshing/user',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable token user');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        ...obj,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContacts = createAsyncThunk(
  'contacts/update',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
