export const buildQueryString = (params: { [key: string]: string }): string => {
    return '?' + Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
  };
  