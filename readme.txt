# 1. プロジェクトディレクトリを作成
mkdir next-app
cd next-app

# 2. Next.js プロジェクトを作成（TypeScript）
npx create-next-app@latest app --typescript

# 3. Next.js を明示的にインストール
cd app
npm install next

# 4. MUI (Material-UI) のインストール
npm install @mui/material @emotion/react @emotion/styled

# 5. MUI Icons のインストール
npm install @mui/icons-material

# 6. ESLint & Prettier のインストール
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

# 7. 一括で ESLint & Prettier の設定ファイルを移動
mv ../conf/* ./

# 8. 共通パーツをセット
mv ../src ./

