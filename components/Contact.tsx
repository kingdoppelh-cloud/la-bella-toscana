"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-4xl font-serif font-bold mb-8 text-charcoal">Kontakt & Reservierung</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Adresse</h4>
                                    <p className="text-charcoal/60">Weinreihe 10, 37242 Bad Sooden-Allendorf</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Telefon</h4>
                                    <p className="text-charcoal/60">05652-528 0049</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">E-Mail</h4>
                                    <p className="text-charcoal/60">info@labellatoscana.org</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Öffnungszeiten</h4>
                                    <p className="text-charcoal/60">Mo - So: 11:30 - 22:00 Uhr</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 bg-cream p-8 md:p-12 rounded-3xl shadow-sm border border-charcoal/5"
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Name</label>
                                <input type="text" className="w-full px-6 py-4 rounded-xl border border-charcoal/10 focus:border-primary outline-none transition-all bg-white" placeholder="Ihr Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60">E-Mail</label>
                                <input type="email" className="w-full px-6 py-4 rounded-xl border border-charcoal/10 focus:border-primary outline-none transition-all bg-white" placeholder="ihre@mail.de" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60">Nachricht</label>
                                <textarea rows={4} className="w-full px-6 py-4 rounded-xl border border-charcoal/10 focus:border-primary outline-none transition-all bg-white resize-none" placeholder="Wie können wir Ihnen helfen?"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button className="w-full md:w-auto bg-primary text-cream px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                                    Nachricht senden
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Google Maps Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 h-[450px] rounded-3xl overflow-hidden shadow-sm border border-charcoal/5"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.8423456789!2d9.9654321!3d51.284321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb123456789abc%3A0x123456789abcdef!2sWeinreihe%2010%2C%2037242%20Bad%20Sooden-Allendorf!5e0!3m2!1sde!2sde!4v1706100000000!5m2!1sde!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
