@echo off
setlocal

rem Protocol Buffers Compilerのパスを指定します
set PROTOC_PATH=bin\protoc-28.2-win64\bin\protoc.exe

rem .protoファイルのパスを指定します
set PROTO_FILE="C:\Program Files\EA Games\Apex\LiveAPI\events.proto"

rem 出力先のディレクトリを指定します
set OUTPUT_DIR="C:\Program Files\EA Games\Apex\LiveAPI\output"

rem .protoファイルの親ディレクトリを指定します
set PROTO_PATH="C:\Program Files\EA Games\Apex\LiveAPI"

rem プロトコルバッファをコンパイルします
%PROTOC_PATH% --proto_path=%PROTO_PATH% --js_out=import_style=commonjs,binary:%OUTPUT_DIR% %PROTO_FILE%

if %errorlevel% neq 0 (
    echo コンパイル中にエラーが発生しました。
) else (
    echo コンパイルが成功しました。
)

endlocal
pause
