// Cookie Utility Functions

function setCookie(name, value, days, path = '/') {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }

  // document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`;
  document.cookie = `${name}=${value};`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();

    if (cookie.indexOf(nameEQ) === 0) {
      // return decodeURIComponent(cookie.substring(nameEQ.length));
      return cookie.substring(nameEQ.length);
    }
  }

  return null;
}

function deleteCookie(name, path = '/') {
  // document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
  document.cookie = `${name}=;`;
}

function hasCookie(name) {
  return getCookie(name) !== null;
}

function getAllCookies() {
  const cookies = {};
  const cookieArray = document.cookie.split(';');

  cookieArray.forEach(cookie => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name) {
      cookies[name] = decodeURIComponent(value || '');
    }
  });

  return cookies;
}

function clearAllCookies() {
  const cookies = getAllCookies();

  Object.keys(cookies).forEach(name => {
    deleteCookie(name);
  });
}
