export const isAuthenticatedSelector = (state: any) => state.user.token !== undefined;

export const useIdSelector = (state: any) => state.user.userId;

export const profileSelector = (state: any) => state.user.profile;

export const investSelector = (state: any) => state.user.investList;
