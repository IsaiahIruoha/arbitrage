import os
from subprocess import call

# Change directory to the API folder
os.chdir('API')

# Start gunicorn with your application
call(['gunicorn', 'backend:app'])