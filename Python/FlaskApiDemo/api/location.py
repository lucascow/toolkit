from config.flaskApp import app


# Not Recommended
# This is a bad demo to set up router without blueprint, though it works.
# e.g.: http://127.0.0.1:5000/location
@app.route("/location", methods=['GET'])
def location():
    return "Around the world."

