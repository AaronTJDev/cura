import { RootStateOrAny } from 'react-redux';

export const getAccount = (state: RootStateOrAny) => {
  return state?.account?.data;
};

export const getIsLoggedIn = (state: RootStateOrAny) => {
  console.log('state', state.account.data);
  return !!state?.account?.data;
};

export const getIsNewUser = (state: RootStateOrAny) => {
  return state?.account?.data?.additionalUserInfo?.isNewUser;
};

export const getIsAccountLoading = (state: RootStateOrAny) => {
  return state?.account?.loading;
};
