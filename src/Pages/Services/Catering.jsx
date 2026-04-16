export default function Catering() {
  const styles = {
    container: {
      maxWidth: "700px",
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
      marginBottom: "12px",
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

    text: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "1.7",
      marginBottom: "10px",
    },

    sectionBox: {
      background: "#fff7ed",
      padding: "14px",
      borderRadius: "12px",
      marginTop: "12px",
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

    packageGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginTop: "12px",
    },

    packageBox: {
      background: "#fff",
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "12px",
    },

    packageTitle: {
      fontWeight: "bold",
      color: "#f97316",
      marginBottom: "5px",
    },

    packageText: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.5",
    },

    footer: {
      marginTop: "12px",
      fontSize: "12px",
      color: "#777",
      fontStyle: "italic",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.iconBox}>🎉</div>
        <div>
          <h3 style={styles.title}>Catering Service</h3>
          <div style={styles.subtitle}>Weddings • Parties • Corporate Events</div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p style={styles.text}>
        FoodieHub Catering brings world-class food service to your special events.
        Whether it’s a wedding, birthday party, or corporate gathering, we ensure
        every dish is prepared with perfection and served with care.
      </p>

      <p style={styles.text}>
        We handle everything from menu planning to setup, cooking, serving, and
        cleanup so you can focus on enjoying your event without stress.
      </p>

      {/* EVENT SUPPORT */}
      <div style={styles.sectionBox}>
        <ul style={styles.list}>
          <li>✔ Wedding receptions & engagement ceremonies</li>
          <li>✔ Birthday parties & family gatherings</li>
          <li>✔ Corporate meetings & office events</li>
          <li>✔ Outdoor catering & buffet setup</li>
          <li>✔ Live food counters & chef specials</li>
        </ul>
      </div>

      {/* PACKAGES */}
      <div style={styles.packageGrid}>
        <div style={styles.packageBox}>
          <div style={styles.packageTitle}>Basic Package</div>
          <div style={styles.packageText}>
            Perfect for small gatherings with simple buffet setup and 5–6 menu items.
          </div>
        </div>

        <div style={styles.packageBox}>
          <div style={styles.packageTitle}>Premium Package</div>
          <div style={styles.packageText}>
            Ideal for medium events with customized menu, starters, main course, and desserts.
          </div>
        </div>

        <div style={styles.packageBox}>
          <div style={styles.packageTitle}>Luxury Package</div>
          <div style={styles.packageText}>
            High-end catering with live counters, multi-cuisine options, and premium service staff.
          </div>
        </div>

        <div style={styles.packageBox}>
          <div style={styles.packageTitle}>Custom Package</div>
          <div style={styles.packageText}>
            Fully flexible plan based on your budget, guests, and event type.
          </div>
        </div>
      </div>

      {/* BADGES */}
      <div style={styles.badgeRow}>
        <span style={styles.badge}>Wedding Expert</span>
        <span style={styles.badge}>Live Counters</span>
        <span style={styles.badge}>Custom Menus</span>
        <span style={styles.badge}>Professional Staff</span>
        <span style={styles.badge}>On-Time Service</span>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        “Great events deserve great food — we make every moment delicious.”
      </div>

    </div>
  );
}