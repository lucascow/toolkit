from flask import Flask
from api import user, product

app = Flask(__name__)
app.register_blueprint(user.blueprint)
app.register_blueprint(product.blueprint)

# Not Recommended
# Although we use blueprint to organise the router, we can still use the @app.route
@app.route("/")
def hello():
    return "Hello World!"

# Not Recommended
# Organise the router with @app.route
# Defered import for avoiding circular dependency
from api import location
