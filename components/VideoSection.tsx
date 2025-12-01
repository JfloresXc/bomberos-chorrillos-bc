import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-background block">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">Conoce su trabajo</h2>
        <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">
          Un vistazo a su día a día, la importancia del entrenamiento y testimonios de la comunidad.
        </p>
        <div className="max-w-3xl mx-auto mb-12 aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/raYu5lP7BFM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;