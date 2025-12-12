import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import your music file like this:
import bgMusic from '../assets/my_song.mp3';

const MusicPlayer = ({ autoPlayTrigger }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Replace the URL string below with the imported variable 'bgMusic'
    const audioRef = useRef(new Audio(bgMusic));

    // Current Placeholder:
    // const audioRef = useRef(new Audio('https://assets.mixkit.co/music/preview/mixkit-uplifting-strings-and-piano-1349.mp3'));

    useEffect(() => {
        // Setup loop
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            audioRef.current.pause();
        };
    }, []);

    useEffect(() => {
        if (autoPlayTrigger) {
            // Browsers might block this, but we try if consent is given
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Auto-play prevented (expected behavior):", error);
                });
            }
        }
    }, [autoPlayTrigger]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm hidden md:block"
                    >
                        Click! Vaibhav has a song for you! 🎵
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    boxShadow: isPlaying ? "0px 0px 0px rgba(0,0,0,0)" : "0px 0px 20px rgba(255, 215, 0, 0.6)"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    boxShadow: {
                        duration: 1.5,
                        repeat: isPlaying ? 0 : Infinity,
                        repeatType: "reverse"
                    }
                }}
                onClick={togglePlay}
                className={`p-4 rounded-full border-2 border-slate-900 transition-colors ${isPlaying ? 'bg-emerald-500 text-white' : 'bg-cricket-gold text-cricket-dark'}`}
                aria-label="Toggle Music"
            >
                {isPlaying ? <FaVolumeUp size={24} /> : <FaMusic size={24} />}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
