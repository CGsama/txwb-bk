#!/bin/bash
folder=$(echo $1 | sed -n 's/\(.*mblogpic\/.*\)\/2000.*/\1/p')
mkdir -p $folder
path=./$folder/2000
if [ -f $path ]; then
  echo $path exists
else
  wget -O $path $1
fi
