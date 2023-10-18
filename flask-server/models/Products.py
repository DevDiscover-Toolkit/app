from config.mysqlconnection import mysqlconnection
from flask import Flask

# I'm a placeholder for now. Ignore me until we talk about what is important for me to have. Probably a name and a text field and some other useful stuff?
# Also... we gotta get the DB thing figured out before this really matters for now... probably just gonna serve up some fake data on the API routes for now.

class Products:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.category = data["category"]
        self.url = data["url"]
        self.description = data["description"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @staticmethod
    def validate_product(data):
        ## this is a lazy validation - normally we would want to add individual validations
        ## for name, category, URL, description, etc. to make sure they conform to what we want
        ## especially URL - but this is a "here's a starting point" - just double/triple-checking
        ## that there is information in the field at all.
        is_valid = True
        for item in data:
            if len(item) < 1:
                is_valid = False
        return is_valid
    
    @classmethod
    def addProduct(cls, data):
        ## if mysqlConnection is setup then this fires off the "add to DB" query. gonna comment the query out for now
        ## if AUTH isn't finished by the time that we uncomment the query, make sure to remove the two
        ## fields for "user_id" in the query or it will break. (or hard code them)

        #query = "INSERT INTO T_PRODUCTS (name, category, url, description, user_id) VALUES (%(name)s, %(category)s, %(url)s, %(description)s, %(user_id)s)"

        #return mysqlconnection("DevDiscover-Toolkit").query_db(query, data)
        return print("yay i work", data) ## this is just a placeholder - get rid of this when you uncomment the other two.
    
    @classmethod
    def getProducts(cls):
        query = "SELECT * FROM T_PRODUCTS"
        return mysqlconnection("DevDiscover-Toolkit").query_db(query)
