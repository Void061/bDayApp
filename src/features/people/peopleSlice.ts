import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PeopleData from "../../utils/data";

// Define the initial state using that type
const initialState: PeopleState = {
  People: PeopleData,
  currentPerson: null,
  error: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setCurrentPerson: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const _person = state.People.filter(
        (person) => person.token.toLowerCase() === payload.toLowerCase()
      );

      

       if (_person.length < 1) {
         state.error = true;
       }
       else{
        state.error = false;
        state.currentPerson = _person[0];
       }

    },
  },
});

// Export reducers
export const { setCurrentPerson } = peopleSlice.actions;

// Export slice
export default peopleSlice.reducer;
