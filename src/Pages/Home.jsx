import React, { useState, useEffect, useCallback } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

  .home-page {
    background: #FFFAF5;
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: #3D2B1A;
  }

  .hero {
    background: #1A1209;
    padding: 52px 44px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: rgba(244,97,26,0.07);
    pointer-events: none;
  }
  .hero-inner { max-width: 680px; position: relative; z-index: 1; }

  .hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(244,97,26,0.16);
    color: #F4611A;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 18px;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.85rem, 4vw, 2.9rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.18;
    margin: 0 0 16px;
  }
  .hero h1 em { color: #F4611A; font-style: normal; }

  .hero-sub {
    color: rgba(255,255,255,0.58);
    font-size: 15px;
    line-height: 1.75;
    margin: 0 0 28px;
    max-width: 540px;
  }

  .hero-stats { display: flex; flex-wrap: wrap; gap: 10px; }
  .hero-stat {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.82);
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .stat-dot {
    width: 7px; height: 7px;
    background: #F4611A;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* body */
  .home-body {
    padding: 40px 44px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* why section */
  .why-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.13);
    border-radius: 16px;
    padding: 30px 34px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }
  .why-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #1A1209;
    margin: 0 0 12px;
  }
  .why-text {
    font-size: 14px;
    color: #9A7E6A;
    line-height: 1.8;
    margin: 0;
  }
  .why-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
  .why-list li { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 500; color: #3D2B1A; }
  .why-check {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: #FFF0E8;
    color: #C44D12;
    font-size: 11px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* section heading */
  .sec-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #F4611A;
    background: #FFF0E8;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  .sec-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.3rem, 3vw, 1.75rem);
    color: #1A1209;
    margin: 0 0 20px;
  }

  /* menu */
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
    gap: 16px;
    margin-bottom: 44px;
  }
  .menu-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.12);
    border-radius: 14px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .menu-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(244,97,26,0.09);
  }
  .menu-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 4px; height: 100%;
    background: #F4611A;
    border-radius: 14px 0 0 14px;
  }
  .menu-badge {
    align-self: flex-start;
    background: #FFF0E8;
    color: #C44D12;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 6px;
  }
  .menu-card h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1A1209;
    line-height: 1.45;
    margin: 0;
  }
  .menu-desc {
    font-size: 12.5px;
    color: #9A7E6A;
    line-height: 1.65;
    margin: 0;
    flex: 1;
  }
  .menu-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid rgba(244,97,26,0.1);
    margin-top: 4px;
  }
  .menu-price { font-size: 17px; font-weight: 700; color: #F4611A; }
  .btn-cart {
    background: #F4611A;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
  }
  .btn-cart:hover { background: #C44D12; }
  .btn-cart:active { transform: scale(0.96); }

  /* testimonials */
  .testi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 14px;
  }
  .testi-card {
    background: #fff;
    border: 1px solid rgba(244,97,26,0.12);
    border-radius: 12px;
    padding: 20px 22px;
    position: relative;
  }
  .testi-quote-mark {
    position: absolute;
    top: 12px; right: 16px;
    font-size: 30px;
    color: #F4611A;
    opacity: 0.18;
    font-family: Georgia, serif;
    line-height: 1;
  }
  .testi-text {
    font-size: 13.5px;
    color: #5A3E2B;
    line-height: 1.72;
    margin: 0 0 16px;
    font-style: italic;
  }
  .testi-author { display: flex; align-items: center; gap: 10px; }
  .testi-avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: #F4611A;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .testi-name { font-size: 13px; font-weight: 600; color: #1A1209; }
  .testi-stars { font-size: 11px; color: #F4611A; letter-spacing: 1px; margin-top: 2px; }

  /* ── MOBILE ── */
  @media (max-width: 640px) {
    .hero { padding: 28px 18px; }
    .home-body { padding: 24px 16px; }
    .why-card { grid-template-columns: 1fr; gap: 18px; padding: 20px; }
    .menu-grid { grid-template-columns: 1fr; }
    .testi-grid { grid-template-columns: 1fr; }
    .hero-stat { font-size: 12px; padding: 7px 11px; }
    .hero h1 { font-size: 1.65rem; }
  }

  /* ── TABLET ── */
  @media (min-width: 641px) and (max-width: 1024px) {
    .hero { padding: 40px 28px; }
    .home-body { padding: 30px 24px; }
    .menu-grid { grid-template-columns: repeat(2, 1fr); }
    .testi-grid { grid-template-columns: repeat(2, 1fr); }
    .why-card { padding: 24px 24px; gap: 24px; }
  }
`;

const testimonials = [
  { text: "FoodieHub delivers amazing food every time. Super fast and always hot!", author: "Ravi" },
  { text: "Best online food service I've used. Highly recommended!", author: "Priya" },
  { text: "The food quality is always consistent and delivery is super fast.", author: "Arjun" },
  { text: "I ordered biryani and it was still hot when it arrived. Amazing service!", author: "Kavya" },
  { text: "Best app for ordering food. Prices are fair and taste is excellent.", author: "Rohit" },
  { text: "Customer support is very helpful and delivery partners are polite.", author: "Sneha" },
];

const whyPoints = [
  "Fresh ingredients sourced daily",
  "Expert chefs with authentic recipes",
  "Fast & reliable delivery network",
  "Affordable pricing for premium taste",
];

const heroStats = ["30 min delivery", "4.8 star rating", "100+ dishes", "Free delivery"];

export default function Home({ dispatch }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const addToCart = useCallback(
    (item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    [dispatch]
  );

  return (
    <>
      <style>{css}</style>

      <div className="home-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-pill">
              <span style={{ fontSize: 15 }}>🍽</span>
              Welcome to FoodieHub
            </div>
            <h1>
              Delicious Food, <em>Delivered</em> Fresh &amp; Fast
            </h1>
            <p className="hero-sub">
              Experience restaurant-quality meals prepared by expert chefs.
              From spicy Indian curries to global cuisines, we bring happiness
              to your plate in every bite.
            </p>
            <div className="hero-stats">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s}>
                  <span className="stat-dot" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="home-body">

          {/* WHY CHOOSE US */}
          <div className="why-card">
            <div>
              <h3 className="why-title">Why Choose FoodieHub?</h3>
              <p className="why-text">
                We don't just deliver food — we deliver experiences. Every dish is
                freshly prepared, hygienically packed, and delivered with care.
              </p>
            </div>
            <ul className="why-list">
              {whyPoints.map((p) => (
                <li key={p}>
                  <span className="why-check">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* MENU */}
          <span className="sec-label">Today's Specials</span>
          <h2 className="sec-title">Fresh Picks for You</h2>

          <div className="menu-grid">
            {data.map((item) => (
              <div key={item.id} className="menu-card">
                <span className="menu-badge">Chef Special</span>
                <h4>🍛 {item.title.slice(0, 35)}</h4>
                <p className="menu-desc">
                  A freshly prepared signature dish made with premium ingredients,
                  perfect for lunch or dinner cravings.
                </p>
                <div className="menu-footer">
                  <span className="menu-price">₹{item.id * 50 + 199}</span>
                  <button className="btn-cart" onClick={() => addToCart(item.title)}>
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TESTIMONIALS */}
          <span className="sec-label">Reviews</span>
          <h2 className="sec-title">What Customers Say</h2>

          <div className="testi-grid">
            {testimonials.map((t) => (
              <div key={t.author} className="testi-card">
                <div className="testi-quote-mark">"</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.author[0]}</div>
                  <div>
                    <div className="testi-name">{t.author}</div>
                    <div className="testi-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}