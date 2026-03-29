import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Cargar el script de GHL dinámicamente al abrir el modal
      const script = document.createElement('script');
      script.src = "https://link.cleesaas.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Limpiar el script al cerrar el modal si es necesario
        // (En SPAs a veces es mejor dejarlo si se va a usar mucho, pero por limpieza...)
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '850px', width: '95%', height: '85vh', padding: '0', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} style={{ zIndex: 10, top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <X size={24} />
        </button>

        <div className="modal-body" style={{ height: '100%', padding: '0' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/Pmlo90k5oI5mm21x9Vqb"
            style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
            id="Pmlo90k5oI5mm21x9Vqb_1774805425911"
            title="Agenda Reunión de Descubrimiento"
            scrolling="no"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
