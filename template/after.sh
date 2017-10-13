# Wait for the RStudio server to start
echo "Waiting for RStudio server to open port ${port}..."
if wait_until_port_used "${host}:${port}" 60; then
  echo "Discovered RStudio Server listening on port ${port}!"
else
  echo "Timed out waiting for RStudio Server to open port ${port}!" ; exit 1
fi
sleep 2
