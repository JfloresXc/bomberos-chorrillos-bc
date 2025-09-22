import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80; // Offset for the sticky header
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-brand-dark py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Contacto Directo y Nombre */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Compañía Garibaldi Nº 6</h4>
                         <p className="text-gray-400 text-sm mb-4">
                            Compañía Italiana de Bomberos Voluntarios Garibaldi Nº 6 de Chorrillos, Lima, Perú.
                        </p>
                        <div className="space-y-3 text-gray-400">
                             <p className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Av. Defensores del Morro, Chorrillos, Lima.</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>Emergencias: 116</span>
                            </p>
                             <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>Estación: (01) 467-0114</span>
                            </p>
                            <p className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>info@bomberosgaribaldi6.pe</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Enlaces Rápidos</h4>
                        <ul>
                            <li className="mb-2"><a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="text-gray-400 hover:text-brand-red transition-colors cursor-pointer">Servicios</a></li>
                            <li className="mb-2"><a href="#seguridad" onClick={(e) => handleNavClick(e, '#seguridad')} className="text-gray-400 hover:text-brand-red transition-colors cursor-pointer">Consejos</a></li>
                            <li className="mb-2"><a href="#colaborar" onClick={(e) => handleNavClick(e, '#colaborar')} className="text-gray-400 hover:text-brand-red transition-colors cursor-pointer">Colaborar</a></li>
                            <li className="mb-2"><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="text-gray-400 hover:text-brand-red transition-colors cursor-pointer">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/B6Garibaldi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/bomberosgaribaldi6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
                            <a href="https://twitter.com/cgbvpoficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                        </div>
                    </div>

                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Compañía Italiana de Bomberos Voluntarios Garibaldi Nº 6. Todos los derechos reservados.</p>
                    <p className="mt-2">Diseñado con ❤️ por la comunidad.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;