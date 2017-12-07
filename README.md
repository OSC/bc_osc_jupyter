# Batch Connect - OSC Jupyter Notebook

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_jupyter.svg)
![GitHub License](https://img.shields.io/github/license/osc/bc_osc_jupyter.svg)

An interactive app designed for OSC OnDemand that launches a Jupyter Notebook
server within an Owens batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Jupyter Notebook](http://jupyter.readthedocs.io/en/latest/) 4.2.3+ (earlier
  versions are untested but may work for you)
- [OpenSSL](https://www.openssl.org/) 1.0.1+ (used to hash the Jupyter Notebook
  server password)

**Optional** software:

- [Anaconda](https://www.anaconda.com/distribution/) 4.3.13+ and its
  [Jupyter Notebook extensions](https://docs.anaconda.com/anaconda/user-guide/tasks/use-jupyter-notebook-extensions)
  that allow users to use conda environment-based kernels from the Jupyter
  dashboard and the notebook's Kernel menu.
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
  6.0.1+ or any other `module restore` and `module load <modules>` based CLI
  used to load appropriate environments within the batch job before launching
  the Jupyter Notebook server.

## Install

Use Git to clone this app and checkout the desired branch/version you want to
use:

```sh
scl enable git19 -- git clone <repo>
cd <dir>
scl enable git19 -- git checkout <tag/branch>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

To update the app you would:

```sh
cd <dir>
scl enable git19 -- git fetch
scl enable git19 -- git checkout <tag/branch>
```

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_jupyter/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
