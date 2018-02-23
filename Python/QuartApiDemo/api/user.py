from quart import Blueprint, request
from quart.templating import render_template_string

blueprint = Blueprint('user', __name__)


# e.g: http://127.0.0.1:5000/user/lucas/wieght
@blueprint.route("/user/<username>/weight", methods=['GET', 'POST'])
async def name(username):
    return await render_template_string("{{name}} is 65kg.", name=username)

# param with converter: string
# method can be GET & POST at the same time
# e.g.: http://127.0.0.1:5000/user/lucas/age
@blueprint.route("/user/<string:username>/age", methods=['GET', 'POST'])
async def age(username):    
	if request.method == 'POST':
		return await render_template_string("{{name}} is 25 years old. (POST)", name=username)
	else:
		return await render_template_string("{{name}} is 25 years old. (GET)", name=username)

