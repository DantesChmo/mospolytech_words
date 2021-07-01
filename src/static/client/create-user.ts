import { getCookieByName } from './parse-cookie';

function createUser(): void {
  const userIdTrusty = window.localStorage.getItem('type_as_pro_user_id');
  const userIdOrigin = getCookieByName('type_as_pro_user_id');

  if (userIdTrusty || !userIdOrigin) {
    return;
  }

  window.localStorage.setItem('type_as_pro_user_id', userIdOrigin);
}

export {
  createUser
};
