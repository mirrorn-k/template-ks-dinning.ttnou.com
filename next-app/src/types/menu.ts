import { tMedia } from '@ctypes/map';

export type tMenu = {
  uuid: string;
  image: tMedia;
  name: string;
  caption: string;
  price: number;
};

export type tCorse = {
  uuid: string;
  image: tMedia;
  name: string;
  subname: string;
  caption: string;
  price: number;
};
