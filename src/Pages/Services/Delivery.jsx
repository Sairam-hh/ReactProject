export default function Delivery() {
  const styles = {
    container: {
      maxWidth: "650px",
      margin: "20px auto",
      background: "#fff",
      borderRadius: "16px",
      padding: "22px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      borderLeft: "6px solid #f97316",
      fontFamily: "Arial, sans-serif",
    },

    header: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "15px",
    },

    iconBox: {
      width: "55px",
      height: "55px",
      borderRadius: "12px",
      background: "#fff7ed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
    },

    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#222",
      margin: 0,
    },

    subtitle: {
      fontSize: "13px",
      color: "#666",
      marginTop: "4px",
    },

    description: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.7",
      marginBottom: "12px",
    },

    featuresBox: {
      background: "#fff7ed",
      padding: "12px",
      borderRadius: "12px",
      marginBottom: "15px",
    },

    list: {
      margin: 0,
      paddingLeft: "18px",
      color: "#444",
      fontSize: "13px",
      lineHeight: "1.8",
    },

    badgeRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },

    badge: {
      background: "#f97316",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.iconBox}>🚚</div>
        <div>
          <h3 style={styles.title}>Delivery Service</h3>
          <div style={styles.subtitle}>Fast • Hot • Reliable</div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p style={styles.description}>
        Enjoy restaurant-quality meals delivered directly to your doorstep in
        under 30 minutes. We focus on speed, hygiene, and maintaining the
        perfect temperature of your food.
      </p>

      <p style={styles.description}>
        Our delivery partners are trained professionals ensuring safe,
        contactless, and on-time delivery across all major locations.
      </p>

      {/* FEATURES */}
      <div style={styles.featuresBox}>
        <ul style={styles.list}>
          <li>Average delivery time: 25–30 minutes</li>
          <li>Live order tracking available</li>
          <li>Contactless & safe delivery</li>
          <li>Wide restaurant coverage</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      {/* BADGES */}
      <div style={styles.badgeRow}>
        <span style={styles.badge}>Fast Delivery</span>
        <span style={styles.badge}>Hot Meals</span>
        <span style={styles.badge}>Safe Packaging</span>
        <span style={styles.badge}>Live Tracking</span>
      </div>

    </div>
  );
}