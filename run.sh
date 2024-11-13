#!/bin/bash

if [[ "$1" == "-d" ]]; then
  echo "Running detached..."

  docker ps -q -f name=consol-fe &>/dev/null

  if [[ $? -ne 0 ]]; then
    docker run --name consol-fe -d -p 3000:3000 -v "$(pwd):/usr/app" -i consol-fe
  else
    echo "Container already exists. Restarting..."

    docker rm -f consol-fe
    docker run --name consol-fe -d -p 3000:3000 -v "$(pwd):/usr/app" -i consol-fe
  fi
  exit 0
fi

docker ps -q -f name=consol-fe &>/dev/null

if [[ $? -ne 0 ]]; then
  echo "Container does not exist. Creating and running..."

  docker run --name consol-fe -p 3000:3000 -v "$(pwd):/usr/app" -i consol-fe
else
  echo "Container already exists. Restarting..."

  docker rm -f consol-fe
  docker run --name consol-fe -p 3000:3000 -v "$(pwd):/usr/app" -i consol-fe
fi

