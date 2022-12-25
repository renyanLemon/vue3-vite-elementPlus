import Cookies from 'js-cookie';

const langKey = 'i18nLang'

export function getLanguage() {
    return Cookies.get(langKey) || 'zh-cn';
}

export function setLanguage(lang) {
  return Cookies.set(langKey, lang);
}

export function setToken(token) {
  return Cookies.set('token', token);
}

export function getToken() {
  return Cookies.get('token');
}

export function removeToken() {
  return Cookies.remove('token');
}

export function getUserName() {
  return Cookies.get('userName');
}

export function setUserName(name) {
  return Cookies.set('userName', name);
}

export function removeUserName(name) {
  return Cookies.remove('userName');
}