@echo off
echo ========================================
echo    AMR-AMS Awareness App
echo ========================================
echo.
echo Starting development server...
echo.

cd /d "%~dp0"

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies first...
    call npm install
    echo.
)

:: Start the dev server and open browser
echo Opening http://localhost:5173 in your browser...
start "" "http://localhost:5173"
call npm run dev
