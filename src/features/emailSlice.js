import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   sendMessageIsOpen: "alse,
// };

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: {},
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendEmail: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendEmail: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendEmail, closeSendEmail, selectMail } = emailSlice.actions;

export const selectEmail = (state) => state.email.sendMessageIsOpen;
export const selectEmail2 = (state) => state.email.selectedMail;
export default emailSlice.reducer;
