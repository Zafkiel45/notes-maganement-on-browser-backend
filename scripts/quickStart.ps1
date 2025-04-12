Write-Host "Iniciando Backend e Frontend..."

# Paths (Change the paths to a correct directory)
$backendPath = "path\para\backend"
$frontendPath = "path\para\frontend"

# Start the backend in a new window 
Start-Process -WindowStyle Normal -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; bun run start"

# Waits 2 seconds
Start-Sleep -Seconds 2

# Start the frontend in a new window 
Start-Process -WindowStyle Normal -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; npm run start"

Write-Host "Both servers have been started ✅."