#!/bin/bash

set -e
yarn build --environment=production
cp dist/index.html dist/404.html

git add .
git commit -m"Build the dist directory"
git push origin

set +e
git push origin :gh-pages
git git branch -D gh-pages

set -e
git subtree split --branch gh-pages --prefix dist/
git push origin gh-pages
