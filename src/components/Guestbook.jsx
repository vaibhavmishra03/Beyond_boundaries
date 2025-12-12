import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Guestbook = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('farewell_guestbook');
        if (stored) {
            setMessages(JSON.parse(stored));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        const newMessage = {
            id: Date.now(),
            name,
            message,
            date: new Date().toLocaleDateString()
        };

        const updated = [newMessage, ...messages];
        setMessages(updated);
        localStorage.setItem('farewell_guestbook', JSON.stringify(updated));

        setName('');
        setMessage('');
    };

    return (
        <section id="guestbook" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Locker Room Talk
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl h-fit border border-slate-700">
                        <h3 className="text-xl font-bold text-cricket-gold mb-6">Leave a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Name / Nickname</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-slate-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-cricket-gold outline-none"
                                    placeholder="e.g. Captain Cool"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-slate-800 border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-cricket-gold outline-none resize-none"
                                    placeholder="Remember when..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cricket-gold text-cricket-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                            >
                                Post Message
                            </button>
                        </form>
                    </div>

                    {/* Feed */}
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        <AnimatePresence>
                            {messages.length === 0 && (
                                <p className="text-center text-slate-500 italic mt-10">No messages yet. Be the first!</p>
                            )}
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-slate-700/50 p-4 rounded-xl border border-slate-600"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-emerald-400">{msg.name}</span>
                                        <span className="text-xs text-slate-500">{msg.date}</span>
                                    </div>
                                    <p className="text-slate-300 text-sm whitespace-pre-wrap">{msg.message}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guestbook;
