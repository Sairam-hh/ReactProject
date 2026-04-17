import { useState } from "react";

const styles_css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .contact-page {
    min-height: 100vh;
    background: #0d0b08;
    font-family: 'DM Sans', sans-serif;
    padding: 0;
    overflow-x: hidden;
    position: relative;
  }

  /* Warm ambient blobs */
  .contact-page::before {
    content: '';
    position: fixed;
    top: -120px;
    left: -120px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    animation: drift 8s ease-in-out infinite alternate;
  }
  .contact-page::after {
    content: '';
    position: fixed;
    bottom: -100px;
    right: -80px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    animation: drift 10s ease-in-out infinite alternate-reverse;
  }

  @keyframes drift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(30px, 20px) scale(1.1); }
  }

  .contact-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }

  /* ── HEADER ── */
  .contact-header {
    text-align: center;
    margin-bottom: 52px;
    animation: fadeUp 0.7s ease both;
  }
  .contact-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(249,115,22,0.15);
    border: 1px solid rgba(249,115,22,0.35);
    color: #fb923c;
    padding: 5px 16px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .contact-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 900;
    color: #fef3c7;
    line-height: 1.1;
    margin-bottom: 14px;
    letter-spacing: -0.02em;
  }
  .contact-title span {
    color: #f97316;
    display: inline-block;
    position: relative;
  }
  .contact-title span::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineReveal 0.8s 0.5s ease forwards;
  }
  @keyframes lineReveal { to { transform: scaleX(1); } }

  .contact-sub {
    font-size: 15px;
    color: #a8a097;
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ── GRID ── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: start;
  }

  /* ── CARDS ── */
  .contact-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 36px 32px;
    backdrop-filter: blur(12px);
    animation: fadeUp 0.7s ease both;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .contact-card:hover {
    border-color: rgba(249,115,22,0.25);
    box-shadow: 0 20px 60px rgba(249,115,22,0.08);
  }
  .contact-card:nth-child(2) { animation-delay: 0.15s; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── SECTION TITLES ── */
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: #fef3c7;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section-title + .section-title { margin-top: 28px; }

  /* ── FORM ── */
  .form-intro {
    background: rgba(249,115,22,0.08);
    border-left: 3px solid #f97316;
    border-radius: 0 10px 10px 0;
    padding: 14px 16px;
    font-size: 13px;
    color: #c4b49a;
    line-height: 1.65;
    margin-bottom: 8px;
  }
  .form-tip {
    font-size: 12px;
    color: #78716c;
    margin-bottom: 24px;
    padding-left: 4px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }
  .form-label {
    font-size: 11px;
    font-weight: 600;
    color: #a8a097;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
  .form-input,
  .form-textarea {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #fef3c7;
    outline: none;
    transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    width: 100%;
  }
  .form-input::placeholder,
  .form-textarea::placeholder { color: #57534e; }
  .form-input:focus,
  .form-textarea:focus {
    border-color: #f97316;
    background: rgba(249,115,22,0.06);
    box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
  }
  .form-textarea {
    min-height: 110px;
    resize: none;
  }

  .form-note {
    font-size: 11px;
    color: #78716c;
    margin-bottom: 16px;
    padding-left: 2px;
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    box-shadow: 0 4px 20px rgba(249,115,22,0.35);
  }
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(249,115,22,0.45);
    background: linear-gradient(135deg, #fb923c, #f97316);
  }
  .submit-btn:active { transform: translateY(0); }

  /* ── INFO SIDE ── */
  .info-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 13px;
    color: #d6cfc4;
    margin-bottom: 8px;
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
  }
  .info-chip:hover {
    background: rgba(249,115,22,0.08);
    border-color: rgba(249,115,22,0.25);
    color: #fef3c7;
  }

  .highlight-box {
    background: rgba(249,115,22,0.07);
    border: 1px solid rgba(249,115,22,0.15);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 13px;
    color: #c4b49a;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .quick-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-bottom: 4px;
  }
  .quick-chip {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 10px 8px;
    font-size: 12px;
    color: #a8a097;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1.4;
  }
  .quick-chip:hover {
    background: rgba(249,115,22,0.12);
    border-color: rgba(249,115,22,0.3);
    color: #fb923c;
    transform: translateY(-2px);
  }

  .faq-item {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 13px;
    color: #a8a097;
    margin-bottom: 8px;
    line-height: 1.55;
  }
  .faq-item strong {
    display: block;
    color: #d6cfc4;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 20px 0;
  }

  /* ── SUCCESS TOAST ── */
  .toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%) translateY(80px);
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: #fff;
    padding: 14px 28px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 8px 30px rgba(22,163,74,0.4);
    z-index: 999;
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
    white-space: nowrap;
  }
  .toast.show { transform: translateX(-50%) translateY(0); }

  /* ── RESPONSIVE ── */

  /* Tablet: ~768px */
  @media (max-width: 900px) {
    .contact-inner { padding: 48px 20px 64px; }
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .contact-card { padding: 28px 24px; }
    .quick-grid { grid-template-columns: 1fr 1fr 1fr; }
  }

  /* Mobile: ~480px */
  @media (max-width: 540px) {
    .contact-inner { padding: 36px 16px 56px; }
    .contact-header { margin-bottom: 36px; }
    .contact-card { padding: 22px 18px; border-radius: 18px; }
    .quick-grid { grid-template-columns: 1fr 1fr; }
    .submit-btn { font-size: 14px; padding: 13px; }
    .contact-title { letter-spacing: -0.01em; }
    .section-title { font-size: 16px; }
    .form-input, .form-textarea { padding: 11px 14px; font-size: 13px; }
    .toast { font-size: 13px; padding: 12px 22px; }
  }

  /* Very small screens */
  @media (max-width: 360px) {
    .contact-inner { padding: 28px 12px 48px; }
    .quick-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3200);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <>
      <style>{styles_css}</style>

      <div className="contact-page">
        <div className="contact-inner">

          {/* HEADER */}
          <div className="contact-header">
            <div className="contact-badge">📩 Contact Us</div>
            <h1 className="contact-title">
              Let's <span>Talk Food</span>
            </h1>
            <p className="contact-sub">
              We're here 24/7 — for orders, feedback, and everything in between 🍽️
            </p>
          </div>

          {/* GRID */}
          <div className="contact-grid">

            {/* LEFT — FORM */}
            <div className="contact-card">
              <div className="section-title">💬 Send us a message</div>

              <p className="form-intro">
                Whether it's feedback, a complaint, or a food suggestion — our team
                is always ready to improve your FoodieHub experience.
              </p>
              <p className="form-tip">⚡ Tip: Be specific so we can respond faster.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us what's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <p className="form-note">
                  📩 Your feedback helps us improve food quality, delivery speed & service.
                </p>

                <button className="submit-btn" type="submit">
                  Send Message 🍽️
                </button>
              </form>
            </div>

            {/* RIGHT — INFO */}
            <div className="contact-card">
              <div className="section-title">🏠 Restaurant Info</div>

              <div className="info-chip">📍 12 Gourmet Lane, Food City</div>
              <div className="info-chip">📞 +91 7995358828</div>
              <div className="info-chip">📧 support@foodiehub.in</div>
              <div className="info-chip">⏰ 10:00 AM – 11:00 PM</div>

              <div className="divider" />

              <div className="section-title">🚀 Support Highlights</div>
              <div className="highlight-box">✔ Fast response within 1–2 hours</div>
              <div className="highlight-box">✔ Refund & order assistance</div>
              <div className="highlight-box">✔ 24/7 customer support</div>

              <div className="divider" />

              <div className="section-title">⚡ Quick Help</div>
              <div className="quick-grid">
                <div className="quick-chip">📦<br/>Track Order</div>
                <div className="quick-chip">💸<br/>Refund Request</div>
                <div className="quick-chip">🍽<br/>Report Issue</div>
              </div>

              <div className="divider" />

              <div className="section-title">❓ FAQ</div>
              <div className="faq-item">
                <strong>How long does delivery take?</strong>
                Usually 30–40 minutes depending on your location.
              </div>
              <div className="faq-item">
                <strong>When will my refund arrive?</strong>
                Refunds are processed within 2–5 business days.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TOAST */}
      <div className={`toast${toast ? " show" : ""}`}>
        ✅ Message sent! We'll get back to you shortly.
      </div>
    </>
  );
}