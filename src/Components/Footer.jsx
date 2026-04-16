export default function Footer() {

  const styles = {
    footer: {
      marginTop: "40px",
      padding: "20px",
      textAlign: "center",
      background: "linear-gradient(90deg, #ff6a00, #ee0979)",
      color: "white",
      fontSize: "14px",
      boxShadow: "0 -4px 12px rgba(0,0,0,0.2)"
    },

    strong: {
      fontWeight: "bold",
      color: "#fff"
    }
  };

  return (
    <footer style={styles.footer}>
      <p>
        © 2026 <strong>FoodieHub</strong> · All rights reserved · Made with ❤️ 🍴
      </p>
    </footer>
  );
}