from flask import Flask, jsonify, request
from datetime import datetime
import requests
#buat object
app = Flask(__name__)
OMBD_API_KEY = "86edc950"
#buat route
@app.route("/")
def index():
    return "<h1>Hello, world!</h1>"

@app.route("/now")
def now():
    now = datetime.now()
    return jsonify({"date" : str(now)}), 200

@app.route("/search")
def search():
    search = request.args.get('movie')
    res = requests.get(f"https://www.omdbapi.com/?s={search}&apikey={OMDB_API_KEY}")
    return search

app.run(debug=True)