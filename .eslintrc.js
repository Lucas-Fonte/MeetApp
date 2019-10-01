module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true

  },
  extends: [
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".json"] }],
    "class-methods-use-this": "off",
    "react/jsx-indent": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-param-reassing" : "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],

  },
  settings: {
      "import/resolver": {
          "babel-plugin-root-import": {
              rootPathSuffix: "src"
          }
      }
  }
};
