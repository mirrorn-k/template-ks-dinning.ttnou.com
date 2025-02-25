import { tMedia } from '@ctypes/map';

export type tValue = string | number;

export type tGridSize = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

/**
 * サイトメニュー
 */
export type tMenu = {
  en: string;
  jp: string;
  href: string;
};

/**
 * トップページのキャッチコピー
 */
export type tCatchcopy = {
  title: string;
  description: string;
  image: tMedia;
  tags: string[];
};

export type tLink = {
  name: string;
  url: string;
  icon: tMedia | null;
};

/**
 * トップページのコンテンツ
 */
export type tContent = {
  title: string;
  description: string;
  img1: tMedia;
  img2?: tMedia;
  href: string;
};

/**
 * コンテンツ間を繋ぐように利用す
 */
export type tSubContent = {
  catchcopy: string;
  img1: tMedia;
  img2?: tMedia | null;
} | null;

/**
 * サブページタイトル
 */
export type tPageTitle = {
  title: string;
  subTitle: string;
  caption: string;
  tags: string[];
  img1: tMedia | null;
  img2: tMedia | null;
};

/**
 * テーブルレイアウトのアイテム
 * components/table/Clm2.tsx で使用を想定
 */
export type tTableClm2 = {
  key: string;
  label: string;
  value: string;
};

/**
 * 強調するコンテンツ
 */
export type tHighlightContent = {
  uuid: string;
  title: string;
  description: string;
  label: string;
  link: string;
  tags: string[];
  img: tMedia;
};

export type tTile = {
  uuid: string;
  caption: string;
  img1: tMedia;
  img2?: tMedia | null;
};

/**
 * リスト形式
 */
export type tItem = {
  uuid: string;
  title: string;
  caption: string;
  tags: string[];
  img1: tMedia;
  img2: tMedia | null;
};

/**
 * 提案
 */
export type tProposal = {
  title: string;
  subTitle: string;
  contents: tProposalContent[];
};

export type tProposalContent = {
  title: string;
  caption: string;
  img1: tMedia | null;
  img2: tMedia | null;
};

/**
 * サービス
 */
export type tTableContent = {
  title?: string;
  value: { [key: string]: { [key: string]: string[] } };
  captions?: string[];
};

export type tContentImg1 = {
  uuid: string;
  catchcopy: string;
  title: string;
  description: string;
  tags: string[];
  img1: tMedia;
  img2: tMedia | null;
  label?: string | null;
  href?: string | null;
};
