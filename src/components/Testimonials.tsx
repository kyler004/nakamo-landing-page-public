import { useEffect, useRef, useState } from 'react';
import avatarShaina from '../assets/avatar-shaina.png';

const testimonials = [
  {
    id: 1,
    name: 'Shaina Ramsey',
    role: 'Food Blogger',
    avatar: avatarShaina,
    text: 'Nakamo has completely changed how I eat. The meals are fresh, delicious, and always arrive on time. I love that there are no preservatives — I can taste the quality in every bite!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Kim Amat',
    role: 'Fitness Coach',
    text: `The portion sizes are perfect and the nutritional balance is spot-on. As a fitness coach, I'm very picky about what I eat, and Nakamo consistently exceeds my expectations.`,
    rating: 5,
    initials: 'KA',
    color: '#4CAF50',
  },
  {
    id: 3,
    name: 'Syavera Romanad',
    role: 'Working Mom',
    text: 'I\'ve been ordering for my whole family for 3 months now. The kids love it, my husband loves it, and I love how easy it is to order. Truly a game changer for busy families!',
    rating: 5,
    initials: 'SR',
    color: '#9C27B0',
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Software Engineer',
    text: 'Perfect for my busy schedule. The food is always fresh, the packaging is eco-friendly, and the delivery is lightning fast. I\'ve recommended Nakamo to my entire team!',
    rating: 5,
    initials: 'DC',
    color: '#FF9800',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= rating ? '#F07167' : '#e5e5e5'}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: '#FFF5F4',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: heading + arrows */}
        <div style={{ flex: '0 0 300px', paddingTop: '8px' }}>
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
              marginBottom: '12px',
            }}
          >
            Testimonial
          </span>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '38px',
              lineHeight: 1.25,
              color: '#1A1A1A',
              marginBottom: '20px',
            }}
          >
            What Are People<br />
            Saying{' '}
            <span style={{ color: '#F07167' }}>About Us</span>
          </h2>

          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}
          >
            Don't just take our word for it — hear from our happy customers who've made Nakamo a part of their daily routine.
          </p>

          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              title="Previous"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${canScrollLeft ? '#F07167' : '#e5e5e5'}`,
                background: canScrollLeft ? '#F07167' : '#fff',
                color: canScrollLeft ? '#fff' : '#ccc',
                cursor: canScrollLeft ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              title="Next"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${canScrollRight ? '#F07167' : '#e5e5e5'}`,
                background: canScrollRight ? '#F07167' : '#fff',
                color: canScrollRight ? '#fff' : '#ccc',
                cursor: canScrollRight ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="testimonials-scroll"
          style={{
            flex: 1,
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                minWidth: '300px',
                maxWidth: '300px',
                background: '#fff',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                scrollSnapAlign: 'start',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(240,113,103,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <StarRating rating={t.rating} />
              </div>

              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #F07167',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: t.color || '#F07167',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      flexShrink: 0,
                      border: '2px solid transparent',
                    }}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#1A1A1A' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#F07167' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
