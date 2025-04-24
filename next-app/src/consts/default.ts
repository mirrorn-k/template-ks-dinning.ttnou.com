import { tCatchcopy } from 'src/types';
import { tCompany } from '@ctypes/map';

export const initCompanyInfo: tCompany = {
  number: '',
  domain: '',
  organization_name: '',
  ceo_name: '',
  ceo_post_name: '',
  tell: '',
  fax: '',
  postal_code: '',
  address: '',
  address_other: '',
  email: '',
  google_map: '',
  google_map_link: '',
  google_tm_script: '',
  google_tm_script_body: '',
  caption: '',
};

export const initMedia = {
  url: '',
  name: '',
  caption: '',
  file: '',
  uuid: '',
};

export const initCatchcopy: tCatchcopy = {
  title: '',
  description: '',
  image: initMedia,
  tags: [],
};

export const initContent = {
  title: '',
  description: '',
  image: initMedia,
  href: '',
};
