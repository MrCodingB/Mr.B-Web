$BuildDir = "$PSScriptRoot/build"

Write-Host "Building to '$BuildDir'"

Write-Host "Removing previous build output"

if (Test-Path -Path $BuildDir)
{
    Remove-Item -Path "$BuildDir" -Recurse -Force
}

Write-Host "Building Website"

Push-Location "$PSScriptRoot"

npm run build

Pop-Location
