import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  activeStep: number;
}

const initialState: InitialStateProps = {
  activeStep: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setActiveStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = accountSlice.actions;
export default accountSlice.reducer;
