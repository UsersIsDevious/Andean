chcp 65001

@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

set PATH=%PATH%;%cd%\node
set NODE_PATH=%cd%\node\node_modules\npm\node_modules;%cd%\node\node_modules\npm
set PROTOC=%cd%\protoc\bin

cd ../