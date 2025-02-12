chcp 65001

@echo off
cd /d "%~dp0"

start http://localhost:3000/app/new

bin\node.exe src\index.js
