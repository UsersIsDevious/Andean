chcp 65001

@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

set PATH=%PATH%;%cd%\node-v20.17.0-win-x64
set NODE_PATH=%cd%\node-v20.17.0-win-x64\node_modules\npm\node_modules;%cd%\node-v20.17.0-win-x64\node_modules\npm
set PROTOC=%cd%\protoc\bin

cd ../