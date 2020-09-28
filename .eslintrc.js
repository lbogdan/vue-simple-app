function disableInDevelopment(rules) {
  return rules.reduce((acc, rule) => {
    // warn in development, error in production
    // to completely disable in development, use 'off' instead of 'warn'
    acc[rule] = process.env.NODE_ENV === 'production' ? 'error' : 'warn';
    return acc;
  }, {});
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // add other annoying rules to the array
    ...disableInDevelopment(['no-console', 'no-debugger', 'no-unused-vars']),
    // other custom rules here
  },
};
