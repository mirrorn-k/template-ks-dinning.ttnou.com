/**
 * .envではURLとパラメータを分けて設定するため、URLとパラメータを結合する
 * @param url
 * @param params
 * @returns
 */
export function makeUrl(
  url: string | undefined,
  params: string | undefined = ''
): string {
  if (!url) {
    return '';
  }

  return `${url}?${params}`;
}

/**
 * nodejsのサーバサイドではlocalhostを使うとエラーになるため、dockerのホスト名に変換する
 * @param url
 * @returns
 */
export function changeLocalhostToDocker(url: string): string {
  return url.replace('localhost', 'host.docker.internal');
}

export const isOdd = (num: number): boolean => {
  return num % 2 !== 0;
};
