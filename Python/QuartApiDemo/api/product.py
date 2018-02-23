from quart import Blueprint, request, jsonify

blueprint = Blueprint('product', __name__)


#demo handling json
# e.g.: http://127.0.0.1:5000/product/price
@blueprint.route("/product/price", methods=['POST'])
async def productPrice():
    param = await request.get_json(silent=True)	#set the post content as json
    param["price"] = 200;
    param["inventory"] = 11;
    return jsonify(param)


