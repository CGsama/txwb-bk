#!/bin/bash
mkdir -p $1
while read fhash; do
  FILE=./$1/$fhash
  if [ -f $FILE ]; then
    echo "File $FILE exists."
  else
    wget -O ./$1/$fhash http://$1/mblogpic/$fhash/2000
  fi
done < $2
