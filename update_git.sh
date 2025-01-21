#!/bin/bash
cd ~/Desktop/D3\ Alpha

# Check the status of the repository
git status

# Stage all changes
git add .

# Commit the changes with a message
git commit -m "Update from script"

# Set the remote repository (if not already set)
git remote add origin https://github.com/antriksht/D3Alpha_Website_Main.git 2>/dev/null || echo "Remote already set"

# Push the changes to the main branch of the remote repository
git push origin main
