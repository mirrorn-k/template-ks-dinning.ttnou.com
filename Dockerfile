# ベースイメージとしてNode.jsを使用
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /next-app

# ソースコードをコンテナにコピー
COPY ./next-app ./
COPY .env ./

# 依存関係をインストール
RUN npm install

# ポートを公開
EXPOSE 3000

# 起動コマンドを環境に応じて切り替え
# CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start; else npm run dev; fi" ]
