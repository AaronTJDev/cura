import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, options?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, options as never);
  }
}

enum AccountRouteNames {
  ACCOUNT = 'account',
  SIGNUP = 'signup',
  SIGNIN = 'signin',
  ONBOARDING_MODAL = 'onboarding',
  DOB = 'dob',
  EDIT = 'account_edit',
  SUBSCRIPTION_MODAL = 'subscription'
}

export enum SymptomSearchRouteNames {
  SEARCH = 'search',
  FOOD_SUGGESTIONS = 'food_suggestions'
}

export const routeNames = {
  account: AccountRouteNames,
  search: SymptomSearchRouteNames,
  home: {
    HOME: 'HOME'
  }
};

export const screenTitles = {
  account: {
    SIGNIN: 'Sign In',
    SIGNUP: 'Sign Up',
    SYMPTOM_SEARCH: 'Symptom Search',
    ACCOUNT: 'Account'
  },
  symptomSearch: {
    SEARCH: 'Symptom Search',
    FOOD_SUGGESTIONS: 'Food Suggestions'
  }
};

export const transparentHeaderOptions = {
  headerShown: true,
  title: '',
  headerTransparent: true
};
