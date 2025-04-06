import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  value: any[];
}

const initialState: DataState = {
  value: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
