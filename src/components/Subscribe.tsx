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
      style={{
        padding: '100px 40px',
        background: '#fff',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <span
          className="reveal"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            color: '#F07167',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Newsletter
        </span>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '38px',
            color: '#1A1A1A',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          Subscribe to get the{' '}
          <span style={{ color: '#F07167' }}>latest news update</span>
        </h2>
        <p
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '15px',
            color: '#888',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}
        >
          Get the latest menu updates, exclusive deals, and healthy eating tips delivered straight to your inbox. No spam, ever.
        </p>

        {submitted ? (
          <div
            className="reveal"
            style={{
              background: '#FFF5F4',
              border: '2px solid #F07167',
              borderRadius: '16px',
              padding: '24px 40px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              color: '#F07167',
              fontWeight: 600,
            }}
          >
            🎉 Thank you for subscribing! Stay tuned for delicious updates.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-2"
            style={{
              display: 'flex',
              gap: '0',
              maxWidth: '520px',
              margin: '0 auto',
              background: '#fff',
              borderRadius: '50px',
              padding: '6px 6px 6px 24px',
              boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(240,113,103,0.15)',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                color: '#333',
                background: 'transparent',
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '160px',
                height: '44px',
                borderRadius: '40px',
                flexShrink: 0,
                fontSize: '14px',
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
