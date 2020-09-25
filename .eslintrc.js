module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-unused-components": 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'no-unused-vars': 'warn'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
