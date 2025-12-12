import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[100px] opacity-30"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cricket-gold rounded-full blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-700 rounded-full blur-[80px] opacity-20"
                />
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        animate={{
                            opacity: [1, 0.8, 1, 0.5, 1, 0.9, 1],
                            textShadow: [
                                "0 0 5px #ffd700",
                                "0 0 10px #ffd700",
                                "0 0 5px #ffd700",
                                "0 0 20px #ffd700, 0 0 35px #ffffff",
                                "0 0 5px #ffd700"
                            ]
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            repeatType: "mirror"
                        }}
                        className="text-cricket-gold font-black tracking-widest uppercase mb-6 text-4xl md:text-6xl"
                    >
                        ⚡ Class of 2026 ⚡
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        NOT OUT, JUST <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            CHANGING THE PITCH
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                        Lectures bunk karke lengths pakdi, grades se zyada googlies important thi.
                        College innings declare ho gayi, but our partnership remains Not Out.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#gallery" className="px-8 py-3 bg-cricket-gold text-cricket-dark font-bold rounded-lg hover:scale-105 transition-transform">
                            View Gallery
                        </a>
                        <a href="#guestbook" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                            Sign Guestbook
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
