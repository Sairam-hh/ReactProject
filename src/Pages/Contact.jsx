import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name || "Guest"}! We received your message 🍴`);
  };

  const styles = {
    page: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #fff7ed, #ffffff)",
      minHeight: "100vh",
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
      marginBottom: "25px",
      color: "#333",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
    },

    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },

    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
    },

    labelText: {
      fontWeight: "600",
      marginBottom: "5px",
      color: "#444",
    },

    input: {
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      outline: "none",
      fontSize: "14px",
    },

    textarea: {
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      outline: "none",
      fontSize: "14px",
      minHeight: "100px",
      resize: "none",
    },

    button: {
      background: "#f97316",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
      marginTop: "10px",
    },

    chip: {
      background: "#fff7ed",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "12px",
      borderLeft: "4px solid #f97316",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <span style={styles.label}>📩 Get in Touch</span>
      <h2 style={styles.heading}>Contact FoodieHub</h2>

      <div style={styles.grid}>
        
        {/* FORM */}
        <form style={styles.card} onSubmit={handleSubmit}>
          <h3>Send us a message</h3>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Name</label>
            <input
              style={styles.input}
              placeholder="Enter Your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Email</label>
            <input
              style={styles.input}
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Message</label>
            <textarea
              style={styles.textarea}
              placeholder="How can we help you?"
            />
          </div>

          <button style={styles.button} type="submit">
            Send Message 🍽️
          </button>
        </form>

        {/* INFO */}
        <div style={styles.card}>
          <h3>Restaurant Info</h3>

          <div style={styles.chip}>
            <strong>📍 Address</strong><br />
            12 Gourmet Lane, Food City, FC 400001
          </div>

          <div style={styles.chip}>
            <strong>📞 Phone</strong><br />
            +91 7995358828
          </div>

          <div style={styles.chip}>
            <strong>📧 Email</strong><br />
            sairambanti41@gmail.com
          </div>

          <div style={styles.chip}>
            <strong>⏰ Hours</strong><br />
            Mon – Sun · 10:00 AM – 11:00 PM
          </div>
        </div>

      </div>
    </div>
  );
}