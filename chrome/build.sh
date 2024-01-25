#!/bin/bash

v=$(jq -r .version manifest.json)
file="../algo-redirect-chrome-$v.zip"

rm $file 2> /dev/null

zip $file -r *

mv $file .

echo $file
