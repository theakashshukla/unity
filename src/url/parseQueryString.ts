export const parseQueryString = (url: string): { [key: string]: string } => {
    const queryString = url.split('?')[1] || '';
    return queryString.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
      return acc;
    }, {} as { [key: string]: string });
  };
  