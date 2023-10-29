import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOut, refreshing, registerUser } from '../operation';

export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      emai: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        alert('Congratulations you have created a new account');
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, () => alert('Wrong Email or pasword'))
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', emai: '' };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      }),
});
