export default function About() {
  const styles = {
    page: {
      padding: "25px 15px",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #fff7ed, #ffffff)",
      minHeight: "100vh",
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
      marginBottom: "12px",
      color: "#333",
    },

    card: {
      background: "#fff",
      padding: "18px",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      alignItems: "center",
      marginBottom: "15px",
    },

    title: {
      fontSize: "18px",
      marginBottom: "8px",
      color: "#222",
    },

    text: {
      color: "#555",
      lineHeight: "1.6",
      fontSize: "13px",
      marginBottom: "8px",
    },

    stats: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
    },

    statBox: {
      background: "#fff7ed",
      padding: "10px",
      borderRadius: "10px",
      borderLeft: "3px solid #f97316",
      textAlign: "center",
    },

    statNum: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#f97316",
    },

    statLabel: {
      fontSize: "11px",
      color: "#666",
    },

    sectionCard: {
      background: "#fff",
      padding: "16px",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      marginTop: "12px",
    },

    subtitle: {
      fontSize: "15px",
      marginBottom: "8px",
      color: "#222",
    },

    list: {
      color: "#555",
      lineHeight: "1.6",
      fontSize: "13px",
      paddingLeft: "16px",
      margin: 0,
    },

    highlightBar: {
      background: "#f97316",
      color: "#fff",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "12px",
      marginBottom: "12px",
      textAlign: "center",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <span style={styles.label}>Our Story</span>
      <h2 style={styles.heading}>About FoodieHub</h2>

      <div style={styles.highlightBar}>
        🍽 Serving happiness on every plate since 2016
      </div>

      {/* MAIN CARD */}
      <div style={styles.card}>
        
        {/* LEFT TEXT */}
        <div>
          <h3 style={styles.title}>Built with passion & taste</h3>

          <p style={styles.text}>
            FoodieHub is a modern food platform combining dining, delivery, and catering
            into one seamless experience. We focus on quality, speed, and customer satisfaction.
          </p>

          <p style={styles.text}>
            From a small kitchen to a trusted brand, our journey is driven by love for food
            and commitment to excellence.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <div style={styles.statNum}>120+</div>
            <div style={styles.statLabel}>Dishes</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>4.9★</div>
            <div style={styles.statLabel}>Rating</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>50K</div>
            <div style={styles.statLabel}>Customers</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>8Y</div>
            <div style={styles.statLabel}>Experience</div>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>🍽 Our Mission</h3>
        <p style={styles.text}>
          To deliver fresh, hygienic, and affordable meals with consistent taste and
          premium quality across every order.
        </p>
      </div>

      {/* WHY US */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>🌟 Why People Choose Us</h3>
        <ul style={styles.list}>
          <li>Fresh ingredients sourced daily</li>
          <li>Experienced chefs with authentic recipes</li>
          <li>Fast delivery within 30–40 minutes</li>
          <li>Hygienic and safe kitchen standards</li>
          <li>Affordable pricing with premium taste</li>
        </ul>
      </div>

      {/* VISION */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>👨‍🍳 Our Vision</h3>
        <p style={styles.text}>
          To become India’s most loved food platform by blending technology with
          traditional cooking excellence, creating unforgettable food experiences.
        </p>
      </div>

    </div>
  );
}