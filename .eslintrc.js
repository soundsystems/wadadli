module.exports = {
  "env": {
    browser: true,
    es2021: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:react/jsx-runtime",
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": ["react", "@typescript-eslint", "tailwindcss"],
  "rules": {
    "tailwindcss/no-custom-classname": "off",
    "no-undef": "off",
    "prefer-const": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
};
