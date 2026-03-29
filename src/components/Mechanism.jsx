import React from 'react';
import FadeIn from './FadeIn';

const Mechanism = () => {
  const steps = [
    {
      num: "01",
      title: "Atracción de Alta Fidelidad",
      desc: "Lanzamos infraestructura publicitaria inteligente (Meta Ads). Segmentamos campañas de alto valor hacia los tratamientos faciales más rentables de tu cartera. No buscamos likes, buscamos intención pura de compra."
    },
    {
      num: "02",
      title: "Respuesta Hiperacelerada",
      desc: "Nuestro sistema detecta el interés y contacta al paciente en su WhatsApp personal en menos de 60 segundos. 24h al día, 7 días a la semana. Cero enfriamiento del potencial paciente, maximizando la conversión inmediata."
    },
    {
      num: "03",
      title: "Triaje Cualitativo IA",
      desc: "La inteligencia artificial mantiene una conversación natural, indaga sobre la necesidad y filtra al usuario. Solo aquellos con capacidad económica e interés real avanzan en el flujo de citas. Recepción solo habla con clientes VIP."
    },
    {
      num: "04",
      title: "Certidumbre y Anti No-Show",
      desc: "Confirmaciones calendarizadas mediante recordatorios estratégicos, reduciendo drásticamente las sillas vacías en el día a día. Reflejado en un panel de métricas cristalino que vincula cada anuncio con los euros facturados."
    }
  ];

  return (
    <section className="section" id="sistema" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
          
          <div style={{ position: 'sticky', top: '100px' }}>
            <FadeIn delay={100}>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 600, 
                letterSpacing: '0.1em', 
                color: 'var(--color-accent)',
                textTransform: 'uppercase'
              }}>
                EL PROTOCOLO: THE PATIENTFLOW SYSTEM
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: 'var(--color-text)', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Sustituimos las promesas por <br/>sistemas predecibles.
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Deja el cruce de correos y llamadas infinitas. Conectamos tecnología publicitaria avanzada con procesamiento de lenguaje natural en tiempo real para asentar a  tu próximo paciente en la sala de espera sin que muevas un dedo.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard Data" 
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-md)', 
                  width: '100%', 
                  objectFit: 'cover', 
                  height: '240px',
                  opacity: 0.9,
                  mixBlendMode: 'multiply'
                }} 
              />
            </FadeIn>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
            {/* Timeline abstract line */}
            <div style={{ 
              position: 'absolute', 
              left: '1.5rem', 
              top: '2rem', 
              bottom: '2rem', 
              width: '2px', 
              backgroundColor: 'var(--color-gold-light)',
              zIndex: 0
            }}></div>

            {steps.map((step, idx) => (
              <FadeIn delay={200 + (idx * 150)} key={idx}>
                <div style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface)',
                    border: '2px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    {step.num}
                  </div>
                  <div style={{ paddingTop: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
