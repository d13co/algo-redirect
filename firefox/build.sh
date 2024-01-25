#!/bin/bash

set -e
cd src

v=$(jq -r .version manifest.json)
file="algo-redirect-firefox-$v.xpi"

npx web-ext build -o --filename $file

echo Build OK

mv web-ext-artifacts/$file ../../releases/

rm -rf web-ext-artifacts
