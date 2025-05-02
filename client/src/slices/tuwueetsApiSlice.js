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
  }),
});

export const { useCreateMutation } = tuwueetsApiSlice;
