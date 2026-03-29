import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA' }}>
      <button 
        onClick={onClick}
        style={{ 
          display: 'flex', 
          width: '100%', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1.5rem 0',
          textAlign: 'left',
          color: isOpen ? 'var(--color-accent)' : 'var(--color-text)'
        }}
      >
        <span style={{ fontWeight: 600, fontSize: '1.05rem', paddingRight: '1rem' }}>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div style={{ 
        maxHeight: isOpen ? '200px' : '0', 
        overflow: 'hidden', 
        transition: 'all 0.3s ease',
        opacity: isOpen ? 1 : 0
      }}>
        <p style={{ paddingBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Mi equipo o yo tenemos que aprender a usar herramientas tecnológicas nuevas?",
      a: "No te pondremos a programar. Todo el flujo, Inteligencia Artificial y configuración técnica la manejamos nosotros. Tendrás acceso a un panel simplificado solo para ver métricas e impacto en facturación, y tu personal tratará los chats corporativos con pacientes cualificados tal y como prefieren hacerlo hoy."
    },
    {
      q: "Tenemos una agencia pero 'los leads no son buenos'. ¿En qué os diferenciáis?",
      a: "Una agencia local usa formularios para conseguir un email y teléfono, te los pasa en un excel al día siguiente, el paciente ya está frío, y no tiene los medios económicos. The PatientFlow se mete en medio: si el prospecto no contesta de inmediato ni avanza las fases económicas, la Inteligencia Artificial lo descarta y el tiempo de tu equipo no se contamina persiguiendo curiosos."
    },
    {
      q: "¿Por qué cobran el setup de forma anticipada y no hay prueba gratuita?",
      a: "Construir esto requiere integrar plataformas API avanzadas, diseñar la personalidad de la IA referenciando las tarifas de tu clínica corporativa, y desarrollar arquitectura publicitaria privada que no se te dará 'enlatada'. Requiere talento de alto nivel, esfuerzo humano y recursos tecnológicos puros para los primeros 14 días. Las agencias tienen clientes de prueba, las consultoras tecnológicas e integradoras operan con compromiso."
    },
    {
      q: "¿Qué significa exactamente una 'Valoración cualificada'?",
      a: "Una persona del área de influencia radiada de tu clínica, que ha mostrado interés proactivo por un servicio (ej. rellenos faciales), que ha pasado el filtro automático de IA en WhatsApp y que entiende (y acepta) el nivel general de precios o estándar de vuestros tratamientos ANTES de sentarse en la silla de tu gabinete."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text)' }}>
            Preguntas Frecuentes
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem 3rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
