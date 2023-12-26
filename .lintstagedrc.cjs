module.exports = {
  '*.{js,jsx,cjs,json,md,mjs,ts,tsx,yml}': 'prettier --write',
  '**/*.{js,cjs,msj,jsx,ts,tsx}': 'eslint --cache --fix',
  '**/*.css': 'stylelint --fix',
}
