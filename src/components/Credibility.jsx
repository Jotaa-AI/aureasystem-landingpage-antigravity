import React from 'react';
import FadeIn from './FadeIn';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const Credibility = () => {
  return (
    <section style={{ 
      backgroundColor: 'var(--color-surface)', 
      borderTop: '1px solid var(--color-gold-light)', 
      borderBottom: '1px solid var(--color-gold-light)',
      padding: '2.5rem 0'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn delay={100}>
          <p style={{ 
            fontSize: '1.1rem', 
            fontWeight: 500, 
            color: 'var(--color-text)', 
            marginBottom: '2rem' 
          }}>
            El primer sistema integral de captación B2C garantizado para clínicas estéticas:
          </p>
        </FadeIn>
        
        <div className="grid grid-3" style={{ gap: '3rem', textAlign: 'center' }}>
          <FadeIn delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
              <Zap size={32} color="var(--color-accent)" strokeWidth={1.5} />
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{"< 1 minuto"}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Respuesta inicial con IA al 100% de tus potenciales pacientes entrantes.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
              <ShieldCheck size={32} color="var(--color-gold)" strokeWidth={1.5} />
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{"< 14 días"}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Infraestructura tecnológica operativa al completo en 2 semanas.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
              <TrendingUp size={32} color="var(--color-accent)" strokeWidth={1.5} />
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{"< 30 días"}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Resultados medibles y retorno de pacientes garantizado.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
