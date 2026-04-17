import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .profile-page {
    background: #FFFAF5;
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: #3D2B1A;
  }

  /* ── HERO BAND ── */
  .prof-hero {
    background: #1A1209;
    padding: 44px 24px 60px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .prof-hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 260px; height: 260px;
    border-radius: 50%;
    background: rgba(244,97,26,0.07);
    pointer-events: none;
  }
  .prof-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(244,97,26,0.16);
    color: #F4611A;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 20px;
    margin-bottom: 14px;
  }
  .prof-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800; color: #fff;
    margin-bottom: 6px;
  }
  .prof-hero p {
    color: rgba(255,255,255,0.45);
    font-size: 14px;
  }

  /* ── BODY ── */
  .prof-body {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px 48px;
  }

  /* ── AVATAR CARD (floats up over hero) ── */
  .avatar-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.13);
    border-radius: 20px;
    padding: 32px 24px 24px;
    text-align: center;
    margin-top: -36px;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
  }
  .avatar-ring {
    width: 88px; height: 88px;
    border-radius: 50%;
    background: #F4611A;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 30px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 12px;
    border: 3px solid rgba(244,97,26,0.3);
    overflow: hidden;
  }
  .avatar-ring img {
    width: 88px; height: 88px;
    object-fit: cover; border-radius: 50%;
  }
  .upload-pill {
    display: inline-flex;
    align-items: center; gap: 5px;
    background: #FFF0E8; color: #C44D12;
    font-size: 11px; font-weight: 600;
    padding: 5px 12px; border-radius: 20px;
    border: 1px solid rgba(244,97,26,0.25);
    cursor: pointer; margin-bottom: 14px;
  }
  .prof-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.45rem; font-weight: 700;
    color: #1A1209; margin-bottom: 6px;
  }
  .gold-badge {
    display: inline-flex;
    align-items: center; gap: 5px;
    background: #FFF0E8; color: #C44D12;
    font-size: 11px; font-weight: 600;
    padding: 5px 14px; border-radius: 20px;
    border: 1px solid rgba(244,97,26,0.2);
    margin-bottom: 14px;
  }
  .prof-bio {
    font-size: 13.5px; color: #9A7E6A;
    line-height: 1.72; max-width: 420px;
    margin: 0 auto;
  }

  /* ── STATS ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.12);
    border-radius: 12px;
    padding: 14px 10px;
    text-align: center;
    transition: transform 0.2s;
  }
  .stat-card:hover { transform: translateY(-2px); }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem; font-weight: 700;
    color: #F4611A;
  }
  .stat-lbl {
    font-size: 11.5px;
    color: #9A7E6A;
    margin-top: 3px;
  }

  /* ── MAIN 2-COL GRID ── */
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .section-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.12);
    border-radius: 16px;
    padding: 22px;
  }
  .section-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1rem; color: #1A1209;
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }

  /* Activity rows */
  .activity-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 0;
    border-bottom: 1px solid rgba(244,97,26,0.08);
    font-size: 13px; color: #3D2B1A;
  }
  .activity-row:last-of-type { border-bottom: none; }
  .act-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #F4611A;
    flex-shrink: 0;
  }

  /* Perk rows */
  .perk-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: #FFFAF5;
    margin-bottom: 7px;
    font-size: 13px; color: #3D2B1A;
  }
  .perk-check {
    width: 20px; height: 20px;
    border-radius: 50%;
    background: #FFF0E8; color: #C44D12;
    font-size: 11px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* Loyalty bar */
  .loyalty-box {
    margin-top: 16px;
    background: #FFF0E8;
    border-radius: 10px;
    padding: 14px;
  }
  .loyalty-label {
    font-size: 10.5px; font-weight: 600;
    color: #C44D12; text-transform: uppercase;
    letter-spacing: 0.07em; margin-bottom: 4px;
  }
  .loyalty-pts {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem; font-weight: 700;
    color: #F4611A;
  }
  .loyalty-sub {
    font-size: 11.5px; color: #9A7E6A;
    margin-top: 2px;
  }
  .loyalty-track {
    margin-top: 10px;
    background: #fff;
    border-radius: 6px;
    height: 6px; overflow: hidden;
  }
  .loyalty-fill {
    height: 100%;
    background: #F4611A;
    border-radius: 6px;
    width: 84%;
  }

  /* Change Name button */
  .change-btn {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    background: #F4611A;
    color: #fff;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600;
    cursor: pointer;
    margin-top: 16px;
    transition: background 0.2s, transform 0.1s;
  }
  .change-btn:hover { background: #C44D12; }
  .change-btn:active { transform: scale(0.97); }
  .footer-tip {
    font-size: 12px; color: #9A7E6A;
    margin-top: 10px; text-align: center;
  }

  /* ── RESPONSIVE: MOBILE ── */
  @media (max-width: 640px) {
    .prof-hero { padding: 32px 16px 52px; }
    .prof-body { padding: 0 12px 32px; }
    .avatar-card { margin-top: -28px; padding: 24px 16px 20px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .main-grid { grid-template-columns: 1fr; }
    .prof-bio { font-size: 13px; }
  }

  /* ── RESPONSIVE: TABLET ── */
  @media (min-width: 641px) and (max-width: 900px) {
    .prof-body { padding: 0 20px 40px; }
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
    .main-grid { grid-template-columns: 1fr 1fr; }
  }

  /* ── RESPONSIVE: DESKTOP ── */
  @media (min-width: 901px) {
    .prof-body { padding: 0 0 48px; }
  }
`;

const STATS = [
  { num: "18",   label: "Orders" },
  { num: "4.9★", label: "Rating" },
  { num: "₹3.8k",label: "Spent" },
  { num: "Gold", label: "Tier" },
];

const ACTIVITY = [
  "Ordered Chicken Biryani",
  "Rated Pizza 5 stars",
  "Saved Burger Combo",
  "Reviewed Paneer Tikka",
];

const PERKS = [
  "Free delivery on select orders",
  "Exclusive member discounts",
  "Priority customer support",
  "Early access to new dishes",
  "Monthly loyalty rewards",
];

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const initials = user
    .split(" ")
    .map((w) => w[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <>
      <style>{css}</style>

      <div className="profile-page">

        {/* ── HERO ── */}
        <div className="prof-hero">
          <div className="prof-pill">
            <span style={{ fontSize: 14 }}>👤</span>
            Account Dashboard
          </div>
          <h1>Your Profile</h1>
          <p>Manage your FoodieHub account &amp; preferences</p>
        </div>

        <div className="prof-body">

          {/* ── AVATAR CARD ── */}
          <div className="avatar-card">
            <div className="avatar-ring">
              {photo ? (
                <img src={photo} alt="profile" />
              ) : (
                initials || user.charAt(0).toUpperCase()
              )}
            </div>

            <label className="upload-pill">
              <span style={{ fontSize: 14 }}>📷</span>
              Upload Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoChange}
              />
            </label>

            <div className="prof-name">{user}</div>

            <div className="gold-badge">
              <span style={{ fontSize: 13 }}>🍽</span>
              Gold Foodie Member
            </div>

            <p className="prof-bio">
              Hey {user}! You're enjoying a premium food experience with
              FoodieHub. Your preferences help us recommend the best dishes
              just for you.
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── MAIN GRID ── */}
          <div className="main-grid">

            {/* Activity column */}
            <div className="section-card">
              <h3>
                <span style={{ fontSize: 16 }}>🧾</span>
                Recent Activity
              </h3>

              {ACTIVITY.map((a) => (
                <div key={a} className="activity-row">
                  <span className="act-dot" />
                  {a}
                </div>
              ))}

              <button
                className="change-btn"
                onClick={() => setUser("Sairam")}
              >
                Change Name
              </button>

              <div className="footer-tip">
                Keep your profile updated for better recommendations 🍽
              </div>
            </div>

            {/* Perks column */}
            <div className="section-card">
              <h3>
                <span style={{ fontSize: 16 }}>🎁</span>
                Member Benefits
              </h3>

              {PERKS.map((p) => (
                <div key={p} className="perk-row">
                  <span className="perk-check">✓</span>
                  {p}
                </div>
              ))}

              <div className="loyalty-box">
                <div className="loyalty-label">Loyalty Points</div>
                <div className="loyalty-pts">840 pts</div>
                <div className="loyalty-sub">160 pts to Platinum tier</div>
                <div className="loyalty-track">
                  <div className="loyalty-fill" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}