yarn build &&
git checkout gh-pages &&
rm -rf src *.sh *.js *.json yarn.lock *.css *.scss *.less *.styl *.gif *.png  &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m "preview gh-pages" &&
git push