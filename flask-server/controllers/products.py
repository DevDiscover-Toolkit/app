from flask import Flask,  request, session, abort, jsonify
from models import Products
app = Flask(__name__)

#for the sake of making things easy, here's the baseline (see comments for sections)

#create
# ## THIS IS THE SUBMISSION OF THE PRODUCT -- REACT FRONT-END MUST HANDLE THE INITIAL NAVIGATION TO THE BUILD/NEW-PRODUCT PAGE ##
@app.route("/api/products/newProduct", methods=["POST"])
def newProduct(request):
    if "user_id" not in session:
        abort(401) # User not signed in and trying to submit data to the backend - backend rejects with "HTTP 401 Unauthenticated"
    if not Products.validate_product(request.form):
        abort(406) # sends "HTTP 406 'NOT ACCEPTABLE' response due to bad form submission data - normally this would be a 'flash' message - maybe still could, but i don't really care."
    product_data = { # this is just from the product form - and subsequently the model - subject to change
        "name" : request.form["toolName"],
        "category" : request.form["toolCategory"],
        "url" : request.form["toolLink"],
        "description" : request.form["toolDescription"],
        #"user_id" : session["user_id"] # commented this one out until we get auth settled so it doesn't break things
    }

    Products.addProduct(product_data) ##don't forget to create this method
    return jsonify({"route": "/viewAll"})

#getAll
##you probably don't need this route but i'll make it anyway since i don't know if CORS 
## or XSRF protection will get mad if you call it directly from the front-end
@app.route("/api/products/getAllProducts")
def getAllProducts():
    res = Products.getProducts()
    return res

#getOneByID

#updateOneByID

#deleteOneByID