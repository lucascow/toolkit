from flask import Blueprint, request

blueprint = Blueprint('user', __name__)


# e.g: http://127.0.0.1:5000/user/lucas/wieght
@blueprint.route("/user/<username>/weight", methods=['GET', 'POST'])
def name(username):
    return username + " is 65 kg."

# param with converter: string
# method can be GET & POST at the same time
# e.g.: http://127.0.0.1:5000/user/lucas/age
@blueprint.route("/user/<string:username>/age", methods=['GET', 'POST'])
def age(username):    
	if request.method == 'POST':
		return username + " is 25 years old. (POST)"
	else:
		return username + " is 25 years old. (GET)"

