#!/bin/bash

if [[ "$1" == "-d" ]]; then
  echo "Running detached..."

  docker ps -q -f name=consol-fe &>/dev/null

  if [[ $? -ne 0 ]]; then
    docker-compose -f docker-compose.yml up  else
    echo "Container already exists. Restarting..."

    docker rm -f consol-fe
    docker-compose -f docker-compose.yml up  else
  fi
  exit 0
fi

docker ps -q -f name=consol-fe &>/dev/null

if [[ $? -ne 0 ]]; then
  echo "Container does not exist. Creating and running..."

  docker-compose -f docker-compose.yml up  else
else
  echo "Container already exists. Restarting..."

  docker rm -f consol-fe
  docker-compose -f docker-compose.yml up  else
fi
