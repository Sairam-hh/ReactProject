export default function About() {
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
      marginBottom: "15px",
      color: "#333",
    },

    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      alignItems: "center",
      marginBottom: "20px",
    },

    title: {
      fontSize: "20px",
      marginBottom: "10px",
      color: "#222",
    },

    text: {
      color: "#555",
      lineHeight: "1.7",
      fontSize: "14px",
      marginBottom: "10px",
    },

    stats: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
    },

    statBox: {
      background: "#fff7ed",
      padding: "15px",
      borderRadius: "12px",
      borderLeft: "4px solid #f97316",
      textAlign: "center",
    },

    statNum: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#f97316",
    },

    statLabel: {
      fontSize: "13px",
      color: "#666",
    },

    sectionCard: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      marginTop: "20px",
    },

    subtitle: {
      fontSize: "18px",
      marginBottom: "10px",
      color: "#222",
    },

    list: {
      color: "#555",
      lineHeight: "1.8",
      fontSize: "14px",
      paddingLeft: "18px",
    },
  };

  return (
    <div style={styles.page}>
      <span style={styles.label}>Our Story</span>
      <h2 style={styles.heading}>About FoodieHub</h2>

      {/* MAIN CARD */}
      <div style={styles.card}>
        <div>
          <h3 style={styles.title}>A restaurant built on passion</h3>
          <p style={styles.text}>
            FoodieHub is a modern restaurant platform bringing together fine
            dining, fast delivery, and catering services under one roof.
            Our mission is to serve delicious food with consistency, quality,
            and love.
          </p>

          <p style={styles.text}>
            We started as a small kitchen with a dream to deliver happiness on
            every plate. Today, we serve thousands of customers daily across
            multiple cuisines including Indian, Chinese, Continental, and Fast Food.
          </p>
        </div>

        {/* STATS */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <div style={styles.statNum}>120+</div>
            <div style={styles.statLabel}>Menu items</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>4.9★</div>
            <div style={styles.statLabel}>Avg rating</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>50k</div>
            <div style={styles.statLabel}>Happy guests</div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statNum}>8yrs</div>
            <div style={styles.statLabel}>In business</div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION 1 */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>🍽️ Our Mission</h3>
        <p style={styles.text}>
          To deliver fresh, hygienic, and affordable meals to everyone while
          maintaining restaurant-quality taste and service at scale.
        </p>
      </div>

      {/* EXTRA SECTION 2 */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>🌟 Why Choose Us</h3>
        <ul style={styles.list}>
          <li>Fresh ingredients sourced daily from trusted suppliers</li>
          <li>Experienced chefs with 10+ years expertise</li>
          <li>Fast delivery within 30–40 minutes</li>
          <li>Hygienic kitchen standards (FSSAI certified)</li>
          <li>Affordable pricing with premium taste</li>
        </ul>
      </div>

      {/* EXTRA SECTION 3 */}
      <div style={styles.sectionCard}>
        <h3 style={styles.subtitle}>👨‍🍳 Our Vision</h3>
        <p style={styles.text}>
          We aim to become the most loved food platform in India by combining
          technology with traditional cooking excellence, making every meal
          memorable for our customers.
        </p>
      </div>
    </div>
  );
}