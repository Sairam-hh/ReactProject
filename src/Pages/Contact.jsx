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
      maxWidth: "950px",
      margin: "0 auto",
    },

    card: {
      background: "#fff",
      padding: "16px",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },

    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#222",
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
    },

    faqBox: {
      marginTop: "8px",
      background: "#fff7ed",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "12px",
      color: "#555",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.label}>📩 Contact Us</span>
        <h2 style={styles.heading}>Get in Touch</h2>
        <div style={styles.subText}>
          We’re here 24/7 for orders, feedback & support 🍽️
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        
        {/* FORM SIDE */}
        <form style={styles.card} onSubmit={handleSubmit}>
          
          {/* EXTRA CONTENT (NEW ADDED PART) */}
          <div style={{ marginBottom: "12px" }}>
            <h3 style={styles.sectionTitle}>💬 Send us a message</h3>

            <p style={styles.faqBox}>
              We’d love to hear from you! Whether it’s feedback, complaints,
              or food suggestions — our team is always ready to improve your
              FoodieHub experience.
            </p>

            <div style={styles.faqBox}>
              💡 Tip: Give clear details so we can respond faster and help better.
            </div>

            <div style={{ fontSize: "11px", color: "#888", marginTop: "6px" }}>
              ⚡ Response time: 1–2 hours (working time)
            </div>
          </div>

          {/* INPUTS */}
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

          <p style={{ fontSize: "11px", color: "#777" }}>
            📩 Your feedback helps us improve food quality, delivery speed &
            service experience.
          </p>

          <button style={styles.button} type="submit">
            Send Message 🍽️
          </button>
        </form>

        {/* INFO SIDE */}
        <div style={styles.card}>
          
          <h3 style={styles.sectionTitle}>Restaurant Info</h3>

          <div style={styles.chip}>📍 12 Gourmet Lane, Food City</div>
          <div style={styles.chip}>📞 +91 7995358828</div>
          <div style={styles.chip}>📧 support@foodiehub.in</div>
          <div style={styles.chip}>⏰ 10:00 AM – 11:00 PM</div>

          <h3 style={styles.sectionTitle}>🚀 Support Highlights</h3>
          <div style={styles.faqBox}>✔ Fast response (1–2 hours)</div>
          <div style={styles.faqBox}>✔ Refund & order help</div>
          <div style={styles.faqBox}>✔ 24/7 customer support</div>

          <h3 style={styles.sectionTitle}>⚡ Quick Help</h3>
          <div style={styles.chip}>📦 Track Order</div>
          <div style={styles.chip}>💸 Refund Request</div>
          <div style={styles.chip}>🍽 Report Issue</div>

          <h3 style={styles.sectionTitle}>❓ FAQ</h3>

          <div style={styles.faqBox}>
            <strong>Delivery time?</strong><br />
            30–40 minutes normally.
          </div>

          <div style={styles.faqBox}>
            <strong>Refund time?</strong><br />
            2–5 business days.
          </div>

        </div>

      </div>
    </div>
  );
}