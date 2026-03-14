import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: 'No MSG Food',
    description: 'All our dishes are prepared with 100% natural ingredients — no artificial flavours, no MSG, just pure goodness.',
  },
  {
    id: 2,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    title: 'Free Shipping',
    description: 'Enjoy free delivery on your first order and all orders above $25. Fast, reliable, and always on time to your door.',
  },
  {
    id: 3,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.43 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    title: 'Easy to Order',
    description: 'Order in just a few taps. Browse our menu, select your meal, and we\'ll handle the rest. Simple, quick, delicious.',
  },
];

export default function Services() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        padding: '100px 40px',
        background: '#FFF5F4',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '12px',
              color: '#F07167',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Services
          </span>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              color: '#1A1A1A',
            }}
          >
            Our <span style={{ color: '#F07167' }}>Awesome</span> Services
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px 28px',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(240,113,103,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#F07167',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 20px rgba(240,113,103,0.35)',
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1A1A1A',
                  marginBottom: '14px',
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#888',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                {service.description}
              </p>

              <button className="btn-primary" style={{ width: '120px', height: '42px', fontSize: '13px' }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
