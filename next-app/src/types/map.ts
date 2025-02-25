export type tCompany = {
  number: string; // 法人番号
  domain: string; // ドメイン名
  organization_name: string; // 組織名
  ceo_name: string; // 代表者名
  ceo_post_name: string; // 代表役職
  tell: string; // 電話番号
  fax: string; // FAX番号
  postal_code: string; // 郵便番号
  address: string; // 住所
  address_other: string; // 住所その他
  email: string; // メールアドレス
  google_map: string; // Google Map URL
  google_map_link: string; // Google Mapリンク
  google_tm_script: string; // Google Tag Manager Script
  google_tm_script_body: string; // Google Tag Manager Script Body
  caption: string; // キャッチコピー
};

export type tMedia = {
  url: string;
  file: string;
  name: string;
  caption: string;
  uuid: string;
};

export type tContactFormItem = {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox";
  placeholder: string;
  required: boolean;
  row?: number; // textareaの時のみ
  options?: string[]; // select, radio, checkboxの時のみ
};
