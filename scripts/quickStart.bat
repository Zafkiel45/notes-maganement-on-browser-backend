@echo off
setlocal

:: Store the first argument. This must be 'dev' to development environment.
set "MODE=%1"

echo Backend and Front-end Starting...

REM start the server based on arguments
REM change the paths correctly

if /I "%MODE%"=="dev" (
    start "Backend" cmd /k "bun run start dev"
    REM make sure the backend start before of client.
    timeout /t 2 > nul
    echo Development mode activate to the the Front-end and Backend.
    echo Backend will be a development database for security reasons
    start "Frontend" cmd /k "npm run dev"
) else (
    start "Backend" cmd /k "bun run start"
    REM make sure the backend start before of client.
    timeout /t 2 > nul
    echo Modo preview ativado para o Frontend
    start "Frontend" cmd /k "npm run preview"
)

echo Ambos os servidores foram iniciados.
endlocal
