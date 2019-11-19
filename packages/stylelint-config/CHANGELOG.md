# [@bigpopakap/stylelint-config-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-@bigpopakap/stylelint-config...v1.0.1-@bigpopakap/stylelint-config) (2019-11-19)


### Bug Fixes

* **deps:** update yargs to v15.0.2 ([af3192a](https://github.com/bigpopakap/shared-node-tools/commit/af3192a8ee09c400c44f99ed08aed651e7f52e75))

# @bigpopakap/stylelint-config-v1.0.0 (2019-11-17)


### Bug Fixes

* push all package versions to 3 ([37328a9](https://github.com/bigpopakap/shared-node-tools/commit/37328a94edebcfb953953a1af7698ddabff7eb4b))
* reset versions for renovate and stylelint config to fix publishing ([9282af4](https://github.com/bigpopakap/shared-node-tools/commit/9282af4b56d0c08b0ca064cede1d82cce9dcfcc8))
* undo all Github Package versions and start over ([4c91ccc](https://github.com/bigpopakap/shared-node-tools/commit/4c91cccdfade1579329743ce4e2cdf6854d2eb51))
* **readme:** update readme ([10bac1c](https://github.com/bigpopakap/shared-node-tools/commit/10bac1c4ef35603f9ee30be0af283e28f61b7749))
* update README with instrutions to authenticate Github Packages ([bcde299](https://github.com/bigpopakap/shared-node-tools/commit/bcde2999bc008daf6f62833ea42a5edf4e76dd88))
* **deps:** update stylelint to v12 ([6bd1bd3](https://github.com/bigpopakap/shared-node-tools/commit/6bd1bd3d5795fbc610da20d3324521f612c71bfc))
* **deps:** update yargs to v15 ([1ab40e9](https://github.com/bigpopakap/shared-node-tools/commit/1ab40e94f2cbe0f2f5446f85be8e3f2d362573b8))
* remove the "base" config export ([a394c04](https://github.com/bigpopakap/shared-node-tools/commit/a394c04c57d170d7335307e8184220c8324dd6b6))


### Features

* enable eslint-plugin-eslint-comments rules ([953a1b8](https://github.com/bigpopakap/shared-node-tools/commit/953a1b8d5a280b4979a248abf62528f50f579fcb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-node ([526b27d](https://github.com/bigpopakap/shared-node-tools/commit/526b27d92176414a9024b2d715b75c108f1b366f)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* publish to Github Packages ([14242d1](https://github.com/bigpopakap/shared-node-tools/commit/14242d1dcdd4e17571cd80713979e971dd855389)), closes [#86](https://github.com/bigpopakap/shared-node-tools/issues/86)


### BREAKING CHANGES

* There are many rules enabled from here, which you may need to fix:
https://www.npmjs.com/package/eslint-plugin-node
* You may have to fix some of the rules related to improper use of eslint-disable
comments, described here: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
* You will no longer be able to import the /base configuration directly. Use one of
the environment-specific flavors instead.
* This package is now being published to Github Packages. You should update your
.eslintrc file with the updated name of the package to extend from (described int he updated README)
