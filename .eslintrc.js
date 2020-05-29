module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "plugins": ["react"],
  "env": {
    "browser": true
  },
  "globals": { "_": true },
  "rules": {
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "max-len": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off"
  },
  "overrides": [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.test.js",
        "**/*.test.jsx",
      ],
      "env": {
        "jest": true
      }
    }
  ]
};