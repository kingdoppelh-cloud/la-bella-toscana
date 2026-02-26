"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ReservationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[110]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-cream z-[111] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="relative p-8 md:p-12">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-charcoal/5 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold mb-4">Anfrage gesendet!</h3>
                                    <p className="text-charcoal/60">
                                        Vielen Dank für Ihre Reservierung. Wir werden uns in Kürze bei Ihnen melden, um den Termin zu bestätigen.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-serif font-bold mb-2">Tisch reservieren</h2>
                                        <p className="text-charcoal/60">Genießen Sie einen unvergesslichen Abend bei uns.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/40 flex items-center gap-2">
                                                    <Calendar size={14} /> Datum
                                                </label>
                                                <input
                                                    type="date"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-primary outline-none bg-white transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/40 flex items-center gap-2">
                                                    <Clock size={14} /> Uhrzeit
                                                </label>
                                                <input
                                                    type="time"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-primary outline-none bg-white transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-charcoal/40 flex items-center gap-2">
                                                <Users size={14} /> Personen
                                            </label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-primary outline-none bg-white transition-all">
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                                    <option key={n} value={n}>{n} Personen</option>
                                                ))}
                                                <option value="more">Mehr als 8 Personen</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-charcoal/40">Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ihr Name"
                                                className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-primary outline-none bg-white transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-charcoal/40">Telefonnummer</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Für Rückfragen"
                                                className="w-full px-4 py-3 rounded-xl border border-charcoal/10 focus:border-primary outline-none bg-white transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-cream py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
                                        >
                                            Reservierung anfragen
                                            <Send size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
