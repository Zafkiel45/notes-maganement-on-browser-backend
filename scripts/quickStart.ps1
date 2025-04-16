param (
    [string]$mode = ""
)

Write-Host "Iniciando Backend e Frontend..."

Start-Process powershell -ArgumentList "cd 'D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs-backend'; bun run start"

Start-Sleep -Seconds 2

if ($mode -eq "dev") {
    Write-Host "Modo desenvolvimento ativado para o Frontend"
    Start-Process powershell -ArgumentList "cd 'D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs'; npm run dev"
} else {
    Write-Host "Modo preview ativado para o Frontend"
    Start-Process powershell -ArgumentList "cd 'D:\murilo-projects\local-projetos\full-stack\webview-mdx-docs'; npm run preview"
}
