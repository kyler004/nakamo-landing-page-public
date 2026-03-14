import { useEffect, useRef } from 'react';
import heroImg from '../assets/hero-food.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.querySelectorAll('.reveal').forEach((el) => {
          el.classList.add('visible');
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="hero-section">
      <div className="hero-inner">
        {/* Left: Text content */}
        <div className="hero-text">
          <div className="reveal" style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                color: '#F07167',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ display: 'inline-block', width: '32px', height: '2px', background: '#F07167' }} />
              Food Delivery
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 hero-headline">
            Enjoy{' '}
            <span style={{ color: '#F07167' }}>Delicious</span>
            <br />
            Food in your
            <br />
            healty life
          </h1>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              color: '#666666',
              lineHeight: 1.8,
              maxWidth: '420px',
              marginBottom: '24px',
            }}
          >
            We provide the finest <strong style={{ color: '#F07167' }}>fresh food</strong> and
            delicious meals made with carefully selected ingredients to support your healthy lifestyle.
          </p>

          {/* Stats badge */}
          <div
            className="reveal reveal-delay-2"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: '#fff',
              borderRadius: '50px',
              padding: '10px 20px 10px 10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: `hsl(${i * 40 + 10}, 70%, 60%)`,
                    border: '2px solid #fff',
                    marginLeft: i > 1 ? '-8px' : '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  {['S', 'K', 'A'][i - 1]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: '#1A1A1A' }}>
                200+ Happy Customers
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#666' }}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <a href="#menu" className="btn-primary">
              Order Now
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-image-col">
          <div className="hero-circle-bg" />
          <div className="hero-circle-dashed" />

          <img
            src={heroImg}
            alt="Delicious healthy food bowl"
            className="hero-img float-animation reveal"
          />

          {/* Floating badge */}
          <div className="hero-badge reveal reveal-delay-2">
            <div
              style={{
                width: '44px',
                height: '44px',
                background: '#FFF5F4',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              🍽️
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#1A1A1A' }}>
                200+
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#666' }}>
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
