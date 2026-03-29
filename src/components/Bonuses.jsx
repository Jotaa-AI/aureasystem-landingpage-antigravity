import React from 'react';
import FadeIn from './FadeIn';
import { Video, UsersRound } from 'lucide-react';

const Bonuses = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', color: 'var(--color-text)' }}>
            Amplificadores de Ingresos de Serie
          </h2>
        </FadeIn>

        <div className="grid grid-2" style={{ gap: '2rem' }}>
          <FadeIn delay={200}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-gold-light)'
            }}>
              <Video size={36} color="var(--color-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                Content Authority Engine <br/><span style={{ fontSize: '1rem', color: 'var(--color-text-light-muted)', fontWeight: 400 }}>(Valor 700€)</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Instrucciones operativas y guiones para que tú o los doctores grabéis el contenido que nosotros convertiremos en maquinaria de atracción premium. Sin pensar de más ni perder el tiempo frente a la cámara.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-gold-light)'
            }}>
              <UsersRound size={36} color="var(--color-accent)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                Protocolo Alta Conversión en Recepción <br/><span style={{ fontSize: '1rem', color: 'var(--color-text-light-muted)', fontWeight: 400 }}>(Valor 500€)</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Cómo debe recibir tu personal a nuestros pacientes pre-cualificados para asentar tu autoridad in-situ, cerrar un mayor porcentaje de tratamientos allí mismo y subir el ticket medio sin ser agresivos.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
