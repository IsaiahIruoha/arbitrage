import os
from subprocess import call

# Change directory to the API folder
os.chdir('backend')

# Start gunicorn with your application
call(['gunicorn', 'api:app'])