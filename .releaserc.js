const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();

module.exports = {
  extends: 'semantic-release-monorepo',
  branch: 'master',
  tagFormat: 'v${version}',
  monorepo: {
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateNotes: [
      '@semantic-release/release-notes-generator'
    ]
  },
  verifyConditions: [
    // '@semantic-release/npm',
    '@semantic-release/git'
  ],
  prepare: [
    '@semantic-release/changelog',
    // '@semantic-release/npm',
    {
      'path': '@semantic-release/git',
      'message': 'chore(' + output.package + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  publish: [
    // '@semantic-release/npm'
  ]
};
