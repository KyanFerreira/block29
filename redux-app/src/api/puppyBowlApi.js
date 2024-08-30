// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2405-UNF-HY-WEB-PT/",
    prepareHeaders: (headers) => {
      return headers;
    }
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
    fetchPlayers: builder.query({
      // The part of the URL that comes after the baseUrl for this specific endpoint
      query: () => ({
        url: '/players',
        method: 'GET',
        responseHandler: (response) => response.text(),
      })
    }),
    //Define endpoint a that deletes player
    deletePlayers: builder.query({
      query: (playerId) => ({
        url: `/players/${playerId}`,
        method: 'DELETE',
      })
    })
  }),
});

const puppyBowlApiSlice = createSlice({
  name: "puppyBowl",
  initialState: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.fetchPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query

export const { useFetchPlayersQuery } = puppyBowlApi;
export default puppyBowlApiSlice.reducer;