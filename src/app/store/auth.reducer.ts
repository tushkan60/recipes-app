import { createReducer, on } from '@ngrx/store';
import { User } from '../auth/user.model';
import {
  authSuccess,
  authFail,
  loginStart,
  logout,
  signupStart,
  clearError,
} from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = { user: null, authError: null, loading: false };
export const authReducer = createReducer(
  initialState,
  on(authSuccess, (state, action) => {
    const user = new User(
      action.user.email,
      action.user.id,
      action.user.token,
      action.user.expirationDate
    );
    return { ...state, user: user, authError: null, loading: false };
  }),
  on(logout, (state) => ({ ...state, user: null, authError: null })),
  on(loginStart, signupStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(authFail, (state, action) => ({
    ...state,
    user: null,
    authError: action.message,
    loading: false,
  })),
  on(clearError, (state) => ({ ...state, authError: null }))
);
