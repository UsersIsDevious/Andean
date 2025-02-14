chcp 65001

@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

start http://localhost:3000/app/new

REM binフォルダ内のnode.exeを使用してserver.jsを実行
bin\node.exe src\index.js

REM Node.js 実行後にバッチファイルを終了
REM exit
