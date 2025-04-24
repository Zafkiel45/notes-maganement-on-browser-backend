param (
    [string]$mode = ""
)

Write-Host "Starting the Backend and Front-end..."

# Sempre manda pra janela de índice 0 (aquela em que você rodou o script)
$wtWindowIndex = 0

function Open-Tab {
    param (
        [string]$path,
        [string]$command
    )

    wt -w $wtWindowIndex new-tab `
       -d $path `
       pwsh -NoExit -Command $command
}

if ($mode -eq "dev") {
    Write-Host "Mode development activated"

    Open-Tab `
      -path "specify your path" `
      -command "bun run start dev"

    Open-Tab `
      -path "specify your path" `
      -command "npm run dev"
}
else {
    Write-Host "Mode production activated"

    Open-Tab `
      -path "specify your path" `
      -command "bun run start"

    Open-Tab `
      -path "specify your path" `
      -command "npm run preview"
}
