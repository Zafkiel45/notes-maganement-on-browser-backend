@echo off
echo Iniciando Backend e Frontend...

REM Inicia o backend em nova janela
start "Backend" cmd /k "path"

REM Aguarda 2 segundos para garantir que o backend subiu
timeout /t 2 > nul

REM Inicia o frontend em nova janela
start "Frontend" cmd /k "path"

echo Ambos os servidores foram iniciados.
