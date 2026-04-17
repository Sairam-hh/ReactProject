import { Link, Outlet, useLocation } from "react-router-dom";

const styles_css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .srv-page {
    min-height: 100vh;
    background: #0d0b08;
    font-family: 'DM Sans', sans-serif;
    padding: 0;
    overflow-x: hidden;
    position: relative;
  }

  .srv-page::before {
    content: '';
    position: fixed;
    top: -140px; left: -100px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
    animation: drift 9s ease-in-out infinite alternate;
  }
  .srv-page::after {
    content: '';
    position: fixed;
    bottom: -80px; right: -80px;
    width: 380px; height: 380px;
    background: radial-gradient(circle, rgba(251,191,36,0.10) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
    animation: drift 11s ease-in-out infinite alternate-reverse;
  }

  @keyframes drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(28px,18px) scale(1.1); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .srv-inner {
    position: relative; z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }

  /* ── HEADER ── */
  .srv-header { margin-bottom: 44px; animation: fadeUp 0.6s ease both; }

  .srv-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(249,115,22,0.15);
    border: 1px solid rgba(249,115,22,0.35);
    color: #fb923c;
    padding: 4px 14px; border-radius: 100px;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 16px;
  }

  .srv-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 5.5vw, 58px);
    font-weight: 900; color: #fef3c7;
    line-height: 1.1; letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  .srv-title em {
    color: #f97316; font-style: normal;
    text-decoration: underline;
    text-decoration-color: rgba(249,115,22,0.4);
    text-underline-offset: 5px;
  }

  .srv-sub {
    font-size: 14px; color: #a8a097;
    max-width: 560px; line-height: 1.7;
  }

  /* ── SECTION TITLE ── */
  .sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700; color: #fef3c7;
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }

  /* ── SERVICE CARDS GRID ── */
  .srv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .srv-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 22px 20px;
    border-left: 3px solid #f97316;
    animation: fadeUp 0.6s ease both;
    transition: background 0.25s, border-color 0.25s, transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .srv-card:nth-child(2) { animation-delay: 0.08s; }
  .srv-card:nth-child(3) { animation-delay: 0.16s; }
  .srv-card:nth-child(4) { animation-delay: 0.24s; }

  .srv-card:hover {
    background: rgba(249,115,22,0.07);
    border-color: rgba(249,115,22,0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(249,115,22,0.12);
  }

  .srv-card-icon {
    font-size: 24px; margin-bottom: 10px; display: block;
  }
  .srv-card-title {
    font-weight: 600; font-size: 14px;
    color: #fef3c7; margin-bottom: 7px;
  }
  .srv-card-text {
    font-size: 12px; color: #a8a097; line-height: 1.65;
  }

  /* ── SECTION CARD (How it works / Why us) ── */
  .section-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 28px 26px;
    margin-bottom: 20px;
    animation: fadeUp 0.6s 0.1s ease both;
  }

  /* ── STEPS ── */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }

  .step-item {
    background: rgba(249,115,22,0.07);
    border: 1px solid rgba(249,115,22,0.15);
    border-radius: 14px;
    padding: 16px 14px;
    position: relative;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  .step-item:hover {
    background: rgba(249,115,22,0.12);
    border-color: rgba(249,115,22,0.3);
    transform: translateY(-3px);
  }

  .step-num {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 900;
    color: rgba(249,115,22,0.3);
    position: absolute; top: 10px; right: 14px;
    line-height: 1;
  }
  .step-label {
    font-size: 11px; font-weight: 600;
    color: #f97316; letter-spacing: 0.07em;
    text-transform: uppercase; margin-bottom: 6px;
  }
  .step-text {
    font-size: 13px; color: #c4b49a; line-height: 1.55;
  }

  /* ── WHY US LIST ── */
  .why-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  .why-list li {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 13px; color: #c4b49a; line-height: 1.5;
    transition: background 0.2s, border-color 0.2s;
  }
  .why-list li:hover {
    background: rgba(249,115,22,0.07);
    border-color: rgba(249,115,22,0.2);
    color: #fef3c7;
  }

  /* ── TABS ── */
  .tabs-row {
    display: flex; gap: 10px; flex-wrap: wrap;
    margin-bottom: 20px;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .tab-link {
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.1);
    color: #a8a097;
    font-weight: 500; font-size: 13px;
    background: rgba(255,255,255,0.04);
    transition: all 0.2s;
    display: inline-flex; align-items: center; gap: 6px;
  }
  .tab-link:hover {
    border-color: rgba(249,115,22,0.3);
    color: #fb923c;
    background: rgba(249,115,22,0.07);
  }
  .tab-link.active {
    background: linear-gradient(135deg, #f97316, #ea580c);
    border-color: transparent;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(249,115,22,0.35);
  }

  /* ── OUTLET BOX ── */
  .outlet-box {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 28px 26px;
    animation: fadeUp 0.6s 0.25s ease both;
    min-height: 80px;
  }
  .outlet-placeholder {
    font-size: 13px; color: #57534e;
    text-align: center; padding: 20px 0;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .srv-inner { padding: 48px 20px 64px; }
    .srv-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
    .section-card { padding: 22px 20px; }
    .outlet-box { padding: 22px 20px; }
  }

  @media (max-width: 600px) {
    .srv-inner { padding: 36px 16px 56px; }
    .srv-title { letter-spacing: -0.01em; }
    .srv-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .steps-grid { grid-template-columns: 1fr 1fr; }
    .why-list { grid-template-columns: 1fr; }
    .section-card { padding: 18px 16px; border-radius: 16px; }
    .outlet-box { padding: 18px 16px; border-radius: 16px; }
    .tab-link { padding: 9px 14px; font-size: 12px; }
  }

  @media (max-width: 420px) {
    .srv-inner { padding: 28px 12px 48px; }
    .srv-grid { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr; }
    .srv-card { border-radius: 14px; }
  }
`;

export default function Services() {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);

  return (
    <>
      <style>{styles_css}</style>

      <div className="srv-page">
        <div className="srv-inner">

          {/* HEADER */}
          <div className="srv-header">
            <div className="srv-badge">🍴 What We Offer</div>
            <h1 className="srv-title">Our <em>Services</em></h1>
            <p className="srv-sub">
              FoodieHub is designed to deliver a complete food experience — from fine dining
              to doorstep delivery. Every service is crafted with quality, speed, and
              customer satisfaction in mind.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="srv-grid">
            {[
              { icon: "🍽", title: "Dining Experience", text: "Enjoy premium in-restaurant dining with curated menus, elegant ambiance, and world-class hospitality." },
              { icon: "🚚", title: "Doorstep Delivery", text: "Hot and fresh meals delivered within 30–40 minutes with real-time tracking and safe packaging." },
              { icon: "🎉", title: "Event Catering", text: "Customized catering for weddings, parties, and corporate events with flexible menu options." },
              { icon: "🥗", title: "Healthy Food Plans", text: "Nutrition-focused meals including vegan, keto, and diet-friendly plans prepared by experts." },
            ].map((s) => (
              <div className="srv-card" key={s.title}>
                <span className="srv-card-icon">{s.icon}</span>
                <div className="srv-card-title">{s.title}</div>
                <div className="srv-card-text">{s.text}</div>
              </div>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <div className="section-card">
            <div className="sec-title">⚙️ How It Works</div>
            <div className="steps-grid">
              {[
                "Choose your favorite food or service",
                "Place your order in just a few clicks",
                "We prepare fresh meals instantly",
                "Fast delivery or dine-in service",
              ].map((text, i) => (
                <div className="step-item" key={i}>
                  <span className="step-num">0{i + 1}</span>
                  <div className="step-label">Step {i + 1}</div>
                  <div className="step-text">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="section-card">
            <div className="sec-title">⭐ Why Customers Love Us</div>
            <ul className="why-list">
              {[
                "✔ High-quality ingredients sourced daily",
                "✔ Experienced chefs with authentic recipes",
                "✔ Fast and reliable delivery system",
                "✔ Affordable pricing for premium taste",
                "✔ 24/7 customer support",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* NAV TABS */}
          <div className="tabs-row">
            {[
              { to: "dining",   label: "🍽 Dining" },
              { to: "delivery", label: "🚚 Delivery" },
              { to: "catering", label: "🎉 Catering" },
            ].map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className={`tab-link${isActive(t.to) ? " active" : ""}`}
              >
                {t.label}
              </Link>
            ))}
          </div>

          {/* OUTLET */}
          <div className="outlet-box">
            <Outlet />
          </div>

        </div>
      </div>
    </>
  );
}