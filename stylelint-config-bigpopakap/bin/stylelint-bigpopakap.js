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
const fileOut = 'src/**/*.{js,jsx,ts,tsx}';
const fixOut = args.fix ? '--fix' : '';

shell.exec(`yarn stylelint ${fileOut} ${fixOut}`);
