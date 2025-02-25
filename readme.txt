環境構築

mkdir next-app
cd next-app
npx create-next-app@latest app --typescript

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material

npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

#一括で ESLint & Prettier の設定ファイルを作成するコマンド
mkdir -p .vscode && echo '{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}' > .vscode/settings.json

echo '{
  "extends": ["next/core-web-vitals", "eslint:recommended", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off"
  }
}' > .eslintrc.json

echo '{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5",
  "tabWidth": 2
}' > .prettierrc
