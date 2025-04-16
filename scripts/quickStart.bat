@echo off
setlocal

:: Checa se o primeiro parâmetro é "dev"
set "MODE=%1"

echo Iniciando Backend e Frontend...

REM Inicia o backend em nova janela
start "Backend" cmd /k "D: && cd D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs-backend && bun run start"

REM Aguarda 2 segundos para garantir que o backend subiu
timeout /t 2 > nul

REM Inicia o frontend baseado na flag
if /I "%MODE%"=="dev" (
    echo Modo desenvolvimento ativado para o Frontend
    start "Frontend" cmd /k "D: && cd D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs && npm run dev"
) else (
    echo Modo preview ativado para o Frontend
    start "Frontend" cmd /k "D: && cd D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs && npm run preview"
)

echo Ambos os servidores foram iniciados.
endlocal
