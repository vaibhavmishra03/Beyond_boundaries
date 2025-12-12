import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

const Scoreboard = () => {
    // Stats data
    const stats = [
        { label: "Matches Played", value: 100 },
        { label: "Balls Lost", value: 20 },
        { label: "Chit Chat & Strolls", value: "∞" },
        { label: "Skipped Classes", value: 87 },
    ];

    return (
        <section id="scoreboard" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Match Stats
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} label={stat.label} value={stat.value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Counter = ({ label, value }) => {
    // Check if value is a number for animation
    const isNumber = typeof value === 'number';
    const nodeRef = React.useRef();

    useEffect(() => {
        if (!isNumber) return;

        const node = nodeRef.current;
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            }
        });

        return () => controls.stop();
    }, [value, isNumber]);

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-slate-900 rounded-lg border-2 border-slate-700 hover:border-cricket-gold transition-colors duration-300"
        >
            <div className="text-5xl font-black text-cricket-gold mb-2 font-mono">
                {isNumber ? <span ref={nodeRef} /> : value}
            </div>
            <div className="text-slate-400 font-medium uppercase text-sm tracking-wider">
                {label}
            </div>
        </motion.div>
    );
};

export default Scoreboard;
