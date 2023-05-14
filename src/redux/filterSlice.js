import { createSlice } from "@reduxjs/toolkit"; 

// Filter

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    }
  }
})

export const { filterContacts } =  filterSlice.actions;

export const filterReducer = filterSlice.reducer;