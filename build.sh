cd front
yarn
rm -rf public
yarn build
rm -rf ../back/public
cp -r public ../back/public
cd ../back
yarn
yarn start
