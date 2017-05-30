#!/bin/bash -l

# Get current working directory
export OUTPUT_ROOT="${PWD}"

# Get source directory of this script
export STAGED_ROOT="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

# Set working directory to home directory
cd "${HOME}"

#
# Start Jupyter Notebook Server
#

# Restore the module environment to avoid conflicts
module restore

# Load the require modules
module load ${PYTHON_MODULE}
[[ ${CUDA_MODULE} ]] && module load ${CUDA_MODULE}

# Launch the Jupyter Notebook Server
jupyter notebook --config="${CONFIG_FILE}"
