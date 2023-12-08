/* eslint-disable @typescript-eslint/no-var-requires */

import { PayloadAction } from "@reduxjs/toolkit";

/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  balance: number;
}

const initialState: CounterState = {
  balance: 187451,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    incressBalance: (
      state: { balance: number },
      action: PayloadAction<number>
    ) => {
      state.balance = state.balance + action.payload;
    },
  },
});

export const { incressBalance } = walletSlice.actions;

export default walletSlice.reducer;
