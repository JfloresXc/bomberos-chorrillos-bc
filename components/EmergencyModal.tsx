import React, { useState, useEffect } from 'react';
import { FireTruckIcon, PoliceIcon, HospitalIcon, RedCrossIcon, PhoneIcon } from './icons/EmergencyIcons';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
      <h3 className="font-semibold">
        <button
          type="button"
          className="flex items-center justify-between w-full p-4 font-medium text-left text-brand-text-primary hover:bg-gray-100 transition-colors duration-300"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <svg className={`w-6 h-6 transform transition-transform duration-300 text-brand-red ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </h3>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-brand-text-secondary">{children}</p>
        </div>
      </div>
    </div>
);


const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const emergencyContacts = [
        { name: "Bomberos", number: "116", icon: <FireTruckIcon className="w-8 h-8 text-brand-red"/> },
        { name: "Policía Nacional", number: "105", icon: <PoliceIcon className="w-8 h-8 text-blue-600"/> },
        { name: "Serenazgo / Seg. Ciudadana", number: "105", icon: <PoliceIcon className="w-8 h-8 text-green-600"/> },
        { name: "Emergencias Médicas (SAMU)", number: "106", icon: <HospitalIcon className="w-8 h-8 text-red-500"/> },
        { name: "Cruz Roja", number: "(01) 266 0481", icon: <RedCrossIcon className="w-8 h-8 text-red-600"/> },
    ];

    const firstAidTips = [
        { id: 1, title: "Reanimación Cardiopulmonar (RCP)", content: "Verificar seguridad del área. Comprobar si la persona responde. Llamar a emergencias. Si no respira, iniciar 30 compresiones torácicas seguidas de 2 ventilaciones. Continuar hasta que llegue la ayuda." },
        { id: 2, title: "Quemaduras", content: "Enfriar la quemadura con agua corriente fría (no helada) por 10-20 minutos. Cubrir la zona con un paño limpio y seco o una gasa estéril. No reventar ampollas ni aplicar cremas o remedios caseros." },
        { id: 3, title: "Fracturas", content: "Inmovilizar la extremidad afectada en la posición en que se encontró. No intentar enderezar el hueso. Aplicar compresas frías para reducir la hinchazón. Buscar atención médica de inmediato." },
    ];

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in-down"
            style={{animationDuration: '0.3s'}}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="emergency-modal-title"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 id="emergency-modal-title" className="text-2xl md:text-3xl font-black font-heading text-brand-dark uppercase">Información de Emergencia</h2>
                    <button onClick={onClose} aria-label="Cerrar modal" className="text-gray-400 hover:text-gray-800 transition-colors">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Teléfonos de Emergencia */}
                        <section>
                            <h3 className="text-xl font-bold font-heading mb-4 text-brand-red">Teléfonos de Emergencia</h3>
                            <ul className="space-y-3">
                                {emergencyContacts.map(contact => (
                                    <li key={contact.name}>
                                        <a href={`tel:${contact.number.replace(/\s+/g, '')}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                                            <div className="mr-4">{contact.icon}</div>
                                            <div className="flex-grow">
                                                <p className="font-semibold text-brand-text-primary">{contact.name}</p>
                                                <p className="text-xl font-bold text-brand-dark tracking-wider">{contact.number}</p>
                                            </div>
                                            <PhoneIcon className="w-6 h-6 text-gray-400" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        
                        {/* Guía Rápida */}
                        <section>
                            <h3 className="text-xl font-bold font-heading mb-4 text-brand-red">Guía Rápida de Primeros Auxilios</h3>
                             <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                {firstAidTips.map(tip => (
                                   <AccordionItem 
                                        key={tip.id}
                                        title={tip.title}
                                        isOpen={openAccordion === tip.id}
                                        onClick={() => setOpenAccordion(openAccordion === tip.id ? null : tip.id)}
                                   >
                                       {tip.content}
                                   </AccordionItem>
                               ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div>
                        <section>
                            <h3 className="text-xl font-bold font-heading mb-4 text-brand-red">Ubicación de la Estación</h3>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                               <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.569431745123!2d-77.0245059258288!3d-12.14115144274718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b801a20d7575%3A0x60a778332a673b06!2sCompa%C3%B1%C3%ADa%20de%20Bomberos%20Garibaldi%206%20Chorrillos!5e0!3m2!1ses-419!2spe!4v1672808453653!5m2!1ses-419!2spe"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa de la estación de bomberos de Chorrillos"
                                ></iframe>
                            </div>
                            <p className="text-sm text-brand-text-secondary mt-2">Estación de Bomberos Garibaldi 6, Chorrillos. El mapa es referencial.</p>
                        </section>
                    </div>
                </div>
                 <footer className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200">
                    <a 
                        href="tel:116" 
                        className="w-full flex items-center justify-center text-center bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 text-xl"
                    >
                        <PhoneIcon className="w-7 h-7 mr-3"/>
                        LLAMAR A BOMBEROS (116)
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default EmergencyModal;
