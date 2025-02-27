# 1. ベースイメージ
FROM node:20-alpine

# 2. 作業ディレクトリを設定
WORKDIR /next-app

# 3. `package.json` をコピーして `npm install`
COPY ./next-app/package.json ./
COPY ./next-app/package-lock.json ./
RUN npm install

# 4. 残りのソースコードをコピー
COPY ./next-app ./

# 5. Next.js をビルド
RUN npm run build

# 6. ポートを公開
EXPOSE 3000
