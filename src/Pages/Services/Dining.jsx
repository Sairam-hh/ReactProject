export default function Dining() {
  const styles = {
    container: {
      maxWidth: "650px",
      margin: "20px auto",
      background: "linear-gradient(135deg, #ffffff, #fff7ed)",
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
      marginBottom: "10px",
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
      boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
    },

    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#222",
      margin: 0,
    },

    subtitle: {
      fontSize: "12px",
      color: "#777",
      marginTop: "3px",
    },

    text: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.7",
      marginBottom: "10px",
    },

    highlightBox: {
      background: "#fff",
      border: "1px solid #ffe0c2",
      padding: "12px",
      borderRadius: "12px",
      marginTop: "10px",
    },

    list: {
      margin: 0,
      paddingLeft: "18px",
      fontSize: "13px",
      color: "#444",
      lineHeight: "1.8",
    },

    badgeRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "12px",
    },

    badge: {
      background: "#f97316",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
    },

    note: {
      marginTop: "12px",
      fontSize: "12px",
      color: "#777",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.iconBox}>🍽️</div>
        <div>
          <h3 style={styles.title}>Dining Service</h3>
          <div style={styles.subtitle}>
            Premium Restaurant Experience • Table Booking Available
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p style={styles.text}>
        Step into a world of taste and comfort at FoodieHub Dining. Enjoy a
        carefully curated menu, elegant ambiance, and personalized service that
        makes every meal memorable.
      </p>

      <p style={styles.text}>
        Whether it’s a family dinner, romantic date, or business lunch, we
        ensure the perfect dining experience with fresh ingredients and chef-crafted dishes.
      </p>

      {/* HIGHLIGHTS */}
      <div style={styles.highlightBox}>
        <ul style={styles.list}>
          <li>✔ Table reservation with priority seating</li>
          <li>✔ Multi-cuisine chef specials</li>
          <li>✔ Cozy & premium ambiance</li>
          <li>✔ Fast and attentive service</li>
          <li>✔ Custom meal requests available</li>
        </ul>
      </div>

      {/* BADGES */}
      <div style={styles.badgeRow}>
        <span style={styles.badge}>Fine Dining</span>
        <span style={styles.badge}>Family Friendly</span>
        <span style={styles.badge}>Chef Specials</span>
        <span style={styles.badge}>Premium Ambiance</span>
      </div>

      {/* FOOTER NOTE */}
      <div style={styles.note}>
        “Good food brings people together — we make every moment special.”
      </div>

    </div>
  );
}