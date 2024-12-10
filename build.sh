#!/usr/bin/env sh

cd dist

rm bundle.js
rm main.d.ts

rm -rf types
rm -rf api

cd ../build

mv bundle.js ../dist
mv main.d.ts ../dist

cd ../dist
mkdir types
mkdir api

cd ../build
mv types/interface.d.ts ../dist/types
mv api/*.d.ts ../dist/api