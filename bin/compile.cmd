chcp 65001
@echo off

REM スクリプトがあるディレクトリに移動
cd /d "%~dp0"

REM APEX_PATH 環境変数が設定されているか確認
if "%APEX_PATH%"=="" (
    echo APEX_PATH 環境変数が設定されていません。
    exit /b 1
)

REM --proto_path でプロトコルバッファのディレクトリを指定
"%cd%\protoc\bin\protoc.exe" ^
    --plugin=protoc-gen-js.exe ^
    --proto_path="%APEX_PATH%\LiveAPI" ^
    --js_out=import_style=commonjs,binary:. ^
    events.proto

cd ..
