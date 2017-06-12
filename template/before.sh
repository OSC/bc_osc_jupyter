# Find available port to run server on
port=$(find_port)

# Generate SHA1 encrypted password
SALT="$(create_passwd 16)"
password="$(create_passwd 16)"
PASSWORD_SHA1="$(echo -n "${password}${SALT}" | openssl dgst -sha1 | awk '{print $NF}')"

# Generate Jupyter config file
export CONFIG_FILE="${PWD}/config.py"
(
umask 077
cat > "${CONFIG_FILE}" << EOL
c.NotebookApp.ip = '*'
c.NotebookApp.port = ${port}
c.NotebookApp.port_retries = 0
c.NotebookApp.password = u'sha1:${SALT}:${PASSWORD_SHA1}'
c.NotebookApp.base_url = '/node/${host}/${port}/'
c.NotebookApp.open_browser = False
c.NotebookApp.allow_origin = '*'
c.NotebookApp.notebook_dir = '${HOME}'
c.NotebookApp.disable_check_xsrf = True
c.NotebookApp.kernel_spec_manager_class = "nb_conda_kernels.CondaKernelSpecManager"
c.NotebookApp.nbserver_extensions = {
  "nb_conda": True,
  "nb_anacondacloud": True,
  "nbpresent": True
}
EOL
)
