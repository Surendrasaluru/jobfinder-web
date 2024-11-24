import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: null,
  reducers: {
    addJob: (state, action) => {
      return action.payload;
    },
  },
});

export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
