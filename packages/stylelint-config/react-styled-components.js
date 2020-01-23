/**
 * Defines an ordering for CSS properties
 */
const CSS_RULES_ORDERING = [
  [
    // This property group pertains to visibility
    {
      groupName: 'visibility',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['display', 'visibility', 'opacity'],
    },

    // This property group pertains to positioning
    {
      groupName: 'positioning',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['position', 'z-index', 'top', 'left', 'right', 'bottom'],
    },

    // This property group pertains to sizing
    {
      groupName: 'sizing',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: [
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-left',
        'margin-bottom',
        'padding',
        'padding-top',
        'padding-right',
        'padding-left',
        'padding-bottom',
      ],
    },

    // This property group pertains to font
    {
      groupName: 'font',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: [
        'line-height',
        'text-align',
        'vertical-align',
        'font',
        'font-size',
        'font-weight',
        'text-decoration',
      ],
    },

    // This property group pertains to text wrapping
    {
      groupName: 'wrapping',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['overflow', 'overflow-x', 'overflow-y', 'text-overflow', 'whitespace'],
    },

    // This property group pertains to backgrounds
    {
      groupName: 'background',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['background', 'background-color', 'background-position'],
    },

    // This property group pertains to borders
    {
      groupName: 'border',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['border', 'border-width', 'border-radius', 'border-style', 'border-color'],
    },

    // This property group pertains to font color
    {
      groupName: 'font-color',
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
      properties: ['color'],
    },
  ],

  // Everything else goes in its own section at the bottom, ordered alphabetically
  // PRs are welcome particularly for properties that end up being forced into this section,
  //    when they are better fit for one of the sections above, or a completely new section
  {
    unspecified: 'bottomAlphabetical',
    emptyLineBeforeUnspecified: 'always',
  },
];

module.exports = {
  syntax: 'scss',
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  plugins: ['stylelint-order'],
  rules: {
    // CSS properties ordering
    'order/order': ['declarations', 'rules'],
    'order/properties-order': CSS_RULES_ORDERING,
    'declaration-empty-line-before': null, // disable because order/properties-order dictates newline requirements
    'declaration-colon-newline-after': null, // disable because order/properties-order dictates newline requirements
  },
};
