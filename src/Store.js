import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data1: [],
  data2: [],
  data3: [],
  recentSearch: [],
  backgroundArray: [],
  filterArray: [],
  search: "",
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    updateData1: (state, action) => {
      state.data1 = action.payload;
    },
    updateData2: (state, action) => {
      state.data2 = action.payload;
    },
    updateData3: (state, action) => {
      state.data3 = action.payload;
    },
    updateRecentSearch: (state, action) => {
      state.recentSearch = action.payload;
    },
    updateBackgroundArray: (state, action) => {
      state.backgroundArray = action.payload;
    },
    updateFilterArray: (state, action) => {
      state.filterArray = action.payload;
    },
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const store = configureStore({
  reducer: mySlice.reducer,
});

export const {
  updateData1,
  updateData2,
  updateData3,
  updateRecentSearch,
  updateBackgroundArray,
  updateFilterArray,
  updateSearch,
} = mySlice.actions;
export default store;
