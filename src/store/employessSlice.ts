import { createSlice } from "@reduxjs/toolkit";

const employessSlice = createSlice({
  name: "employess",
  initialState: {
    data: {},
  },
  reducers: {
    setEmployess(state, { payload }) {
      state.data = {};
      payload.map((item) => {
        const { name, employess } = item;
        item.isActive
          ? (state.data[name] = employess)
          : delete state.data[name];
      });
    },
    // removeCompany(state, { payload }) {
    //   state.data = state.data.filter((item) => item.id !== payload.id);
    // },
    // addCompany(state, { payload }) {
    //   state.data.push(payload);
    // },
    // setEmployess(state, { payload }) {
    //   state.data = payload;
    // },
  },
});

export const { setEmployess } = employessSlice.actions;
export const employessReducer = employessSlice.reducer;
