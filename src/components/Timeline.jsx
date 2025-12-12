import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timelineEvents';

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    <span className="border-b-4 border-cricket-gold pb-2">Innings Breakdown</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-700 -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Spacer for desktop alignment */}
            <div className="hidden md:block w-1/2" />

            {/* Dot on line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cricket-gold border-4 border-slate-900 z-10 flex items-center justify-center shadow-lg">
                {/* Optional inner dot or icon */}
            </div>

            {/* Content Card */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-cricket-gold/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{event.icon}</span>
                        <span className="font-mono text-emerald-400 font-bold">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{event.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Timeline;
