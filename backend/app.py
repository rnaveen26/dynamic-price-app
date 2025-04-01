from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib  # To load the trained ML model

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Load the trained model (Make sure the model is saved as 'price_model.pkl')
try:
    model = joblib.load("price_model.pkl")
except Exception as e:
    model = None
    print("Error loading model:", e)

@app.route("/")
def home():
    return jsonify({"message": "Price Prediction API is running!"})

@app.route("/predict", methods=["POST"])
def predict():
    if not model:
        return jsonify({"error": "Model not loaded properly"}), 500

    try:
        data = request.get_json()
        product = data.get("product", "")
        category = data.get("category", "")

        # Convert inputs into numerical features (ONLY TWO FEATURES)
        feature_vector = np.array([len(product), len(category)]).reshape(1, -1)

        # Predict price
        predicted_price = model.predict(feature_vector)[0]

        return jsonify({"predicted_price": round(predicted_price, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)