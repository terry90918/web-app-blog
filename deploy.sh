set -e
yarn install
yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:terry90918/web-app-blog.git master:gh-pages
cd -
