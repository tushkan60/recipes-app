import { createAction, props } from '@ngrx/store';

export const authSuccess = createAction(
  '[auth] AuthSuccess',
  props<{
    user: { email: string; id: string; token: string; expirationDate: Date };
  }>()
);

export const loginStart = createAction(
  '[auth] LoginStart',
  props<{
    email: string;
    password: string;
  }>()
);

export const authFail = createAction(
  '[auth] LoginFail',
  props<{
    message: string;
  }>()
);

export const signupStart = createAction(
  '[auth] SignupStart',
  props<{
    email: string;
    password: string;
  }>()
);

export const logout = createAction('[auth] Logout');

export const clearError = createAction('[auth] ClearError');

export const autoLogin = createAction('[auth] AutoLogin');

export const autoLogout = createAction('[auth] AutoLogout');
