import React from 'react';
import FadeIn from './FadeIn';

const Header = ({ openModal }) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(252, 252, 252, 0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-gold-light)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FadeIn delay={100}>
          <div style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--color-text)' }}>
            AUREA<span style={{ color: 'var(--color-accent)', fontWeight: 300 }}> SYSTEMS</span>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <button onClick={openModal} className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            Agendar Sesión
          </button>
        </FadeIn>
      </div>
    </header>
  );
};

export default Header;
