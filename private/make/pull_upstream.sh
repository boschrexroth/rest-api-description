#!/usr/bin/env bash

echo "---- pulling from upstream ----"
set -x

root=$(git rev-parse --show-toplevel)

(cd $root && \
git remote add github https://github.com/boschrexroth/rest-api-description.git || true
git subtree pull --prefix public/rest-api-description github master --squash)