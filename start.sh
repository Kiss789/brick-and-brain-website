#!/bin/bash
echo "Starting Brick & Brain website..."
echo ""
echo "Website will open in your default browser"
echo ""
sleep 2
open http://localhost:3000/fr
echo ""
echo "Website started! You can also visit:"
echo "- French: http://localhost:3000/fr"
echo "- English: http://localhost:3000/en"
echo ""
echo "Press Ctrl+C to stop the server"
npm run dev
