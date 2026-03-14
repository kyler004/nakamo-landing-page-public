import { useEffect, useRef, useState } from 'react';

export default function Subscribe() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{ padding: '100px 20px', background: '#fff', textAlign: 'center' }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <span
          className="reveal section-label"
          style={{ display: 'block', marginBottom: '16px' }}
        >
          Newsletter
        </span>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 5vw, 38px)',
            color: '#1A1A1A', lineHeight: 1.2, marginBottom: '16px',
          }}
        >
          Subscribe to get the{' '}
          <span style={{ color: '#F07167' }}>latest news update</span>
        </h2>
        <p
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '15px',
            color: '#888', lineHeight: 1.8, marginBottom: '40px',
          }}
        >
          Get the latest menu updates, exclusive deals, and healthy eating tips delivered straight to your inbox. No spam, ever.
        </p>

        {submitted ? (
          <div
            className="reveal"
            style={{
              background: '#FFF5F4', border: '2px solid #F07167',
              borderRadius: '16px', padding: '24px 40px',
              fontFamily: 'Poppins, sans-serif', fontSize: '16px',
              color: '#F07167', fontWeight: 600,
            }}
          >
            🎉 Thank you for subscribing! Stay tuned for delicious updates.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-2 subscribe-form"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="subscribe-input"
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ borderRadius: '40px', flexShrink: 0, fontSize: '14px' }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
