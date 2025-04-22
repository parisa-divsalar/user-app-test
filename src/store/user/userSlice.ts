import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateTypes } from '@/type/user.ts';
import { IInvest } from '@/type/invest.ts';

const initialState: UserStateTypes = {
  profile: {},
  token: undefined,
  refreshToken: undefined,
  userId: undefined,
  investList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string; userId: string }>) => {
      const { token, userId } = action.payload;
      state.token = token;
      state.userId = userId;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setInvestList: (state, action: PayloadAction<IInvest[]>) => {
      state.investList = [...state.investList, ...action.payload];
    },
    addInvest(state, action: PayloadAction<IInvest>) {
      state.investList = [...state.investList, action.payload];
    },
    updateInvest(state, action: PayloadAction<{ id: string; invest: IInvest }>) {
      const { id, invest } = action.payload;

      let findInvest: IInvest | undefined = state.investList.find((i: IInvest) => i.id === id);

      findInvest = { ...findInvest, ...invest };

      state.investList = state.investList.map((i: IInvest) => (i.id === id ? findInvest : i));
    },
    setProfile(state, action) {
      const payload = action.payload;
      state.profile = {
        ...state.profile,
        ...payload,
      };
    },
  },
});

export const { setProfile, setToken, updateToken, setInvestList, addInvest, updateInvest } =
  userSlice.actions;
export default userSlice.reducer;
