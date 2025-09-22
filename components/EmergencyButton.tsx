import React, { useState } from 'react';
import EmergencyModal from './EmergencyModal';
import { SirenIcon } from './icons/EmergencyIcons';

const EmergencyButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-brand-red text-white rounded-full p-4 shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-110 transition-all duration-300 flex items-center space-x-2"
                aria-label="Abrir menú de emergencias"
            >
                <SirenIcon className="w-8 h-8" />
                <span className="font-bold hidden sm:block pr-2">EMERGENCIAS</span>
            </button>
            <EmergencyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default EmergencyButton;
