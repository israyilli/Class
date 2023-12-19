import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
const initialState = {
  toppings: [],
  gluten: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggle_gluten: (state) => {
      state.gluten = !state.gluten;
    },
    add_topping: (state, action) => {
      state.toppings.push(action.payload);
    },
  },
});
export const { add_topping, toggle_gluten } = pizzaSlice.actions;

export default pizzaSlice.reducer;
