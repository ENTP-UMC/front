import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: null,
  univ: null,
  phoneNum: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setUniv: (state, action) => {
      state.univ = action.payload;
    },
    setPhoneNum: (state, action) => {
      state.phoneNum = action.payload;
    },
  },
});

export const { setNickname, setUniv, setPhoneNum } = loginSlice.actions;
export default loginSlice.reducer;
