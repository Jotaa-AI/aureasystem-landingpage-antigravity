import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1 = Formulario, 2 = Calendario, 3 = Éxito
  const [formData, setFormData] = useState({
    nombre: '',
    web: '',
    presupuesto: '',
    urgencia: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la validación o envío parcial
    setStep(2);
  };

  const handleBooking = () => {
    // Simula agendar
    setStep(3);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({ nombre: '', web: '', presupuesto: '', urgencia: '' });
    }, 300);
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={resetAndClose}>
          <X size={24} />
        </button>

        {step === 1 && (
          <div className="modal-body fade-in visible">
            <h2 className="modal-title">Auditoría Aurea Systems</h2>
            <p className="modal-subtitle">Por favor, indícanos el contexto actual de tu clínica para que la reunión sea directa, quirúrgica y rentable para ti.</p>
            
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  required 
                  placeholder="Ej. Dra. Laura Sánchez" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="web">Sitio Web del Centro o Instagram</label>
                <input 
                  type="text" 
                  id="web" 
                  name="web" 
                  required 
                  placeholder="Ej. www.clinicasiempre.com" 
                  value={formData.web} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="presupuesto">Presupuesto mensual a invertir en Ads</label>
                <select 
                  id="presupuesto" 
                  name="presupuesto" 
                  required 
                  value={formData.presupuesto} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Menos de 800€">Menos de 800€ al mes</option>
                  <option value="800€ - 1.500€">Entre 800€ y 1.500€ al mes</option>
                  <option value="1.500€ - 3.000€">Entre 1.500€ y 3.000€ al mes</option>
                  <option value="Más de 3.000€">Más de 3.000€ al mes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="urgencia">¿Cuándo quieres poner esto en marcha?</label>
                <select 
                  id="urgencia" 
                  name="urgencia" 
                  required 
                  value={formData.urgencia} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Lo antes posible">Lo antes posible</option>
                  <option value="Dentro de 1 mes">Dentro de 1 mes</option>
                  <option value="Aún no lo tengo claro">Aún no lo tengo claro</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.8rem' }}>
                Continuar al Calendario <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="modal-body fade-in visible">
            <h2 className="modal-title">Selecciona Fecha y Hora</h2>
            <p className="modal-subtitle">Nuestra IA enviará la confirmación y el enlace de Zoom a tu correo.</p>
            
            <div className="mock-calendar">
              <div className="calendar-header">
                <h3>Abril 2026</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                   <span className="cal-nav">&lt;</span>
                   <span className="cal-nav">&gt;</span>
                </div>
              </div>
              <div className="calendar-grid">
                {/* Simulated weekdays */}
                <span className="day-name">L</span><span className="day-name">M</span><span className="day-name">X</span><span className="day-name">J</span><span className="day-name">V</span>
                {/* Simulated dates */}
                <span className="day disabled">1</span><span className="day disabled">2</span><span className="day active-day">3</span><span className="day">4</span><span className="day disabled">5</span>
                <span className="day">8</span><span className="day">9</span><span className="day">10</span><span className="day">11</span><span className="day">12</span>
              </div>
              
              <div className="time-slots">
                <h4>Horarios disponibles el día 3</h4>
                <div className="slots-grid">
                  <button className="time-slot">09:30</button>
                  <button className="time-slot selected">10:00</button>
                  <button className="time-slot">11:15</button>
                  <button className="time-slot">15:30</button>
                </div>
              </div>
            </div>

            <button onClick={handleBooking} className="btn btn-accent" style={{ width: '100%', marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '0.8rem' }}>
              Confirmar Sesión <CalendarIcon size={18} />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="modal-body fade-in visible" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle2 size={64} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 className="modal-title" style={{ marginBottom: '1rem' }}>Reserva Confirmada</h2>
            <p className="modal-subtitle">
              Gracias, <strong>{formData.nombre}</strong>. <br/>Hemos bloqueado la sesión en el calendario. Te enviaremos un WhatsApp con los detalles breves en unos minutos.
            </p>
            <button onClick={resetAndClose} className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Finalizar y Volver a la web
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingModal;
