import React from 'react';

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
        >
          <img src="https://actualidadlaboral.com/wp-content/uploads/2021/08/bomberos-apagando-un-incendio-1024x576.jpg" alt="Bomberos en acción" className="w-full h-full object-cover animate-slowZoom" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-black font-heading uppercase drop-shadow-lg animate-fade-in-down">¡EL SACRIFICIO DE HOY, SALVA VIDAS MAÑANA!</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md animate-fade-in-up">Asociación en apoyo a los Bomberos Voluntarios del Perú.</p>
          </div>
        </div>
    </section>
  );
};

export default HeroCarousel;