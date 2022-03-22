import { Action } from 'redux';
import { accountActions } from './types';

const initialState = {
  data: {},
  loading: false,
};

export interface ActionPayload extends Action {
  payload: any;
}

const accountReducer = (state = initialState, action: ActionPayload) => {
  switch (action.type) {
    case accountActions.createAccount.start:
      return {
        ...state,
        loading: true,
      };
    case accountActions.createAccount.success:
      const user = {
        email: action.payload?.user?.email,
        uid: action.payload?.user?.uid,
        isNewUser: action.payload?.additionalUserInfo?.isNewUser,
      };

      return {
        ...state,
        loading: false,
        data: user,
      };
    case accountActions.createAccount.error:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
