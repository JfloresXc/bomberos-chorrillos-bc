
import React, { useEffect, useState } from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductMedia {
  id: string;
  alt: string;
  url: string;
  [key: string]: any;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const [products, setProducts] = useState<ProductMedia[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            fetch('https://devfestlima-admin.onrender.com/api/media?depth=0&draft=true&limit=6&invoke=968eeafa-2682-40b8-a2be-c6c4d165d71e')
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.docs) {
                        setProducts(data.docs);
                    }
                })
                .catch((err) => console.error('Error loading products:', err))
                .finally(() => setLoading(false));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
                style={{ animationFillMode: 'forwards' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-black font-heading text-brand-text-primary uppercase">Apoya a Nuestros Héroes</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-brand-text-secondary mb-8">
                        Adquiere nuestros productos oficiales. Cada compra es una contribución directa para mejorar nuestro equipamiento y entrenamiento.
                    </p>
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-64 mb-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center mb-10 max-h-[60vh] overflow-y-auto">
                            {products.map(product => (
                                <div key={product.id} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-brand-red/10 border border-transparent hover:border-brand-red/30 transition-all duration-300 group">
                                    <div className="w-32 h-32 mb-3 flex items-center justify-center bg-white rounded-md p-2 shadow-sm overflow-hidden">
                                        <img 
                                            src={product.url} 
                                            alt={product.alt} 
                                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-brand-text-primary font-bold text-lg capitalize">{product.alt}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="bg-red-50 p-6 rounded-lg text-center border border-red-200">
                        <h3 className="font-bold text-xl text-brand-text-primary mb-2">Para Donaciones Directas</h3>
                        <p className="text-brand-text-secondary mb-3">Si prefieres hacer una contribución monetaria, puedes contactarnos directamente.</p>
                        <p className="text-2xl font-bold text-brand-red tracking-widest">+51 987 654 321</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpModal;
