import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { PhoneCall, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const DemoSection = () => {
  const [formData, setFormData] = useState({ nombre: '', telefono: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://personal-n8n.brtnrr.easypanel.host/webhook/demo-llamada', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error enviando al webhook:', error);
      setStatus('error');
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-gold-light)', borderBottom: '1px solid var(--color-gold-light)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <FadeIn delay={100}>
            <div style={{ paddingRight: '2rem' }}>
              <span style={{ 
                color: 'var(--color-accent)', 
                fontWeight: 600, 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em' 
              }}>
                Experiencia en tiempo real
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Pruébalo tú misma.
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Pon a prueba la tecnología de <strong>Aurea Systems</strong> ahora mismo. Introduce tus datos y nuestra IA te llamará en menos de 60 segundos para demostrarte su capacidad natural de conversación y gestión.
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text)' }}>
                  <div style={{ backgroundColor: 'var(--color-gold-light)', padding: '0.8rem', borderRadius: '50%' }}>
                    <PhoneCall size={20} color="var(--color-accent)" />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>Llamada de demostración gratuita e inmediata.</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div style={{ 
              backgroundColor: 'var(--color-surface)', 
              padding: '3rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-gold-light)'
            }}>
              {status === 'success' ? (
                <div className="fade-in visible" style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={48} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
                  <h3 style={{ marginBottom: '1rem' }}>¡Petición enviada!</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>
                    Prepárate. En unos segundos recibirás una llamada de nuestra IA en el número {formData.telefono}.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="btn btn-outline" 
                    style={{ marginTop: '2rem', fontSize: '0.85rem' }}
                  >
                    Probar con otro número
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label htmlFor="demo-nombre">Tu Nombre</label>
                    <input 
                      type="text" 
                      id="demo-nombre" 
                      name="nombre" 
                      required 
                      placeholder="Ej. Dra. Carmen Ruiz" 
                      value={formData.nombre} 
                      onChange={handleChange}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label htmlFor="demo-telefono">Tu Teléfono Móvil</label>
                    <input 
                      type="tel" 
                      id="demo-telefono" 
                      name="telefono" 
                      required 
                      placeholder="Ej. +34 600 000 000" 
                      value={formData.telefono} 
                      onChange={handleChange}
                      style={{ width: '100%' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={status === 'loading'}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem' }}
                  >
                    {status === 'loading' ? (
                      <>Activando IA... <Loader2 className="animate-spin" size={18} /></>
                    ) : (
                      <>Solicitar Llamada Demo <PhoneCall size={18} /></>
                    )}
                  </button>

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B91C1C', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      <AlertCircle size={16} /> Ocurrió un error. Por favor, inténtalo de nuevo.
                    </div>
                  )}

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light-muted)', textAlign: 'center' }}>
                    Al pulsar, aceptas recibir una llamada automática de prueba para fines demostrativos.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;
