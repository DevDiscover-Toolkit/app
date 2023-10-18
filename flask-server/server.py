from flask import Flask

app = Flask(__name__)
app.secret_key = "Just_in_case_we_need_one_asd98saoujid8uijk989asodSHA256CantBeatThis"

from controllers import products
from controllers import users

if __name__ == "__main__":
    app.run(debug=True)