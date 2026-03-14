import { useEffect, useRef } from 'react';
import aboutImg from '../assets/about-food.png';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '200+', label: 'Happy Customers' },
    { value: '50+', label: 'Menu Items' },
    { value: '5★', label: 'Average Rating' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div ref={sectionRef} style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
        {/* Left: Circular Image (Z-pattern start) */}
        <div
          style={{
            flex: '0 0 45%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Background blob */}
          <div
            style={{
              position: 'absolute',
              width: '440px',
              height: '440px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFF5F4 0%, #FFE8E6 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              border: '2px dashed rgba(240, 113, 103, 0.2)',
            }}
          />
          <img
            src={aboutImg}
            alt="Healthy meal for customer"
            className="reveal float-animation"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 20px 60px rgba(240, 113, 103, 0.2)',
            }}
          />

          {/* Stats floating card */}
          <div
            className="reveal reveal-delay-2"
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-10px',
              background: '#fff',
              borderRadius: '20px',
              padding: '20px 24px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              display: 'flex',
              gap: '24px',
              zIndex: 2,
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: '#F07167' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#999', whiteSpace: 'nowrap' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text content (Z-pattern end) */}
        <div style={{ flex: 1 }}>
          <div className="reveal" style={{ marginBottom: '12px' }}>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '12px',
                color: '#F07167',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#F07167' }} />
              About Us
            </span>
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: 1.2,
              color: '#1A1A1A',
              marginBottom: '24px',
            }}
          >
            Healthy meal for{' '}
            <span style={{ color: '#F07167' }}>customer</span>
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              color: '#888',
              lineHeight: 1.9,
              marginBottom: '24px',
            }}
          >
            Our passion is bringing you the freshest, most nutritious meals that don't compromise on taste. Every dish is crafted by our expert chefs using locally-sourced, organic ingredients — no artificial preservatives, no MSG, just pure flavour.
          </p>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              color: '#888',
              lineHeight: 1.9,
              marginBottom: '36px',
            }}
          >
            We believe that eating healthy should be a joy, not a chore. That's why we combine traditional recipes with modern nutritional science to create meals that nourish your body and delight your taste buds.
          </p>

          {/* Feature list */}
          <div className="reveal reveal-delay-2" style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['100% Natural Ingredients', 'No MSG & Preservatives', 'Fast & Free Delivery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: '#F07167',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#555', fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="#menu" className="btn-primary">
              Order Now
            </a>
            <a href="#" className="btn-outline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
