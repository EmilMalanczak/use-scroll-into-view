module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react-hooks", "@typescript-eslint", "prettier", "react"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-wrap-multilines": [
      1,
      {
        assignment: "parens-new-line",
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": ["off"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/extensions": "off",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      1,
      {
        groups: [
          ["external", "builtin"],
          "type",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            pattern:
              "components|hooks|helpers|utils|store|types|constants|contexts|api",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
    "arrow-parens": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        consistent: true,
        multiline: true,
      },
    ],
    "no-case-declarations": "off",
    "no-control-regex": "off",
    "implicit-arrow-linebreak": "off",
    semi: "off",
    "quote-props": [2, "as-needed"],
    "comma-dangle": "off",
    "linebreak-style": "off",
    "function-paren-newline": "off",
    indent: "off",
    "no-undef": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
