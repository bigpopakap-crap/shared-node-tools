#!/usr/bin/env node
/**
 * @fileoverview This simply delegates to eslint
 * @author bigpopakap
 */
'use strict';

const shell = require('shelljs');
const yargs = require('yargs');

// Exit if there is no yarn installed
if (!shell.which('yarn')) {
  shell.echo('yarn not installed');
  shell.exit(1);
}

// Parse the command line arguments
const args = yargs.boolean('fix').default('fix', false).argv;

// Prepare the arguments to pass to eslint
const extArg = `--ext json,js,jsx,ts,d.ts,tsx`;
const fixArg = args.fix ? '--fix' : '';
const pathArg = '.';

const lintResult = shell.exec(`yarn eslint ${extArg} ${fixArg} ${pathArg}`);
if (lintResult.code !== 0) {
  throw new Error('eslint found errors. See above output for details.');
}
