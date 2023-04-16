$FtpAuth = Get-Content "$PSScriptRoot/ftp.auth.txt"

$FtpServer = $FtpAuth[0]
$Username = $FtpAuth[1]
$Password = $FtpAuth[2]

$Credentials = New-Object System.Net.NetworkCredential($Username, $Password)

# Get files on the server

. .\Get-FtpDirectory.ps1

$Files = (Get-FtpDirectory "ftp://$FtpServer" $Username $Password "")

# Delete files on server

foreach ($File in ($Files | Where-Object { $_ -notlike "stats/*" })) {
    Write-Host "Deleting $File"
    $FtpRequest = [System.Net.FtpWebRequest]::Create("ftp://$FtpServer/$File")
    $FtpRequest.Method = [System.Net.WebRequestMethods+FTP]::DeleteFile
    $FtpRequest.Credentials = $Credentials
    $null = $FtpRequest.GetResponse()
}

# Upload new files

$Files = Get-ChildItem "$PSScriptRoot/build" -Recurse -Name -File

$WebClient = New-Object System.Net.WebClient
$WebClient.Credentials = $Credentials

foreach ($File in $Files) {
    Write-Host "Uploading $File"
    $Uri = New-Object System.Uri("ftp://$FtpServer/$File")
    $WebClient.UploadFile($Uri, "$PSScriptRoot/build/$File")
}
