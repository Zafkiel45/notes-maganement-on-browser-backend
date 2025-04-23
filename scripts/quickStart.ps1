param (
    [string]$mode = ""
)

Write-Host "Starting the Backend and Front-end.."

if ($mode -eq "dev") {
    Write-Host "Mode development activated"
    Start-Process powershell -ArgumentList "bun run start dev"
    Start-Sleep -Seconds 2
    Start-Process powershell -ArgumentList "npm run dev"
} else {
    Start-Process powershell -ArgumentList "bun run start"
    Start-Sleep -Seconds 2
    Write-Host "Mode in production activated"
    Start-Process powershell -ArgumentList "npm run preview"
}
