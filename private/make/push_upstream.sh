#!/usr/bin/env bash


root=$(git rev-parse --show-toplevel)

(cd $root && \

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ "$branch" == "master" ]
then
  echo "---- pushing to upstream ----"
  git remote add github https://github.com/boschrexroth/rest-api-description.git || true
  git subtree push --prefix public/rest-api-description github master --squash
else
  echo "Will not publish from a branch other than master."
  exit 1
fi)