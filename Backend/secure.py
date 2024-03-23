from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['MONGO_URI'] = 'mongodb://localhost:27017/Backend'
mongo = PyMongo(app)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    data['password'] = hashed_password
    db_response = mongo.db.users.insert_one(data)
    if db_response.inserted_id:
        return jsonify({'message': 'Admin Registered Successfully', 'success': True}), 200
    else:
        return jsonify({'message': 'Unable To Register Admin Please Try Again', 'success': False}), 500

if __name__ == '__main__':
    app.run(debug=True)
