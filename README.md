# Batch Connect - OSC Jupyter Notebook Server

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_jupyter.svg)
![GitHub License](https://img.shields.io/github/license/osc/bc_osc_jupyter.svg)

A Batch Connect app designed for OSC OnDemand that launches a Jupyter Notebook
server within an Owens batch job.

## Prerequisites

This app requires the following software be installed on the nodes that the
batch job is intended to run on:

- [Anaconda](https://www.continuum.io/anaconda-overview) 4.3.13+
- [Jupyter Notebook](http://jupyter.readthedocs.io/en/latest/) 4.2.3+
- [Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod) 6.0.1+
- [OpenSSL](https://www.openssl.org/) 1.0.1+ (used to hash password)

## Install

Use git to clone this app and checkout the desired branch/version you want to
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

## Template Specification

### PYTHON_MODULE

This environment variable describes the specific Python version to load. This
also assumes module support through the
[Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
package manager is installed on the running compute node as well as the
requested module in `$PYTHON_MODULE`.

### CUDA_MODULE

This environment variable describes the specific CUDA version to load. This
also assumes module support through the
[Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
package manager is installed on the running compute node as well as the
requested module in `$CUDA_MODULE`.

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_jupyter/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
