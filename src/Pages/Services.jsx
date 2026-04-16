import { Link, Outlet, useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.includes(path) ? true : false;

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
      marginBottom: "10px",
      color: "#333",
    },

    subtitle: {
      color: "#666",
      fontSize: "14px",
      marginBottom: "20px",
      lineHeight: "1.6",
    },

    sectionCard: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      marginBottom: "20px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "15px",
      marginBottom: "20px",
    },

    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "12px",
      borderLeft: "4px solid #f97316",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    },

    title: {
      fontWeight: "bold",
      marginBottom: "6px",
      color: "#333",
    },

    text: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.6",
    },

    steps: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },

    step: {
      flex: "1",
      minWidth: "180px",
      background: "#fff7ed",
      padding: "15px",
      borderRadius: "12px",
      borderLeft: "4px solid #f97316",
    },

    stepNum: {
      fontWeight: "bold",
      color: "#f97316",
      marginBottom: "5px",
    },

    tabs: {
      display: "flex",
      gap: "15px",
      marginBottom: "20px",
      flexWrap: "wrap",
    },

    tab: {
      textDecoration: "none",
      padding: "10px 15px",
      borderRadius: "25px",
      border: "1px solid #ddd",
      color: "#444",
      fontWeight: "600",
      background: "#fff",
    },

    activeTab: {
      textDecoration: "none",
      padding: "10px 15px",
      borderRadius: "25px",
      border: "1px solid #f97316",
      color: "#fff",
      fontWeight: "600",
      background: "#f97316",
      boxShadow: "0 6px 15px rgba(249,115,22,0.3)",
    },

    outletBox: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
  };

  return (
    <div style={styles.page}>
      <span style={styles.label}>What We Offer</span>
      <h2 style={styles.heading}>Our Services</h2>

      <p style={styles.subtitle}>
        FoodieHub is designed to deliver a complete food experience — from fine
        dining to doorstep delivery. Every service is crafted with quality,
        speed, and customer satisfaction in mind.
      </p>

      {/* SERVICE TYPES */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.title}>🍽 Dining Experience</div>
          <div style={styles.text}>
            Enjoy premium in-restaurant dining with curated menus, elegant
            ambiance, and world-class hospitality.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.title}>🚚 Doorstep Delivery</div>
          <div style={styles.text}>
            Hot and fresh meals delivered within 30–40 minutes with real-time
            tracking and safe packaging.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.title}>🎉 Event Catering</div>
          <div style={styles.text}>
            Customized catering for weddings, parties, and corporate events
            with flexible menu options.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.title}>🥗 Healthy Food Plans</div>
          <div style={styles.text}>
            Nutrition-focused meals including vegan, keto, and diet-friendly
            plans prepared by experts.
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={styles.sectionCard}>
        <h3>⚙️ How It Works</h3>

        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={styles.stepNum}>Step 1</div>
            Choose your favorite food or service
          </div>

          <div style={styles.step}>
            <div style={styles.stepNum}>Step 2</div>
            Place your order in just a few clicks
          </div>

          <div style={styles.step}>
            <div style={styles.stepNum}>Step 3</div>
            We prepare fresh meals instantly
          </div>

          <div style={styles.step}>
            <div style={styles.stepNum}>Step 4</div>
            Fast delivery or dine-in service
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={styles.sectionCard}>
        <h3>⭐ Why Customers Love Us</h3>
        <ul style={{ color: "#666", lineHeight: "1.8", fontSize: "14px" }}>
          <li>✔ High-quality ingredients sourced daily</li>
          <li>✔ Experienced chefs with authentic recipes</li>
          <li>✔ Fast and reliable delivery system</li>
          <li>✔ Affordable pricing for premium taste</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>

      {/* NAV TABS */}
      <div style={styles.tabs}>
        <Link
          to="dining"
          style={isActive("dining") ? styles.activeTab : styles.tab}
        >
          🍽 Dining
        </Link>

        <Link
          to="delivery"
          style={isActive("delivery") ? styles.activeTab : styles.tab}
        >
          🚚 Delivery
        </Link>

        <Link
          to="catering"
          style={isActive("catering") ? styles.activeTab : styles.tab}
        >
          🎉 Catering
        </Link>
      </div>

      {/* CHILD ROUTE CONTENT */}
      <div style={styles.outletBox}>
        <Outlet />
      </div>
    </div>
  );
}