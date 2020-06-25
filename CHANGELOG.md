# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.13.2] - 2020-06-25
### Fixed
- Default workspace url is '/lab' not '/lab/workspaces/lab'

## [0.13.1] - 2020-06-22
### Fixed
- Gitlab CI so that it gets pushed to dev automatically

## [0.13.0] - 2020-06-22
### Fixed
- A bug Safari users run into that complains about the workspace being already in use.
  Though this bug actuall applies to Pitzer and not the older Owens version.

### Changed
- The JupyterLab versions available. Previously only 1 version was available (0.34). Now
  users can choose between version 0.36, 1.2 and 2.1.  And all work correctly.
- Changed the workspaces directory to accomidate Safari users.

## [0.12.1] - 2020-01-27
### Fixed
- CI now clones instead of fetches due to errors like 'fatal: git fetch-pack: expected shallow list'

## [0.12.0] - 2020-01-24
### Changed
- Updated IJulia kernel 1.0 (1.0.5), and added 1.3 (1.3.1).

## [0.11.2] - 2019-11-13
### Fixed
- Fixes Apache timeout [#31](https://github.com/OSC/bc_osc_jupyter/issues/31)

## [0.11.1] - 2019-11-05
### Changed
- Removed static kernel for Julia 1.0.0

## [0.11.0] - 2019-11-05
### Changed
- When a user has an IJulia installation that installation is used to generate a kernel.json file in the BC session share dir

## [0.10.3] - 2019-10-31
### Changed
- Updated IJulia 1.0.0 kernel

## [0.10.2] - 2019-07-15
### Changed
- Updated where xalt is loaded

## [0.10.1] - 2019-07-09
### Added
- Added xalt

## [0.10.0] - 2019-04-23
### Added
- Option to launch JupyterLab instead of Jupyter Notebook
- Option to specify version of Jupyter/JupyterLab module in `form.yml`
- Add form.js to sync node type selection with options for core count and cuda
  options

## [0.9.0] - 2018-09-20
### Added
- Added kernel for Python 2.7 from Conda 5.2

## [0.8.0] - 2018-08-24
### Added
- Add IJulia kernel for Julia 0.6.4

## [0.7.0] - 2018-08-14
### Added
- Add IJulia kernel for Julia 1.0

## [0.6.2] - 2018-04-27
### Changed
- Namespace Conda environment kernel paths to avoid collision with module
  environment kernels.
- Only attempt to install package if it doesn't exist to speed up launch
  process.

### Fixed
- *Hopefully* fixed race condition when downloading packages.

## [0.6.1] - 2018-04-26
### Changed
- Added timing information in output logs and increased timeout to 10 minutes.

### Fixed
- Fixed issue with Conda environments not being loaded properly.

## [0.6.0] - 2018-04-17
### Added
- Added debug queue as an option.
- Users can now specify number of cores on the node.

### Changed
- Changed server timeout to 120 seconds to account for running on shared node.

## [0.5.0] - 2018-03-28
### Added
- Added support for user-created Conda environments.

### Changed
- Use custom Jupyter Notebook module provided by SciApps.

## [0.4.1] - 2018-03-06
### Changed
- Output more debug info.

## [0.4.0] - 2018-03-06
### Added
- Added the various Python modules on OSC Owens as Jupyter kernels.
- Added the Julia module on OSC Owens as a Jupyter kernel.

### Changed
- Updated date in `LICENSE.md`.
- Renamed Account to Project.
- Changed favicon to cogs.
- Changed the way we launch Jupyter notebook by now pointing to a custom
  location for the Jupyter notebook installation.
- Stopped using login shells to speed up process start times.

## [0.3.0] - 2017-12-07
### Added
- Added helpful links in the app description and node type description.
  [#17](https://github.com/OSC/bc_osc_jupyter/issues/17)

### Changed
- Updated links in `README.md` to point to correct locations.
  [#15](https://github.com/OSC/bc_osc_jupyter/issues/15)
- Made log file more verbose.

### Fixed
- Fixed some text formatting issues.
  [#16](https://github.com/OSC/bc_osc_jupyter/issues/16)
- Removed references to RStudio.
  [#14](https://github.com/OSC/bc_osc_jupyter/issues/14)

## [0.2.1] - 2017-10-20
### Changed
- Moved the account input field to the top of the form.

### Fixed
- Removed need for message to user about waiting for server to start.
  [#13](https://github.com/OSC/bc_osc_jupyter/issues/13)

## [0.2.0] - 2017-10-11
### Changed
- Modified app to take advantage of ERB templates in updated Dashboard.
- Changed the `CHANGELOG.md` formatting.

## [0.1.0] - 2017-06-14
### Changed
- Refactored for the new Batch Connect app.

## [0.0.5] - 2017-05-18
### Fixed
- Disable XSRF protection that broke VNCSim auto-login capabilities.

## [0.0.4] - 2017-05-11
### Added
- Added CUDA support to Jupyter through a separate sub-app.

## [0.0.3] - 2017-04-24
### Removed
- Versioning the assets removed need for `bin/setup`.

## [0.0.2] - 2017-04-21
### Added
- Added `bin/setup` script for easier deployment.

## 0.0.1 - 2017-04-04
### Added
- Initial release!

[Unreleased]: https://github.com/OSC/bc_osc_jupyter/compare/v0.13.2...HEAD
[0.13.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.13.1...v0.13.2
[0.13.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.12.1...v0.13.0
[0.12.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.11.1...v0.12.0
[0.11.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.10.3...v0.11.0
[0.10.3]: https://github.com/OSC/bc_osc_jupyter/compare/v0.10.2...v0.10.3
[0.10.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.0.5...v0.1.0
[0.0.5]: https://github.com/OSC/bc_osc_jupyter/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/OSC/bc_osc_jupyter/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/OSC/bc_osc_jupyter/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.0.1...v0.0.2
