function getParsedCookies(): Record<string, string> {
  return document.cookie
    .split(';')
    .reduce((result, cookie) => {
      const [key, value] = cookie.trim().split('=');
      result[key] = value;
      return result;
    }, {});
}

function getCookieByName(name: string): string | null {
  return getParsedCookies()[name];
}

export {
  getParsedCookies,
  getCookieByName
};
