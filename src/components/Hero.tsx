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
    <section
      id="home"
      ref={sectionRef}
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '160px 40px 100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
        }}
      >
        {/* Left: Text content */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
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
              <span
                style={{
                  display: 'inline-block',
                  width: '32px',
                  height: '2px',
                  background: '#F07167',
                }}
              />
              Food Delivery
            </span>
          </div>

          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '56px',
              lineHeight: 1.15,
              color: '#1A1A1A',
              marginBottom: '20px',
            }}
          >
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
        <div
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: 'absolute',
              width: '520px',
              height: '520px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFF5F4 0%, #FFE8E6 100%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '560px',
              height: '560px',
              borderRadius: '50%',
              border: '2px dashed rgba(240, 113, 103, 0.2)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Hero circular image */}
          <img
            src={heroImg}
            alt="Delicious healthy food bowl"
            className="float-animation reveal"
            style={{
              width: '460px',
              height: '460px',
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 20px 60px rgba(240, 113, 103, 0.25)',
            }}
          />

          {/* Floating badge */}
          <div
            className="reveal reveal-delay-2"
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '10px',
              zIndex: 2,
              background: '#fff',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '180px',
            }}
          >
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

          {/* Decorative dots top-right */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 0 }}>
            {[...Array(3)].map((_, row) =>
              [...Array(3)].map((_, col) => (
                <span
                  key={`${row}-${col}`}
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'rgba(240,113,103,0.3)',
                    margin: '4px',
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
