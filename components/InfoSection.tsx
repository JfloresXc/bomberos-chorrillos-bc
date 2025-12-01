
import React, { useState } from 'react';
import { FireTruckIcon } from './icons/EmergencyIcons';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg text-center transform hover:-translate-y-2 border border-gray-200 hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-300">
    <div className="flex justify-center mb-4 text-brand-red">{icon}</div>
    <h3 className="text-xl font-bold font-heading mb-2 text-brand-text-primary">{title}</h3>
    <p className="text-brand-text-secondary">{description}</p>
  </div>
);

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-brand-text-primary hover:bg-gray-100 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="font-semibold">{title}</span>
        <svg className={`w-6 h-6 transform transition-transform duration-300 text-brand-red ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
    </h2>
    <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-5 border-t border-gray-200 bg-gray-50">
        <p className="text-brand-text-secondary">{children}</p>
      </div>
    </div>
  </div>
);

const InfoSection: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(1);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const associationGoals = [
        { id: 1, title: "Mejorar los recursos y equipos disponibles", content: "La asociación busca proporcionar a los bomberos voluntarios de Chorrillos equipos de protección personal, vehículos adecuados y tecnología avanzada para que puedan responder de manera más efectiva a emergencias. Mejorar estos recursos les permitirá reducir los riesgos y aumentar su capacidad de actuación ante cualquier tipo de desastre." },
        { id: 2, title: "Fortalecer la capacitación y formación", content: "La asociación tiene como objetivo organizar programas de capacitación continua para los bomberos voluntarios, asegurando que estén siempre preparados para enfrentar las situaciones más complejas. Esta formación abarca desde primeros auxilios hasta técnicas avanzadas de rescate, lo cual es crucial para mantener la seguridad y eficacia del cuerpo de bomberos." },
        { id: 3, title: "Fomentar la integración y el apoyo comunitario", content: "La asociación quiere promover un lazo más fuerte entre los bomberos y la comunidad de Chorrillos, fomentando el trabajo conjunto en proyectos de prevención de incendios y desastres naturales. Además, busca sensibilizar a la población sobre la importancia del rol de los bomberos voluntarios, generando un sentido de solidaridad y apoyo constante." },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Section Servicios */}
                <section id="servicios" className="mb-20">
                    <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">Los servicios que prestan</h2>
                    <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">Los bomberos voluntarios de Chorrillos desempeñan una labor fundamental en la protección y seguridad de la comunidad, trabajando incansablemente para prevenir y atender emergencias de diversos tipos, como incendios, accidentes vehiculares y desastres naturales. Este cuerpo de bomberos, que opera bajo el principio del voluntariado, está compuesto por hombres y mujeres que dedican su tiempo, esfuerzo y recursos personales para brindar un servicio esencial sin recibir remuneración económica.</p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <ServiceCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.085.12L10 11.854l3.665-3.683a1 1 0 011.085-.12L17 7.081a1 1 0 000-1.84l-7-3zM15 9.421l-5 5-5-5v3.579l5 5 5-5V9.42z" /></svg>}
                            title="Educación y Prevención"
                            description="Programas de formación en escuelas y empresas para concienciar sobre la seguridad."
                        />
                         <ServiceCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>}
                            title="Asistencia Médica"
                            description="Primeros auxilios y soporte vital básico en emergencias médicas hasta la llegada de la ambulancia."
                        />
                    </div>
                </section>
                
                {/* Section ¿Quiénes somos? */}
                <section id="nosotros">
                    <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">¿Quiénes somos?</h2>
                    
                    <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">Somos una asociación de voluntarios comprometidos con la misión de apoyar y fortalecer la labor de los bomberos voluntarios, quienes día a día arriesgan sus vidas para proteger a la comunidad. A través de nuestras acciones, buscamos proporcionarles los recursos, capacitación y apoyo logístico que necesitan para cumplir con su valiosa labor de manera efectiva. Nuestro objetivo es crear un lazo de solidaridad y cooperación, generando un espacio en el que podamos contribuir con donaciones, voluntariado y actividades que fortalezcan tanto la infraestructura como la moral de estos valientes. Como parte de esta red de apoyo, trabajamos unidos con los bomberos para mejorar sus condiciones y asegurar que su dedicación al servicio de la comunidad continúe siendo un ejemplo de altruismo y valentía..</p>
                    
                    <div className="max-w-3xl mx-auto mb-12 aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200">
                         <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/eNjRriETLQs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
                       {associationGoals.map(goal => (
                           <AccordionItem 
                                key={goal.id}
                                title={goal.title}
                                isOpen={openAccordion === goal.id}
                                onClick={() => toggleAccordion(goal.id)}
                           >
                               {goal.content}
                           </AccordionItem>
                       ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InfoSection;
