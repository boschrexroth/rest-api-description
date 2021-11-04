#!/usr/bin/env bash

echo "---- pushing to upstream ----"
set -x

root=$(git rev-parse --show-toplevel)

(cd $root && \
git remote add github https://github.com/boschrexroth/rest-api-description.git || true
git subtree push --prefix public/rest-api-description github master --squash)