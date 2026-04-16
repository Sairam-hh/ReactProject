import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [photo, setPhoto] = useState(null);

  const styles = {
    page: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #fff7ed, #ffffff)",
      minHeight: "100vh",
    },

    header: {
      textAlign: "center",
      marginBottom: "20px",
    },

    label: {
      display: "inline-block",
      background: "#ffedd5",
      color: "#d97706",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "14px",
      marginBottom: "10px",
    },

    heading: {
      fontSize: "28px",
      color: "#333",
      margin: "5px 0",
    },

    subText: {
      fontSize: "13px",
      color: "#777",
    },

    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      textAlign: "center",
      maxWidth: "460px",
      margin: "0 auto",
    },

    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #f97316, #fb923c)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "34px",
      fontWeight: "bold",
      margin: "0 auto 10px",
      overflow: "hidden",
      boxShadow: "0 10px 25px rgba(249,115,22,0.3)",
    },

    uploadBtn: {
      display: "inline-block",
      marginTop: "10px",
      background: "#fff7ed",
      color: "#f97316",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      cursor: "pointer",
      border: "1px solid #f97316",
    },

    name: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#222",
      marginBottom: "5px",
    },

    badge: {
      display: "inline-block",
      background: "#fff7ed",
      color: "#f97316",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      marginBottom: "15px",
      border: "1px solid #f97316",
    },

    bio: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.6",
      marginBottom: "15px",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginBottom: "20px",
    },

    statBox: {
      background: "#fff7ed",
      padding: "12px",
      borderRadius: "12px",
      borderLeft: "4px solid #f97316",
      textAlign: "left",
    },

    statNum: {
      fontWeight: "bold",
      color: "#f97316",
      fontSize: "16px",
    },

    statLabel: {
      fontSize: "12px",
      color: "#666",
    },

    section: {
      marginTop: "15px",
      background: "#fff7ed",
      padding: "15px",
      borderRadius: "12px",
      textAlign: "left",
    },

    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },

    list: {
      fontSize: "13px",
      color: "#555",
      lineHeight: "1.8",
      paddingLeft: "18px",
    },

    btn: {
      background: "#f97316",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
      marginTop: "15px",
    },

    footer: {
      fontSize: "12px",
      color: "#888",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.label}>Account Dashboard</span>
        <h2 style={styles.heading}>Your Profile</h2>
        <div style={styles.subText}>
          Manage your FoodieHub account & preferences
        </div>
      </div>

      {/* CARD */}
      <div style={styles.card}>
        
        {/* AVATAR */}
        <div style={styles.avatar}>
          {photo ? (
            <img
              src={photo}
              alt="profile"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            user.charAt(0).toUpperCase() + user.charAt(7).toUpperCase()
          )}
        </div>

        {/* UPLOAD BUTTON */}
        <label style={styles.uploadBtn}>
          📷 Enter Your Photo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPhoto(URL.createObjectURL(file));
              }
            }}
          />
        </label>

        {/* NAME */}
        <div style={styles.name}>{user}</div>

        {/* BADGE */}
        <div style={styles.badge}>🍽 Gold Foodie Member</div>

        {/* BIO */}
        <div style={styles.bio}>
          Hey {user}! You are enjoying a premium food experience with FoodieHub.
          Your preferences help us recommend the best dishes just for you.
        </div>

        {/* STATS */}
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <div style={styles.statNum}>18</div>
            <div style={styles.statLabel}>Orders</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>4.9★</div>
            <div style={styles.statLabel}>Rating</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>₹3.8k</div>
            <div style={styles.statLabel}>Spent</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>Gold</div>
            <div style={styles.statLabel}>Tier</div>
          </div>
        </div>

        {/* ACTIVITY */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>🧾 Recent Activity</div>
          <ul style={styles.list}>
            <li>✔ Ordered Chicken Biryani</li>
            <li>✔ Rated Pizza 5★</li>
            <li>✔ Saved Burger Combo</li>
          </ul>
        </div>

        {/* PERKS */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>🎁 Member Benefits</div>
          <ul style={styles.list}>
            <li>✔ Free delivery on select orders</li>
            <li>✔ Exclusive discounts</li>
            <li>✔ Priority support</li>
            <li>✔ Early access to new dishes</li>
          </ul>
        </div>

        {/* BUTTON */}
        <button style={styles.btn} onClick={() => setUser("Sairam")}>
          Change Name
        </button>

        <div style={styles.footer}>
          Tip: Keep your profile updated for better recommendations 🍽
        </div>

      </div>
    </div>
  );
}