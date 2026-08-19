$git = "C:\Users\theil\PortableGit\cmd\git.exe"

Set-Location "c:\Users\theil\Desktop\WEBSITE"

Write-Output "--- Initializing Git ---"
& $git init

Write-Output "--- Configuring Git User ---"
& $git config user.name "uzbekistan612-aib"
& $git config user.email "uzbekistan612@example.com"

Write-Output "--- Staging Files ---"
& $git add .

Write-Output "--- Committing ---"
& $git commit -m "feat: complete Coffee Land website with modern editorial design and Next.js"

Write-Output "--- Setting Branch main ---"
& $git branch -M main

Write-Output "--- Setting Remote Origin ---"
& $git remote remove origin 2>$null
& $git remote add origin https://github.com/uzbekistan612-aib/Usacafe.git

Write-Output "--- Pushing to GitHub ---"
& $git push -u origin main
