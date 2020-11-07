#!/usr/bin/env node
/**
 * @fileoverview This simply delegates to eslint
 * @author bigpopakap
 */
'use strict';

const yargs = require('yargs');
const { lint } = require('stylelint');

const FILE_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx', 'scss', 'css', 'sass'];

// Parse the command line arguments
const args = yargs.boolean('fix').default('fix', false).argv;

(async () => {
  const result = await lint({
    fix: args.fix,
    files: FILE_EXTENSIONS.map((ext) => `**/*.${ext}`),
    formatter: 'string',
  });

  if (result.errored) {
    throw new Error(result.output);
  }
})();
