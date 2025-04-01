import React, { useState } from "react";

const PricePrediction = () => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setError(""); // Reset previous errors
    setPredictedPrice(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: product,
          category: category,
          price: parseFloat(price), // Ensure price is sent as a number
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPredictedPrice(data.predicted_price);
      } else {
        setError(data.error || "Prediction failed. Please try again.");
      }
    } catch (error) {
      setError("Error connecting to backend.");
    }
  };

  return (
    <div className="price-container">
      <h2>Dynamic Price Prediction</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Current Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handlePredict}>Predict Price</button>

      {predictedPrice && <p>Predicted Price: ${predictedPrice}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PricePrediction;
