module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'grouped-import'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    'react-refresh/only-export-components': 'warn',
    'grouped-import/group': [
      'warn',
      {
        Packages: [{ path: 'react' }, { path: 'date-fns' }, { path: 'vite' }],
        Components: [{ path: 'components' }],
        Icons: [{ path: 'phosphor-react' }],
        Styles: [{ path: 'styles' }, { path: '.css' }],
        Assets: [
          { path: 'assets' },
          { path: '.png' },
          { path: '.svg' },
          { path: '.jpg' },
          { path: '.ttf' },
        ],
      },
    ],
  },
};
