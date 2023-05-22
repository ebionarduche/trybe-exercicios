export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = (email) => ({
  type: SUBMIT_LOGIN,
  email,
});
