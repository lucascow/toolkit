from quart import Quart, websocket
from api import user, product

app = Quart(__name__)
app.register_blueprint(user.blueprint)
app.register_blueprint(product.blueprint)