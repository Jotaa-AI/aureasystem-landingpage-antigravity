import React, { useRef, useEffect, useState } from 'react';

const FadeIn = ({ children, delay = 0, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    
    // Polyfill o fallback rápido por si el browser es viejo
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Desconectar después de la primera vez para que no repita la animación
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.15, // Porcentaje de visibilidad para disparar
      rootMargin: "0px 0px -50px 0px"
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
