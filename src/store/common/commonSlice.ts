import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorsType } from '@/type/common.ts';

export type Theme = 'light' | 'dark';

export interface CommonState {
  theme: Theme;
  errors: ErrorsType[];
  snackbar: {
    openSnackbar: boolean;
    message: string;
  };
}

const initialState: CommonState = {
  theme: 'dark',
  errors: [],
  snackbar: {
    openSnackbar: false,
    message: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setErrors: (state, action: PayloadAction<ErrorsType[]>) => {
      state.errors = action.payload;
    },
    setSnackbar(state, action) {
      const { openSnackbar, message } = action.payload;
      state.snackbar.openSnackbar = openSnackbar;
      state.snackbar.message = message;
    },
  },
});

export const { setErrors, setTheme, setSnackbar } = commonSlice.actions;
export default commonSlice.reducer;
