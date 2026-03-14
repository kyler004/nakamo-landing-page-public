import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Menu', 'Services', 'About', 'Contact'];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="header-inner">
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              background: '#F07167',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              color: '#1A1A1A',
            }}
          >
            Nakamo
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                color: i === 0 ? '#F07167' : '#1A1A1A',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (i !== 0) (e.target as HTMLElement).style.color = '#F07167';
              }}
              onMouseLeave={(e) => {
                if (i !== 0) (e.target as HTMLElement).style.color = '#1A1A1A';
              }}
            >
              {link}
              {i === 0 && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#F07167',
                    borderRadius: '2px',
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions - desktop only */}
        <div className="header-actions header-actions-desktop">
          <a
            href="#"
            className="btn-outline"
            style={{ width: '90px', height: '40px', fontSize: '14px', borderRadius: '6px' }}
          >
            Login
          </a>
          <a
            href="#"
            className="btn-primary"
            style={{ width: '100px', height: '40px', fontSize: '14px', borderRadius: '6px' }}
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: '22px', height: '2px', background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', background: '#1A1A1A', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: '22px', height: '2px', background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: '#fff',
            padding: '24px 24px 28px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: i === 0 ? '#F07167' : '#1A1A1A',
                textDecoration: 'none',
              }}
            >
              {link}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" className="btn-outline" style={{ flex: 1, height: '44px' }}>
              Login
            </a>
            <a href="#" className="btn-primary" style={{ flex: 1, height: '44px' }}>
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
