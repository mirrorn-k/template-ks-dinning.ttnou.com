import log from 'loglevel';

// 環境に応じてログレベルを設定
if (process.env.REACT_APP_ENV !== 'production') {
  log.setLevel('debug');
} else {
  log.setLevel('silent');
}

export default log;
