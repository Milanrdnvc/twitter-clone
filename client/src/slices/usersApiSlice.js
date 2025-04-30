import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (_) => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    editProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/editProfile`,
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.query({
      query: (_) => ({
        url: `${USERS_URL}/profileInfo`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useEditProfileMutation,
  useProfileQuery,
} = usersApiSlice;
