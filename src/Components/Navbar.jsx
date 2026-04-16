import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      background: "linear-gradient(90deg, #ff6a00, #ee0979)",
      color: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      flexWrap: "wrap",
    },

    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    menuBtn: {
      display: "none",
      fontSize: "24px",
      cursor: "pointer",
    },

    links: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },

    link: {
      textDecoration: "none",
      color: "white",
      padding: "7px 12px",
      borderRadius: "8px",
      transition: "0.3s",
      fontSize: "14px",
    },

    active: {
      background: "white",
      color: "#ee0979",
      fontWeight: "bold",
    },

    mobileMenu: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginTop: "10px",
      gap: "8px",
    },
  };

  return (
    <nav style={styles.nav}>
      
      {/* LOGO */}
      <h2 style={styles.logo}>🍴 FoodieHub</h2>

      {/* HAMBURGER (mobile) */}
      <div
        style={styles.menuBtn}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* MENU */}
      <div
        style={{
          ...styles.links,
          ...(open ? styles.mobileMenu : {}),
        }}
      >
        {[
          { to: "/", name: "Home" },
          { to: "/about", name: "About" },
          { to: "/services", name: "Services" },
          { to: "/contact", name: "Contact" },
          { to: "/profile", name: "Profile" },
        ].map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            onClick={() => setOpen(false)}
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.active }
                : styles.link
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* RESPONSIVE CSS (inside component for simplicity) */}
      <style>
        {`
          @media (max-width: 768px) {
            .menu-btn {
              display: block;
            }
          }
        `}
      </style>

    </nav>
  );
}