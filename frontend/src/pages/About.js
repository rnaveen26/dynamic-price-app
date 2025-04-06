import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const reviews = [
  {
    stars: 5,
    text: "ShopEase saved me a lot of money during festive sales. It’s like having a shopping advisor with you always!",
    name: "Priya Sharma",
  },
  {
    stars: 4,
    text: "As a student, I’m always watching my budget. ShopEase gives me the confidence to shop smart.",
    name: "Rahul Verma",
  },
  {
    stars: 5,
    text: "Super accurate predictions! I check ShopEase before making any purchase now.",
    name: "Ananya Iyer",
  },
  {
    stars: 4,
    text: "Intuitive interface and smart insights. Shopping online feels smarter with ShopEase.",
    name: "Karan Mehta",
  },
  {
    stars: 5,
    text: "Great for comparing prices! ShopEase has become my go-to tool before checkout.",
    name: "Sneha Kulkarni",
  },
];

const About = () => {
  return (
    <div className="wall-container">
      <motion.div
        className="wall-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Wall of Love 💗</h2>
        <div className="wall-stars">
          ⭐⭐⭐⭐⭐ <span className="review-score">5.0 from 26 reviews</span>
        </div>
      </motion.div>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="stars">{'⭐'.repeat(review.stars)}</div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">— {review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
