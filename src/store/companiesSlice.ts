import { createSlice } from "@reduxjs/toolkit";
import companies from "../db/companies.json";

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    data: companies,
    currEmployess: [],
    employess: {},
  },
  reducers: {
    updateCompanies(state, { payload }) {
      state.data = state.data.map((company) => {
        if (company.id === payload.id) {
          return payload;
        }
        return company;
      });
    },
    removeCompany(state, { payload }) {
      state.data = state.data.filter((item) => item.id !== payload.id);
    },
    addCompany(state, { payload }) {
      state.data.push(payload);
    },
    setEmployess(state) {
      state.employess = {};
      state.data.map((item) => {
        const { name, employess } = item;
        item.isActive
          ? (state.employess[name] = employess)
          : delete state.employess[name];
      });
    },
  },
});

export const { updateCompanies, removeCompany, addCompany, setEmployess } =
  companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;
