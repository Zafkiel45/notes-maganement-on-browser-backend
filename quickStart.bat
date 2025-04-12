@echo off
echo Iniciando Backend e Frontend...

REM Start the backend in a new window. Change the 'path' for the backend project directory
start "Backend" cmd /k "cd 'path' && bun run start"

REM delay at 2 seconds before to start the front-end
timeout /t 2 > nul

REM Start the frontend aftet 2 secons in a new window. Change the 'path' for the backend project directory
start "Frontend" cmd /k "cd 'path' && npm run start"

echo Ambos os servidores foram iniciados ✅.
