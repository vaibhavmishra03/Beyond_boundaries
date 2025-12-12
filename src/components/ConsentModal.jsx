import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsentModal = ({ onConsent }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem('site_consent');
        if (!hasConsent) {
            setIsOpen(true);
        } else {
            onConsent(true);
        }
    }, [onConsent]);

    const handleAccept = () => {
        localStorage.setItem('site_consent', 'true');
        setIsOpen(false);
        onConsent(true);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-slate-800 border border-slate-700 p-6 rounded-2xl max-w-md text-center shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-cricket-gold">Welcome to Our Farewell! 🏏</h2>
                        <p className="text-slate-300 mb-6">
                            This site contains photos and memories from our college days.
                            By entering, you consent to viewing these images.
                            Please respect our privacy and do not share personal photos publicly.
                        </p>
                        <button
                            onClick={handleAccept}
                            className="px-6 py-3 bg-cricket-green hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors ring-2 ring-emerald-500/50"
                        >
                            Enter Stadium
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsentModal;
