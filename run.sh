#!/bin/bash

if [[ "$1" == "-d" ]]; then

  echo "Running detached..."
  output=$(docker run --name consol-fe -d -p 3000:3000 -v $(pwd):/usr/app -i consol-fe 2>/dev/null)
  exit_code=$?
  
  if [[ "$exit_code" -ne "0" ]]; then

    echo "Container already exists. Retrying..."

    docker rm -f consol-fe

    docker run --name consol-fe -d -p 3000:3000 -v $(pwd):/usr/app -i consol-fe
  fi

  exit 0
fi

  output=$(docker run --name consol-fe -d -p 3000:3000 -v $(pwd):/usr/app -i consol-fe 2>/dev/null)
  exit_code=$?
  
  if [[ "$exit_code" -ne "0" ]]; then
    echo "Container already exists. Retrying..."

    docker rm -f consol-fe

    docker run --name consol-fe -p 3000:3000 -v $(pwd):/usr/app -i consol-fe
  fi

