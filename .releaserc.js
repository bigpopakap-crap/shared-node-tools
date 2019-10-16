const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();

module.exports = {
  extends: 'semantic-release-monorepo',
  branch: 'master',

  /**
   * NOTE: v{version} should not be interpolated here, because it will be interpolated
   *       at runtime when the version is known
   *
   * IMPORTANT! be ultra careful updating the tag format! this will break semantic-release
   *            because it won't know what the previously published version was
   */
  tagFormat: `v\${version\}-${output.package}`,

  monorepo: {
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateNotes: [
      '@semantic-release/release-notes-generator'
    ]
  },
  verifyConditions: [
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      'path': '@semantic-release/git',
      'message': 'chore(' + output.package + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  publish: [
    '@semantic-release/npm'
  ]
};
