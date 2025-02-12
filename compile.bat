chcp 65001

@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

move /y .\dist\andean.js ..\compiled\andean.js

cd ..\compiled

del andean.exe sea-prep.blob

node --experimental-sea-config sea-config.json

node -e "require('fs').copyFileSync(process.execPath, 'andean.exe')" 

npx postject andean.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
