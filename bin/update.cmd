chcp 65001

@echo off
REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

set APEX_PATH=C:\Program Files (x86)\Steam\steamapps\common\Apex Legends

REM --proto_path でプロトコルバッファのディレクトリを指定
%cd%\protoc\bin\protoc.exe ^
    --plugin=protoc-gen-js.exe ^
    --proto_path="%APEX_PATH%\LiveAPI" ^
    --js_out=import_style=commonjs,binary:. ^
    events.proto

cd ..
