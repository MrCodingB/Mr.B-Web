$OutputDir = "$PSScriptRoot/docs"
$BuildDir = "$PSScriptRoot/build"

Write-Host "Publishing to '$OutputDir'"

Write-Host "Removing previous publish output"

if (Test-Path -Path $OutputDir)
{
    Remove-Item -Path "$OutputDir/*" -Recurse -Force
}
else
{
    New-Item -Path "$OutputDir" -ItemType "directory"
}

Write-Host "Removing previous build output"

if (Test-Path -Path $BuildDir)
{
    Remove-Item -Path "$BuildDir" -Recurse -Force
}

Write-Host "Building Website"

Push-Location "$PSScriptRoot"

npm run build

Pop-Location

if (!(Test-Path -Path "$BuildDir"))
{
    Write-Host "Build directory not found"

    exit -1
}

Write-Host "Copying build output to publish directory"

Copy-Item -Path "$BuildDir/*" -Destination "$OutputDir" -Recurse
