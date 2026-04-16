import { NavLink } from "react-router-dom";

export default function Navbar() {

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 25px",
      background: "linear-gradient(90deg, #ff6a00, #ee0979)",
      color: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    },

    logo: {
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "1px"
    },

    links: {
      display: "flex",
      gap: "15px",
      alignItems: "center"
    },

    link: {
      textDecoration: "none",
      color: "white",
      padding: "6px 10px",
      borderRadius: "6px",
      transition: "0.3s"
    },

    active: {
      background: "white",
      color: "#ee0979",
      fontWeight: "bold"
    }
  };

  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>🍴 FoodieHub</h2>

      <div style={styles.links}>

        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Profile
        </NavLink>

      </div>
    </nav>
  );
}