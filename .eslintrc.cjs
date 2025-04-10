module.exports = {
    extends: ["react-app", "prettier"],
    plugins: ["prettier", "react-hooks"],
    rules: {
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  };