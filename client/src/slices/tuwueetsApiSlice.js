import { apiSlice } from "./apiSlice";

const TUWUEETS_URL = "/api/tuwueets";

export const tuwueetsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${TUWUEETS_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    like: builder.mutation({
      query: (data) => ({
        url: `${TUWUEETS_URL}/like`,
        method: "POST",
        body: data,
      }),
    }),
    getAll: builder.query({
      query: (_) => ({
        url: `${TUWUEETS_URL}/all`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateMutation, useLikeMutation, useGetAllQuery } =
  tuwueetsApiSlice;
