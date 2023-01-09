# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.24.0] - 2023-01-09

- Added c18 options back in [106](https://github.com/OSC/bc_osc_jupyter/pull/106).
- Support for partial huge & large mem nodes in [107](https://github.com/OSC/bc_osc_jupyter/pull/107).

## [0.23.4] - 2022-12-08

- Removed c18 options in [105](https://github.com/OSC/bc_osc_jupyter/pull/105).

## [0.23.3] - 2022-10-20

- Added the Ascend cluster in [103](https://github.com/OSC/bc_osc_jupyter/pull/103).
- Updated manifest for ascend in [104](https://github.com/OSC/bc_osc_jupyter/pull/104).

## [0.23.2] - 2022-08-30

### Changed

- Removed "updates since last downtime" message in `info.md.erb` in [100](https://github.com/OSC/bc_osc_jupyter/pull/100).

## [0.23.1] - 2022-06-06

### Fixed

- Do not use deprecated URI#escape in [97](https://github.com/OSC/bc_osc_jupyter/pull/97).

## [0.23.0] - 2022-02-28

### Changed

- Removed all the system defined kernels in [77](https://github.com/OSC/bc_osc_jupyter/pull/77).
- This app now runs on any K8s node in [75](https://github.com/OSC/bc_osc_jupyter/pull/75).


## [0.22.0] - 2021-12-16

**v0.22.0 was released out of a release branch `release-v22` not `master`**.

`release-v22` is essentially master at the time of writing with #91 and #90.

### Changed

- Removed `form.js`. All dynamic behaviour is handled in core OnDemand in [91](https://github.com/OSC/bc_osc_jupyter/pull/91).
- Update the container to v0.4.0 in [82](https://github.com/OSC/bc_osc_jupyter/pull/85).
- Changed choice of Jupyter Lab & Notebook to a radio button in [86](https://github.com/OSC/bc_osc_jupyter/pull/85) and
  [85](https://github.com/OSC/bc_osc_jupyter/pull/85).

## [0.21.3] - 2021-08-27

### Added

- Pods are now submitted with `osc.edu/cluster` label for owens or pitzer in [74](https://github.com/OSC/bc_osc_jupyter/pull/74).

## [0.21.2] - 2021-08-19

### Fixed

- [72](https://github.com/OSC/bc_osc_jupyter/pull/72) fixed a bug in classrooms where they hid
  versions because they didn't have the data options for clusters.

## [0.21.1] - 2021-08-18

### Fixed

- [69](https://github.com/OSC/bc_osc_jupyter/pull/69) fixed a bug with classrooms not finding the current cluster.

## [0.21.0] - 2021-08-13

### Changed

- [68](https://github.com/OSC/bc_osc_jupyter/pull/68) changed the jupyter versions for security updates.

## [0.20.0] - 2021-08-05

### Added

- [61](https://github.com/OSC/bc_osc_jupyter/pull/61) added the kubernetes clusters.

## [0.19.2] - 2021-08-03
### Added
- [65](https://github.com/OSC/bc_osc_jupyter/pull/65) added jupyterlab 3.0.16.

## [0.19.1] - 2021-03-02
### Added
- [59](https://github.com/OSC/bc_osc_jupyter/pull/59) added the julia/1.5.3 module
  as well as some documentation on how to use julia 1.0+ modules.

## [0.19.0] - 2021-01-20
### Changed
- Account is now a select widget with only valid groups as options in
  [57](https://github.com/OSC/bc_osc_jupyter/pull/57)
- Removed unused data slurm-owens fattributes in [58](https://github.com/OSC/bc_osc_jupyter/pull/58)

## [0.18.0] - 2020-12-28
### Changed
- Removed the owens-slurm cluster and all torque related configurations
  in [56](https://github.com/OSC/bc_osc_jupyter/pull/56)

## [0.17.0] - 2020-11-18
### Added
- Add the owens-slurm cluster to begin migrating Owens from Torque to Slurm.
  [#55](https://github.com/OSC/bc_osc_jupyter/pull/55).

## [0.16.2] - 2020-10-09
### Fixed
- When using Zoom on an iPad and 'sharing content' through a url, we do not
  pass form parameters to the login API in a new tab. So, we don't open a new
  tab if the user agent is Zoom in an iPad. [54](https://github.com/OSC/bc_osc_jupyter/pull/54).

## [0.16.1] - 2020-09-21
### Fixed
- PR [52](https://github.com/OSC/bc_osc_jupyter/pull/52) 0.16.0 bug fixes
  - fixed scheduling hugemem nodes on owens

## [0.16.0] - 2020-09-21
### Changed
- PR [52](https://github.com/OSC/bc_osc_jupyter/pull/52) pitzer-exp merged into
  the pitzer cluster
  - Removed pitzer-exp as an option.
  - Created new node type pitzer options to accomidate pitzer-exp merging into
    pitzer
  - Changed the help text for node types
  - logic for handling submitting blank cores is again in the submit.yml.erb
    instead of the javascript.

## [0.15.0] - 2020-08-27
### Added
- support for owens, pitzer and pitzer expansion clusters
  - Added javascript to toggle the select options (node_type and cuda_version
    availability are different across clusters).
  - PR [46](https://github.com/OSC/bc_osc_jupyter/pull/46) merged
    this app with pitzer
  - PR [48](https://github.com/OSC/bc_osc_jupyter/pull/48) added
    the pitzer expansion cluster

### Changed
- javascript now populates the num_cores if it's blank (instead of populating
  in the submit.yml.erb).
- min cores is 1 instead of 0.
- A hash of common_kernels were added to the script.sh.erb that exist on any
  cluster. Owens specific kernels merge with this hash.
- many form items now have data attributes for js to read and manipulate.

## [0.14.2] - 2020-08-26
### Added
- classrooms set FACLs so that instructors and teaching assistants can access
  the users' files to grade them.

## [0.14.1] - 2020-08-19
### Changed
- removed the "c.JupyterApp.config_file_name = 'ondemand_config'" configuration
  because it can conflict with extensions (notably nbgrader)
- make the class directory even if there's nothing to copy to it
- touch a MD file in the classroom root directory for reference and note taking
- classrooms specify NOTEBOOK_ROOT to start in that directory and encapsulate the
  classroom environment instead of relying on the JUPYTER_API redirecting to the
  directory

### Added
- classrooms create a MD file in the root directory for reference and to keep
  notes.

## [0.14.0] - 2020-08-12
### Added
- classroom flag. When enabled we copy files from the environment variable 
  $OSC_CLASS_FILES to ~/osc_classes/$OSC_CLASS_ID to initialize the classroom
  envrionment [#44](https://github.com/OSC/bc_osc_jupyter/pull/44).

### Changed
- Simplified the way we toggle the visibility of GPU node choice and the
  text field choice for CUDA version [#43](https://github.com/OSC/bc_osc_jupyter/pull/43).

## [0.13.3] - 2020-06-26
### Fixed
- Notebooks use the corret /tree API and Lab uses /lab

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

[Unreleased]: https://github.com/OSC/bc_osc_jupyter/compare/v0.24.0...HEAD
[0.24.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.24.0...v0.23.3
[0.23.4]: https://github.com/OSC/bc_osc_jupyter/compare/v0.23.3...v0.23.4
[0.23.3]: https://github.com/OSC/bc_osc_jupyter/compare/v0.23.2...v0.23.3
[0.23.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.23.1...v0.23.2
[0.23.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.23.0...v0.23.1
[0.23.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.21.3...v0.22.0
[0.21.3]: https://github.com/OSC/bc_osc_jupyter/compare/v0.21.2...v0.21.3
[0.21.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.21.1...v0.21.2
[0.21.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.21.0...v0.21.1
[0.21.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.19.2...v0.20.0
[0.19.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.16.2...v0.17.0
[0.16.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.16.1...v0.16.2
[0.16.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.14.2...v0.15.0
[0.14.2]: https://github.com/OSC/bc_osc_jupyter/compare/v0.14.1...v0.14.2
[0.14.1]: https://github.com/OSC/bc_osc_jupyter/compare/v0.14.0...v0.14.1
[0.14.0]: https://github.com/OSC/bc_osc_jupyter/compare/v0.13.3...v0.14.0
[0.13.3]: https://github.com/OSC/bc_osc_jupyter/compare/v0.13.2...v0.13.3
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
