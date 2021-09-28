import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   sendMessageIsOpen: "alse,
// };

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: {},
    sideBarOpen: false,
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
    togleSideBarEmail: (state) => {
      state.sideBarOpen = !state.sideBarOpen;
    },
   
  },
});

export const { openSendEmail, closeSendEmail, selectMail, togleSideBarEmail } =
  emailSlice.actions;

export const selectEmail = (state) => state.email.sendMessageIsOpen;
export const selectEmail2 = (state) => state.email.selectedMail;
export const selectSideBarEmail = (state) => state.email.sideBarOpen;

export default emailSlice.reducer;
