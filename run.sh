#!/bin/bash

# Function to run the container
run_container() {
  echo "Running container..."

  # Use an appropriate path for Windows and Linux
  local mount_path
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    mount_path="$(pwd)"
  elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Convert Windows path to a WSL-compatible path for Docker Desktop
    mount_path="/$(wslpath -w "$(pwd)" | sed 's/\\/\//g' | sed 's/://')"
  else
    echo "Unsupported OS"
    exit 1
  fi

  docker run --name consol-fe -d -p 3000:3000 -v "$mount_path:/usr/app" -i consol-fe
}

# Check if detached mode is requested
if [[ "$1" == "-d" ]]; then
  echo "Running detached..."

  docker ps -q -f name=consol-fe &>/dev/null

  if [[ $? -ne 0 ]]; then
    run_container
  else
    echo "Container already exists. Restarting..."
    docker rm -f consol-fe
    run_container
  fi
  exit 0
fi

docker ps -q -f name=consol-fe &>/dev/null

if [[ $? -ne 0 ]]; then
  echo "Container does not exist. Creating and running..."
  run_container
else
  echo "Container already exists. Restarting..."
  docker rm -f consol-fe
  run_container
fi

