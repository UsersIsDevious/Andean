@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

start http://localhost:3000/
start http://localhost:3000/observer.html

REM binフォルダ内のnode.exeを使用してserver.jsを実行
bin\node.exe src\server.js