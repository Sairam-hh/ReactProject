import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name || "Guest"}! We received your message 🍽️`);
  };

  const styles = {
    page: {
      padding: "25px 15px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #fff7ed, #ffffff)",
      minHeight: "100vh",
    },

    header: {
      textAlign: "center",
      marginBottom: "15px",
    },

    label: {
      display: "inline-block",
      background: "#ffedd5",
      color: "#d97706",
      padding: "5px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      marginBottom: "6px",
    },

    heading: {
      fontSize: "24px",
      marginBottom: "5px",
      color: "#333",
    },

    subText: {
      fontSize: "12px",
      color: "#777",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
      maxWidth: "900px",
      margin: "0 auto",
    },

    card: {
      background: "#fff",
      padding: "18px",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },

    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },

    labelText: {
      fontWeight: "600",
      marginBottom: "4px",
      fontSize: "12px",
      color: "#444",
    },

    input: {
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "13px",
      outline: "none",
    },

    textarea: {
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "13px",
      minHeight: "80px",
      resize: "none",
      outline: "none",
    },

    button: {
      background: "#f97316",
      color: "#fff",
      padding: "9px",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%",
      marginTop: "8px",
    },

    chip: {
      background: "#fff7ed",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "8px",
      borderLeft: "3px solid #f97316",
      fontSize: "12px",
      color: "#555",
      lineHeight: "1.5",
    },

    faqBox: {
      marginTop: "10px",
      background: "#fff7ed",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "12px",
      color: "#555",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.label}>📩 Contact Us</span>
        <h2 style={styles.heading}>Get in Touch</h2>
        <div style={styles.subText}>
          We’re here to help you 24/7 with orders, feedback & support
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        
        {/* FORM */}
        <form style={styles.card} onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "10px" }}>Send Message</h3>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Name</label>
            <input
              style={styles.input}
              placeholder="Your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Email</label>
            <input
              style={styles.input}
              type="email"
              placeholder="Your email"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.labelText}>Message</label>
            <textarea
              style={styles.textarea}
              placeholder="Write your message..."
            />
          </div>

          <button style={styles.button} type="submit">
            Send Message 🍽️
          </button>

          <div style={styles.faqBox}>
            💡 Tip: We usually respond within 1–2 hours during working time.
          </div>
        </form>

        {/* INFO */}
        <div style={styles.card}>
          <h3 style={{ marginBottom: "10px" }}>Restaurant Info</h3>

          <div style={styles.chip}>
            📍 <strong>Address</strong><br />
            12 Gourmet Lane, Food City, FC 400001
          </div>

          <div style={styles.chip}>
            📞 <strong>Phone</strong><br />
            +91 7995358828
          </div>

          <div style={styles.chip}>
            📧 <strong>Email</strong><br />
            support@foodiehub.in
          </div>

          <div style={styles.chip}>
            ⏰ <strong>Hours</strong><br />
            Mon – Sun · 10:00 AM – 11:00 PM
          </div>

          <div style={styles.faqBox}>
            ❓ <strong>Need help?</strong><br />
            Track orders, refunds, or delivery issues — we’ve got you covered.
          </div>
        </div>

      </div>
    </div>
  );
}