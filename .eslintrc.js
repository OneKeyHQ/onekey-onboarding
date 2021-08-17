module.exports = {
  extends: [
    
  ],

  overrides: [
    {
      files: ['*.js'],
      extends: [
        
      ],
    },
    {
      files: ['rollup.config.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['src/**/*.ts'],
      env: {
        browser: true,
      },
    },
    {
      files: ['*.ts'],
      extends: [
        
      ],
    },
  ],

  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', 'dist'],
};
