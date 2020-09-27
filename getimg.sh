#!/bin/bash
mkdir -p 2000
while read fhash; do
  FILE=./2000/$fhash
  if [ -f $FILE ]; then
    echo "File $FILE exists."
  else
    wget -O ./2000/$fhash http://t1.qpic.cn/mblogpic/$fhash/2000
  fi
done < media.hash
