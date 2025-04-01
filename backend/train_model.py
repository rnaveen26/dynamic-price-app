import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Sample dataset (Replace with real data)
data = {
    "product_length": [5, 10, 15, 20],
    "category_length": [3, 6, 9, 12],
    "price": [100, 200, 300, 400]
}
df = pd.DataFrame(data)

X = df.drop(columns=["price"])
y = df["price"]

# Train model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "price_model.pkl")
print("Model trained and saved as 'price_model.pkl'")
