# [@bigpopakap/stylelint-config-v2.0.2](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.1-@bigpopakap/stylelint-config...v2.0.2-@bigpopakap/stylelint-config) (2019-11-17)


### Bug Fixes

* **deps:** update stylelint to v12 ([6bd1bd3](https://github.com/bigpopakap/shared-node-tools/commit/6bd1bd3d5795fbc610da20d3324521f612c71bfc))

# [@bigpopakap/stylelint-config-v2.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v2.0.0-@bigpopakap/stylelint-config...v2.0.1-@bigpopakap/stylelint-config) (2019-11-17)


### Bug Fixes

* **deps:** update yargs to v15 ([1ab40e9](https://github.com/bigpopakap/shared-node-tools/commit/1ab40e94f2cbe0f2f5446f85be8e3f2d362573b8))

# [@bigpopakap/stylelint-config-v2.0.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-@bigpopakap/stylelint-config...v2.0.0-@bigpopakap/stylelint-config) (2019-11-15)


### Features

* enable eslint-plugin-eslint-comments rules ([953a1b8](https://github.com/bigpopakap/shared-node-tools/commit/953a1b8d5a280b4979a248abf62528f50f579fcb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-node ([526b27d](https://github.com/bigpopakap/shared-node-tools/commit/526b27d92176414a9024b2d715b75c108f1b366f)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)


### BREAKING CHANGES

* There are many rules enabled from here, which you may need to fix:
https://www.npmjs.com/package/eslint-plugin-node
* You may have to fix some of the rules related to improper use of eslint-disable
comments, described here: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/

# @bigpopakap/stylelint-config-v1.0.0 (2019-11-15)


### Bug Fixes

* remove the "base" config export ([a394c04](https://github.com/bigpopakap/shared-node-tools/commit/a394c04c57d170d7335307e8184220c8324dd6b6))


### Features

* publish to Github Packages ([14242d1](https://github.com/bigpopakap/shared-node-tools/commit/14242d1dcdd4e17571cd80713979e971dd855389)), closes [#86](https://github.com/bigpopakap/shared-node-tools/issues/86)


### BREAKING CHANGES

* You will no longer be able to import the /base configuration directly. Use one of
the environment-specific flavors instead.
* This package is now being published to Github Packages. You should update your
.eslintrc file with the updated name of the package to extend from (described int he updated README)

# [stylelint-config-bigpopakap-v1.2.2](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.1-stylelint-config-bigpopakap...v1.2.2-stylelint-config-bigpopakap) (2019-11-14)


### Bug Fixes

* rename repo references ([3b5167b](https://github.com/bigpopakap/shared-node-tools/commit/3b5167be93b0908387009e3423191267d95c6860)), closes [#59](https://github.com/bigpopakap/shared-node-tools/issues/59)

# [stylelint-config-bigpopakap-v1.2.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.2.0-stylelint-config-bigpopakap...v1.2.1-stylelint-config-bigpopakap) (2019-11-09)


### Bug Fixes

* **bin-scripts:** revert previous commits ([65261c3](https://github.com/bigpopakap/shared-node-tools/commit/65261c350e4886a39ba35092ea561ff233e383e5)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)

# [stylelint-config-bigpopakap-v1.2.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.1-stylelint-config-bigpopakap...v1.2.0-stylelint-config-bigpopakap) (2019-11-09)


### Features

* **bin-script:** don't specify file extensions to stylelint ([077db7d](https://github.com/bigpopakap/shared-node-tools/commit/077db7dd59dcddea9ec3068aad26bacb98f47179)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)
* **bin-scripts:** run in current dir, add more file exts ([4ea7a77](https://github.com/bigpopakap/shared-node-tools/commit/4ea7a775d42305def5db43e91adaf7b73f640759)), closes [#60](https://github.com/bigpopakap/shared-node-tools/issues/60)

# [stylelint-config-bigpopakap-v1.1.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.1.0-stylelint-config-bigpopakap...v1.1.1-stylelint-config-bigpopakap) (2019-11-04)


### Bug Fixes

* **ci:** fix autopublishing ([25b5002](https://github.com/bigpopakap/shared-node-tools/commit/25b50021f284aaae64579632a02fe26815d6b49a)), closes [#56](https://github.com/bigpopakap/shared-node-tools/issues/56)
* **package.json:** update repo link to point to subdirectories ([5ee5a6a](https://github.com/bigpopakap/shared-node-tools/commit/5ee5a6acad3345ab6d3f108a45e3f3ba2d844f49))

# [stylelint-config-bigpopakap-v1.1.0](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.1-stylelint-config-bigpopakap...v1.1.0-stylelint-config-bigpopakap) (2019-10-18)


### Features

* add binary script for stylelint-config-bigpopakap ([e0fccae](https://github.com/bigpopakap/shared-node-tools/commit/e0fccae77194d2062673118d8b70c2f8bbe70a6d)), closes [#27](https://github.com/bigpopakap/shared-node-tools/issues/27)

# [stylelint-config-bigpopakap-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-stylelint-config-bigpopakap...v1.0.1-stylelint-config-bigpopakap) (2019-10-16)


### Bug Fixes

* **package.json:** update description ([71d7b7e](https://github.com/bigpopakap/shared-node-tools/commit/71d7b7e0acf5be7b49a64c53616d634dc157f056))
* **readme:** update package description ([b6968c8](https://github.com/bigpopakap/shared-node-tools/commit/b6968c8f603420720dea88037048677faf169073))
* **readme:** update title ([3e27fe8](https://github.com/bigpopakap/shared-node-tools/commit/3e27fe8b5309b70839954453a314ff0636fb2b9b))

# stylelint-config-bigpopakap-v1.0.0 (2019-10-16)


### Bug Fixes

* **autopublish:** try fixing autopublishing of multiple packages ([336a64c](https://github.com/bigpopakap/shared-node-tools/commit/336a64ce5946173ad9b251c8c5d0423f263f1fba))
* **autopublish:** try moving releaserc plugins into each package ([4c98eda](https://github.com/bigpopakap/shared-node-tools/commit/4c98edadfa18f51780d80bab2da772b3ca2c11f5))
* **autopublish:** trying to fix semantic-release ([a76b056](https://github.com/bigpopakap/shared-node-tools/commit/a76b056eb31129208e6a193dc4bdcdb9b490eb93))
* **autopublish:** undo recent changes to add plugins to packages ([2815e7a](https://github.com/bigpopakap/shared-node-tools/commit/2815e7a82fc17dc4d07c33a709ab9d92d258d2f3))
* **comments:** add better comments to stylelint rules configs ([237d887](https://github.com/bigpopakap/shared-node-tools/commit/237d887675dde74506594807c2de804fcfd92a39))


### Features

* **version:** publish 1.0.0 version ([f439ed8](https://github.com/bigpopakap/shared-node-tools/commit/f439ed8d2b1cb53237f5918b0507e0920f518e6f))

# stylelint-config-bigpopakap-v1.0.0 (2019-10-16)


### Bug Fixes

* **autopublish:** try fixing autopublishing of multiple packages ([336a64c](https://github.com/bigpopakap/shared-node-tools/commit/336a64ce5946173ad9b251c8c5d0423f263f1fba))
* **autopublish:** try moving releaserc plugins into each package ([4c98eda](https://github.com/bigpopakap/shared-node-tools/commit/4c98edadfa18f51780d80bab2da772b3ca2c11f5))
* **autopublish:** trying to fix semantic-release ([a76b056](https://github.com/bigpopakap/shared-node-tools/commit/a76b056eb31129208e6a193dc4bdcdb9b490eb93))
* **autopublish:** undo recent changes to add plugins to packages ([2815e7a](https://github.com/bigpopakap/shared-node-tools/commit/2815e7a82fc17dc4d07c33a709ab9d92d258d2f3))
* **comments:** add better comments to stylelint rules configs ([237d887](https://github.com/bigpopakap/shared-node-tools/commit/237d887675dde74506594807c2de804fcfd92a39))


### Features

* **version:** publish 1.0.0 version ([f439ed8](https://github.com/bigpopakap/shared-node-tools/commit/f439ed8d2b1cb53237f5918b0507e0920f518e6f))
