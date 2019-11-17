# [@bigpopakap/eslint-config-v2.0.2](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.1-@bigpopakap/eslint-config...v2.0.2-@bigpopakap/eslint-config) (2019-11-17)


### Bug Fixes

* **readme:** update readme ([10bac1c](https://github.com/bigpopakap/shared-node-tools/commit/10bac1c4ef35603f9ee30be0af283e28f61b7749))
* update README with instrutions to authenticate Github Packages ([bcde299](https://github.com/bigpopakap/shared-node-tools/commit/bcde2999bc008daf6f62833ea42a5edf4e76dd88))
* **deps:** update eslint-config-prettier to v6.6.0 ([71c18a2](https://github.com/bigpopakap/shared-node-tools/commit/71c18a2512197910bb4b2f46836da4c9174012e3))
* **deps:** update yargs to v15 ([1ab40e9](https://github.com/bigpopakap/shared-node-tools/commit/1ab40e94f2cbe0f2f5446f85be8e3f2d362573b8))

# [@bigpopakap/eslint-config-v2.0.2](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.1-@bigpopakap/eslint-config...v2.0.2-@bigpopakap/eslint-config) (2019-11-16)


### Bug Fixes

* **deps:** update yargs to v15 ([1ab40e9](https://github.com/bigpopakap/shared-node-tools/commit/1ab40e94f2cbe0f2f5446f85be8e3f2d362573b8))

# [@bigpopakap/eslint-config-v2.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.0-@bigpopakap/eslint-config...v2.0.1-@bigpopakap/eslint-config) (2019-11-16)


### Bug Fixes

* **deps:** update eslint-plugin-react-hooks to v2.3.0 ([072ccbd](https://github.com/bigpopakap/shared-node-tools/commit/072ccbdd3858ef96ccb4d60be69d6d8c1e5f0771))

# [@bigpopakap/eslint-config-v2.0.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-@bigpopakap/eslint-config...v2.0.0-@bigpopakap/eslint-config) (2019-11-15)


### Features

* enable eslint-plugin-eslint-comments rules ([953a1b8](https://github.com/bigpopakap/shared-node-tools/commit/953a1b8d5a280b4979a248abf62528f50f579fcb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-filenames ([d4e692c](https://github.com/bigpopakap/shared-node-tools/commit/d4e692c07387d3ad8c49e02a4ab83e5d66e518ce)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-node ([526b27d](https://github.com/bigpopakap/shared-node-tools/commit/526b27d92176414a9024b2d715b75c108f1b366f)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable more import rules as errors ([d062740](https://github.com/bigpopakap/shared-node-tools/commit/d06274030b251bddda1696246229d1988f7332cb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)


### BREAKING CHANGES

* There are many rules enabled from here, which you may need to fix:
https://www.npmjs.com/package/eslint-plugin-node
* You may have to fix the following rules: import/no-self-import and import/no-cycle.
See https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
* You may need to rename your files and default exports. We enforce kebab-cased
filenames, and default exports that match (once converted to kebab case).
See https://www.npmjs.com/package/eslint-plugin-filenames for more info.
* You may have to fix some of the rules related to improper use of eslint-disable
comments, described here: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/

# @bigpopakap/eslint-config-v1.0.0 (2019-11-15)


### Bug Fixes

* remove the "base" config export ([a394c04](https://github.com/bigpopakap/shared-node-tools/commit/a394c04c57d170d7335307e8184220c8324dd6b6))


### Features

* publish to Github Packages ([3863fc0](https://github.com/bigpopakap/shared-node-tools/commit/3863fc02e8d9a1258816975d453a438c1d64f0f1)), closes [#86](https://github.com/bigpopakap/shared-node-tools/issues/86)


### BREAKING CHANGES

* You will no longer be able to import the /base configuration directly. Use one of
the environment-specific flavors instead.
* This package is now being published to Github Packages. You should update your
.eslintrc file with the updated name of the package to extend from (described int he updated README)

# [eslint-config-bigpopakap-v2.0.3](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.2-eslint-config-bigpopakap...v2.0.3-eslint-config-bigpopakap) (2019-11-14)


### Bug Fixes

* rename repo references ([3b5167b](https://github.com/bigpopakap/shared-node-tools/commit/3b5167be93b0908387009e3423191267d95c6860)), closes [#59](https://github.com/bigpopakap/shared-node-tools/issues/59)

# [eslint-config-bigpopakap-v2.0.2](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.1-eslint-config-bigpopakap...v2.0.2-eslint-config-bigpopakap) (2019-11-13)


### Bug Fixes

* **react-app:** fix missing dependencies in bigpopakap/react config ([8c2d586](https://github.com/bigpopakap/shared-node-tools/commit/8c2d5862a668870a12412e0c5b940fce750d788c))

# [eslint-config-bigpopakap-v2.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.0-eslint-config-bigpopakap...v2.0.1-eslint-config-bigpopakap) (2019-11-11)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v2.7.0 ([2b81d9b](https://github.com/bigpopakap/shared-node-tools/commit/2b81d9b74a57a6bdbe7df6e8a539276471ca05fc))

# [eslint-config-bigpopakap-v2.0.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.4-eslint-config-bigpopakap...v2.0.0-eslint-config-bigpopakap) (2019-11-11)


### Features

* add async/await rules as errors ([836b14f](https://github.com/bigpopakap/shared-node-tools/commit/836b14fcd2d4a1021382255002d0c48e46f413f4)), closes [#72](https://github.com/bigpopakap/shared-node-tools/issues/72)
* add eslint-plugin-absolute-import ([a89009e](https://github.com/bigpopakap/shared-node-tools/commit/a89009e4dec182c91079ffb8068f4a0f5cb139c7))
* add node specification for bigpopakap/node ([93eb786](https://github.com/bigpopakap/shared-node-tools/commit/93eb78673de214a76ee8330a9378ed7bc11362bf))
* extend eslint:recommended rules ([2ab0c86](https://github.com/bigpopakap/shared-node-tools/commit/2ab0c86c2a1fe05b29f328f1c2a1323451d800cd))


### BREAKING CHANGES

* You may have errors for the following rules: no-await-in-loop, no-return-await and
require-await
* We now extend eslint:recommended. You may have errors and warnings to fix. See
https://eslint.org/docs/rules/
* Added the following rules as errors (you may need to fix them):
absolute-import/no-relative-path and  absolute-import/no-unresolved. See
https://github.com/mcclowes/eslint-plugin-absolute-import

# [eslint-config-bigpopakap-v1.2.4](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.3-eslint-config-bigpopakap...v1.2.4-eslint-config-bigpopakap) (2019-11-09)


### Bug Fixes

* **deps:** update prettier to v1.19.1 ([942eb9d](https://github.com/bigpopakap/shared-node-tools/commit/942eb9d87cb4412a8ae2c35f83c5723fcf54d0d7))

# [eslint-config-bigpopakap-v1.2.3](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.2-eslint-config-bigpopakap...v1.2.3-eslint-config-bigpopakap) (2019-11-09)


### Bug Fixes

* **deps:** add eslint-plugin-react ([15f5abb](https://github.com/bigpopakap/shared-node-tools/commit/15f5abb262c8edb0d0ba3778b2226be7b4c65928))

# [eslint-config-bigpopakap-v1.2.2](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.1-eslint-config-bigpopakap...v1.2.2-eslint-config-bigpopakap) (2019-11-09)


### Bug Fixes

* **bin-scripts:** revert previous commits ([65261c3](https://github.com/bigpopakap/shared-node-tools/commit/65261c350e4886a39ba35092ea561ff233e383e5)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)

# [eslint-config-bigpopakap-v1.2.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.0-eslint-config-bigpopakap...v1.2.1-eslint-config-bigpopakap) (2019-11-09)


### Bug Fixes

* **deps:** update prettier to v1.19.0 ([422671d](https://github.com/bigpopakap/shared-node-tools/commit/422671d97a058c150ca01e0aef7034315b69fd4e))

# [eslint-config-bigpopakap-v1.2.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.8-eslint-config-bigpopakap...v1.2.0-eslint-config-bigpopakap) (2019-11-09)


### Features

* **bin-script:** don't specify file extensions to eslint ([248ae39](https://github.com/bigpopakap/shared-node-tools/commit/248ae39d718f05e2e3787c7a5fe3cc0bb34f5a68)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)
* **bin-scripts:** run in current dir, add more file exts ([4ea7a77](https://github.com/bigpopakap/shared-node-tools/commit/4ea7a775d42305def5db43e91adaf7b73f640759)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)

# [eslint-config-bigpopakap-v1.1.8](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.7-eslint-config-bigpopakap...v1.1.8-eslint-config-bigpopakap) (2019-11-05)


### Bug Fixes

* **deps:** update typescript to v3.7.2 ([5449189](https://github.com/bigpopakap/shared-node-tools/commit/5449189be1a7ac25bc404c6e955d8e9c5ba717ed))

# [eslint-config-bigpopakap-v1.1.7](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.6-eslint-config-bigpopakap...v1.1.7-eslint-config-bigpopakap) (2019-11-04)


### Bug Fixes

* **ci:** fix autopublishing ([25b5002](https://github.com/bigpopakap/shared-node-tools/commit/25b50021f284aaae64579632a02fe26815d6b49a)), closes [#56](https://github.com/bigpopakap/shared-node-tools/issues/56)
* **package.json:** update repo link to point to subdirectories ([5ee5a6a](https://github.com/bigpopakap/shared-node-tools/commit/5ee5a6acad3345ab6d3f108a45e3f3ba2d844f49))

# [eslint-config-bigpopakap-v1.1.6](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.5-eslint-config-bigpopakap...v1.1.6-eslint-config-bigpopakap) (2019-11-04)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v2.6.1 ([22a53f5](https://github.com/bigpopakap/shared-node-tools/commit/22a53f59001da7e34941e559c4b68a49c3d18df8))

# [eslint-config-bigpopakap-v1.1.5](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.4-eslint-config-bigpopakap...v1.1.5-eslint-config-bigpopakap) (2019-10-28)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v2.6.0 ([9e382d6](https://github.com/bigpopakap/shared-node-tools/commit/9e382d657525cdaedf7f7af751c7da6b43aa6b37))

# [eslint-config-bigpopakap-v1.1.4](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.3-eslint-config-bigpopakap...v1.1.4-eslint-config-bigpopakap) (2019-10-26)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v6.5.0 ([2909de4](https://github.com/bigpopakap/shared-node-tools/commit/2909de488ac72310a3b7a882f0519c0dbbebea11))

# [eslint-config-bigpopakap-v1.1.3](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.2-eslint-config-bigpopakap...v1.1.3-eslint-config-bigpopakap) (2019-10-25)


### Bug Fixes

* **deps:** update dependency eslint to v6.6.0 ([e01b3fb](https://github.com/bigpopakap/shared-node-tools/commit/e01b3fbbf7f53f6d03300ed34651b7572aa4ade4))

# [eslint-config-bigpopakap-v1.1.2](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.1-eslint-config-bigpopakap...v1.1.2-eslint-config-bigpopakap) (2019-10-23)


### Bug Fixes

* **deps:** update dependency eslint-plugin-json to v2 ([1277834](https://github.com/bigpopakap/shared-node-tools/commit/12778348775cd7e30738733ee901d79aaeca1f37))

# [eslint-config-bigpopakap-v1.1.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.0-eslint-config-bigpopakap...v1.1.1-eslint-config-bigpopakap) (2019-10-21)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v2.5.0 ([a3a6961](https://github.com/bigpopakap/shared-node-tools/commit/a3a69611a9ff93eba2de34d3ff397711a8560592))

# [eslint-config-bigpopakap-v1.1.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.2-eslint-config-bigpopakap...v1.1.0-eslint-config-bigpopakap) (2019-10-18)


### Bug Fixes

* harcode the --ext option ([3d8b4bb](https://github.com/bigpopakap/shared-node-tools/commit/3d8b4bb1594363f17fed03b1af515e966eb82d79))


### Features

* add executable script ([d0abd52](https://github.com/bigpopakap/shared-node-tools/commit/d0abd526d6181f658f48b6f757128cbab8532333)), closes [#27](https://github.com/bigpopakap/shared-node-tools/issues/27)

# [eslint-config-bigpopakap-v1.0.2](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.1-eslint-config-bigpopakap...v1.0.2-eslint-config-bigpopakap) (2019-10-16)


### Bug Fixes

* **readme:** update title ([3e27fe8](https://github.com/bigpopakap/shared-node-tools/commit/3e27fe8b5309b70839954453a314ff0636fb2b9b))

# [eslint-config-bigpopakap-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-eslint-config-bigpopakap...v1.0.1-eslint-config-bigpopakap) (2019-10-16)


### Bug Fixes

* **package.json:** update description ([71d7b7e](https://github.com/bigpopakap/shared-node-tools/commit/71d7b7e0acf5be7b49a64c53616d634dc157f056))
* **readme:** update package description ([b6968c8](https://github.com/bigpopakap/shared-node-tools/commit/b6968c8f603420720dea88037048677faf169073))

# eslint-config-bigpopakap-v1.0.0 (2019-10-16)


### Bug Fixes

* **autopublish:** try fixing autopublishing of multiple packages ([336a64c](https://github.com/bigpopakap/shared-node-tools/commit/336a64ce5946173ad9b251c8c5d0423f263f1fba))
* **autopublish:** try moving releaserc plugins into each package ([4c98eda](https://github.com/bigpopakap/shared-node-tools/commit/4c98edadfa18f51780d80bab2da772b3ca2c11f5))
* **autopublish:** trying to fix semantic-release ([a76b056](https://github.com/bigpopakap/shared-node-tools/commit/a76b056eb31129208e6a193dc4bdcdb9b490eb93))
* **autopublish:** undo recent changes to add plugins to packages ([2815e7a](https://github.com/bigpopakap/shared-node-tools/commit/2815e7a82fc17dc4d07c33a709ab9d92d258d2f3))
* **deps:** add missing required peerDependencies ([4609d6b](https://github.com/bigpopakap/shared-node-tools/commit/4609d6bc3899c55f0a647939679b9063c7180e9c))


### Features

* **rules:** set @typescript-eslint/no-unused-vars to error ([960984c](https://github.com/bigpopakap/shared-node-tools/commit/960984c00a98f5e02aa196ca00531fe0c23d412a))
* **version:** publish 1.0.0 version ([c55d8e7](https://github.com/bigpopakap/shared-node-tools/commit/c55d8e7276a994240eb95deacb06a1702f03f1d1))


### BREAKING CHANGES

* **rules:** @typescript-eslint/no-unused-vars is now an error

# eslint-config-bigpopakap-v1.0.0 (2019-10-16)


### Bug Fixes

* **autopublish:** try fixing autopublishing of multiple packages ([336a64c](https://github.com/bigpopakap/shared-node-tools/commit/336a64ce5946173ad9b251c8c5d0423f263f1fba))
* **autopublish:** try moving releaserc plugins into each package ([4c98eda](https://github.com/bigpopakap/shared-node-tools/commit/4c98edadfa18f51780d80bab2da772b3ca2c11f5))
* **autopublish:** trying to fix semantic-release ([a76b056](https://github.com/bigpopakap/shared-node-tools/commit/a76b056eb31129208e6a193dc4bdcdb9b490eb93))
* **autopublish:** undo recent changes to add plugins to packages ([2815e7a](https://github.com/bigpopakap/shared-node-tools/commit/2815e7a82fc17dc4d07c33a709ab9d92d258d2f3))
* **deps:** add missing required peerDependencies ([4609d6b](https://github.com/bigpopakap/shared-node-tools/commit/4609d6bc3899c55f0a647939679b9063c7180e9c))


### Features

* **rules:** set @typescript-eslint/no-unused-vars to error ([960984c](https://github.com/bigpopakap/shared-node-tools/commit/960984c00a98f5e02aa196ca00531fe0c23d412a))
* **version:** publish 1.0.0 version ([c55d8e7](https://github.com/bigpopakap/shared-node-tools/commit/c55d8e7276a994240eb95deacb06a1702f03f1d1))


### BREAKING CHANGES

* **rules:** @typescript-eslint/no-unused-vars is now an error

# [eslint-config-bigpopakap-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0...v1.0.1) (2019-10-16)


### Bug Fixes

* **deps:** add missing required peerDependencies ([4609d6b](https://github.com/bigpopakap/shared-node-tools/commit/4609d6bc3899c55f0a647939679b9063c7180e9c))

# eslint-config-bigpopakap-v1.0.0 (2019-10-16)


### Bug Fixes

* **autopublish:** try fixing autopublishing of multiple packages ([336a64c](https://github.com/bigpopakap/shared-node-tools/commit/336a64ce5946173ad9b251c8c5d0423f263f1fba))
* **autopublish:** try moving releaserc plugins into each package ([4c98eda](https://github.com/bigpopakap/shared-node-tools/commit/4c98edadfa18f51780d80bab2da772b3ca2c11f5))
* **autopublish:** trying to fix semantic-release ([a76b056](https://github.com/bigpopakap/shared-node-tools/commit/a76b056eb31129208e6a193dc4bdcdb9b490eb93))
* **autopublish:** undo recent changes to add plugins to packages ([2815e7a](https://github.com/bigpopakap/shared-node-tools/commit/2815e7a82fc17dc4d07c33a709ab9d92d258d2f3))


### Features

* **rules:** set @typescript-eslint/no-unused-vars to error ([960984c](https://github.com/bigpopakap/shared-node-tools/commit/960984c00a98f5e02aa196ca00531fe0c23d412a))
* **version:** publish 1.0.0 version ([c55d8e7](https://github.com/bigpopakap/shared-node-tools/commit/c55d8e7276a994240eb95deacb06a1702f03f1d1))


### BREAKING CHANGES

* **rules:** @typescript-eslint/no-unused-vars is now an error
