# This is simple demo to build restful api for the small scale project, with Python & Quart
# Quart is based on Flask (You can use almost all the Flask api).
# Quart is is faster as it make user use of async feature.
#
# (c) Lucas YU <lucasyu8.developer@gmail.com>
#
# 1. First of all install Quart:
#		pip install Quart 	
#
# 2. Run the app (in python 3):
# 		python3 run.py

from config.quartApp import app

app.run()
