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
const args = yargs
  .array('ext')
  .default('ext', ['json', 'js', 'jsx', 'ts', 'd.ts', 'tsx'])
  .boolean('fix')
  .default('fix', false).argv;

// Prepare the arguments to pass to eslint
const extOut = `--ext ${args.ext.join(',')}`;
const fixOut = args.fix ? '--fix' : '';
const fileOut = './';

shell.exec(`yarn eslint ${extOut} ${fixOut} ${fileOut}`);
