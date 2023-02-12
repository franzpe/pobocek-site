const CMS_BASE_URL = import.meta.env.VITE_CMS_BASE_URL;
export const CMS_BASE_API_URL = import.meta.env.VITE_CMS_BASE_URL + '/api';
export const CMS_IMG_BASE_URL = import.meta.env.DEV ? CMS_BASE_URL : '';

export const ABOUT_SLUG = 'about';
