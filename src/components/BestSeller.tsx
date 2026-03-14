import { useEffect, useRef } from 'react';
import productToast from '../assets/product-toast.png';
import productRoti from '../assets/product-roti.png';
import productNasi from '../assets/product-nasi.png';

const products = [
  {
    id: 1,
    name: 'Kapi Susu Butter',
    price: '$12.99',
    rating: 4.8,
    reviews: 24,
    tag: 'Instant',
    image: productToast,
    description: 'Creamy butter toast with fresh seasonal berries and a hint of vanilla cream. A perfect healthy breakfast treat.',
  },
  {
    id: 2,
    name: 'Roti Gambung Soklat',
    price: '$8.50',
    rating: 4.9,
    reviews: 31,
    tag: 'Sweet',
    image: productRoti,
    description: 'Soft chocolate-filled rolled bread dusted with fine sugar coating. A favourite Indonesian bakery delight.',
  },
  {
    id: 3,
    name: 'Nasi Olie Special',
    price: '$15.99',
    rating: 4.7,
    reviews: 18,
    tag: 'No MSG/G',
    image: productNasi,
    description: 'Our signature special rice bowl loaded with fresh vegetables, proteins, and a perfectly cooked sunny-side egg.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star <= Math.round(rating) ? '#F07167' : '#e0e0e0'}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#999', marginLeft: '4px' }}>
        ({rating})
      </span>
    </div>
  );
}

export default function BestSeller() {
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
      id="menu"
      style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
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
          Best Seller
        </span>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '40px',
            color: '#1A1A1A',
            lineHeight: 1.2,
          }}
        >
          Our{' '}
          <span style={{ color: '#F07167' }}>Best Seller</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
      >
        {products.map((product, i) => (
          <article
            key={product.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`reveal reveal-delay-${i + 1}`}
            style={{
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(0,0,0,0.07)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(240,113,103,0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 30px rgba(0,0,0,0.07)';
            }}
          >
            {/* Card Image */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)'; }}
              />
              {/* Tag badge */}
              <span
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: '#F07167',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '11px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {product.tag}
              </span>
            </div>

            {/* Card body */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1A1A1A' }}>
                  {product.name}
                </h3>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: '#F07167' }}>
                  {product.price}
                </span>
              </div>
              <StarRating rating={product.rating} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#888', lineHeight: 1.7, margin: '14px 0 20px' }}>
                {product.description}
              </p>
              <button className="btn-primary" style={{ width: '100%' }}>
                Order Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
