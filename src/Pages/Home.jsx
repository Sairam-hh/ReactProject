import React, { useState, useEffect, useCallback } from "react";

export default function Home({ dispatch }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const addToCart = useCallback(
    (item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    [dispatch]
  );

  const styles = {
    page: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #fff7ed, #ffffff)",
      minHeight: "100vh",
    },

    hero: {
      background: "#fff",
      padding: "22px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      borderLeft: "6px solid #ff6a00",
      marginBottom: "20px",
    },

    label: {
      color: "#ff6a00",
      fontWeight: "bold",
      fontSize: "14px",
    },

    title: {
      fontSize: "28px",
      margin: "10px 0",
      color: "#222",
    },

    subtitle: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.6",
    },

    statsRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "10px",
    },

    statBox: {
      background: "#fff7ed",
      padding: "8px 12px",
      borderRadius: "10px",
      fontSize: "12px",
      borderLeft: "3px solid #ff6a00",
      color: "#444",
    },

    section: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      marginBottom: "20px",
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#222",
    },

    sectionText: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.7",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "15px",
    },

    card: {
      background: "white",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      position: "relative",
    },

    tag: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "#ff6a00",
      color: "white",
      fontSize: "11px",
      padding: "4px 8px",
      borderRadius: "6px",
    },

    desc: {
      fontSize: "13px",
      color: "#666",
      marginTop: "8px",
      lineHeight: "1.5",
    },

    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "15px",
    },

    price: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#ff6a00",
    },

    button: {
      background: "#ff6a00",
      color: "white",
      border: "none",
      padding: "7px 10px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
    },

    testimonialBox: {
      background: "#fff7ed",
      padding: "15px",
      borderRadius: "12px",
      marginTop: "10px",
      borderLeft: "4px solid #ff6a00",
      fontSize: "13px",
      color: "#444",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <div style={styles.hero}>
        <span style={styles.label}>🍽 Welcome to FoodieHub</span>

        <h2 style={styles.title}>
          Delicious Food, Delivered Fresh & Fast
        </h2>

        <p style={styles.subtitle}>
          Experience restaurant-quality meals prepared by expert chefs.
          From spicy Indian curries to global cuisines, we bring happiness
          to your plate in every bite.
        </p>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>🔥 30 min delivery</div>
          <div style={styles.statBox}>⭐ 4.8 rating</div>
          <div style={styles.statBox}>🍽 100+ dishes</div>
          <div style={styles.statBox}>🚚 Free delivery</div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>⭐ Why Choose FoodieHub?</div>
        <p style={styles.sectionText}>
          We don’t just deliver food — we deliver experiences. Every dish is
          freshly prepared, hygienically packed, and delivered with care.
        </p>
        <ul style={styles.sectionText}>
          <li>✔ Fresh ingredients sourced daily</li>
          <li>✔ Expert chefs with authentic recipes</li>
          <li>✔ Fast & reliable delivery network</li>
          <li>✔ Affordable pricing for premium taste</li>
        </ul>
      </div>

      {/* MENU */}
      <span style={styles.label}>🍛 Today's Specials</span>
      <h2 style={{ marginBottom: "15px" }}>Fresh Picks for You</h2>

      <div style={styles.grid}>
        {data.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.tag}>Chef Special</div>

            <h4>🍛 {item.title.slice(0, 35)}</h4>

            <p style={styles.desc}>
              A freshly prepared signature dish made with premium ingredients,
              perfect for lunch or dinner cravings.
            </p>

            <div style={styles.footer}>
              <span style={styles.price}>₹{item.id * 50 + 199}</span>

              <button
                style={styles.button}
                onClick={() => addToCart(item.title)}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div style={{ marginTop: "25px" }}>
        <div style={styles.sectionTitle}>💬 What Customers Say</div>

        <div style={styles.testimonialBox}>
          "FoodieHub delivers amazing food every time. Super fast and always hot!"
          — Ravi
        </div>

        <div style={styles.testimonialBox}>
          "Best online food service I’ve used. Highly recommended!"
          — Priya
        </div>

        <div style={styles.testimonialBox}>
          "The food quality is always consistent and delivery is super fast. Highly recommended!"
          — Arjun
        </div>

        <div style={styles.testimonialBox}>
          "I ordered biryani and it was still hot when it arrived. Amazing service!"
           — Kavya
        </div>

        <div style={styles.testimonialBox}>
          "Best app for ordering food. Prices are fair and taste is excellent."
          — Rohit
        </div>

        <div style={styles.testimonialBox}>
          "Customer support is very helpful and delivery partners are polite."
          — Sneha
        </div>

        </div>
    </div>
  );
}