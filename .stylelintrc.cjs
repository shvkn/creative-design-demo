const propertyGroups = require('stylelint-config-recess-order/groups')
/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'order/properties-order': propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
    })),
  },
}

module.exports = config
