@echo off
set PATH=%PATH%;%cd%
set NODE_PATH=%cd%\node-v20.17.0-win-x64\node_modules\npm\node_modules;%cd%\node-v20.17.0-win-x64\node_modules\npm
cmd

@REM Scripts\python.exe liveapi_server.py