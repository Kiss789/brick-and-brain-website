@echo off
echo Starting Brick & Brain website...
echo.
echo Website will open in your default browser
echo.
timeout /t 2 >nul
start http://localhost:3000/fr
echo.
echo Website started! You can also visit:
echo - French: http://localhost:3000/fr
echo - English: http://localhost:3000/en
echo.
echo Press any key to stop the server (or close this window)
pause >nul
