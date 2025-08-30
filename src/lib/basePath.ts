export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/artkrati-web' : '';
export const withBase = (p: string) => `${BASE_PATH}${p.startsWith('/') ? p : `/${p}`}`;
