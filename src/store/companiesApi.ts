import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCompanies } from "./companiesSlice";

interface IEmployees {
  id: number;
  firstName: string;
  surname: string;
  job: string;
}

interface ICompanies {
  id: number;
  company: string;
  email: string;
  address: string;
  employees: IEmployees[];
}

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://6570e67d09586eff664217e0.mockapi.io/api/`,
  }),
  endpoints: (build) => ({
    getCompanies: build.query<ICompanies, string>({
      query: (endpoints) => `${endpoints}`,
    }),
    updateCompanies: build.mutation({
      query: ({ index, ...body }) => ({
        url: `/data/${index}`,
        method: "PUT",
        body,
      }),
    }),
    removeCompanies: build.mutation({
      query: ({ index }) => ({
        url: `/data/${index}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCompaniesQuery,
  useUpdateCompaniesMutation,
  useRemoveCompaniesMutation,
} = companiesApi;
