chcp 65001

@echo off
set PATH=%PATH%;%cd%\node-v20.17.0-win-x64
set NODE_PATH=%cd%\node-v20.17.0-win-x64\node_modules\npm\node_modules;%cd%\node-v20.17.0-win-x64\node_modules\npm
set PROTOC=%cd%\protoc-28.2-win64\bin
node start.js