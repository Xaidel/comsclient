#!/usr/bin/env sh

cd dist

rm bundle.js
rm main.d.ts

rm -rf types
rm -rf api

cd ../build

mv bundle.js ../dist
mv main.d.ts ../dist
mv types ../dist
mv api ../dist