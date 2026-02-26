"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Michael Weber",
        text: "Die beste Pizza der Stadt! Der Teig ist perfekt und die Zutaten sind unglaublich frisch. Man fühlt sich wie in Italien.",
        rating: 5,
    },
    {
        name: "Anke Müller",
        text: "Ein wunderbarer Abend. Das Ambiente ist gemütlich, der Service aufmerksam und die Pasta al Tartufo ein absoluter Traum.",
        rating: 5,
    },
    {
        name: "Thomas K.",
        text: "Authentisch, lecker und preiswert. Wir kommen regelmäßig und wurden noch nie enttäuscht. Sehr zu empfehlen!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-charcoal text-cream overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Gästestimmen</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Was unsere Gäste sagen</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                        >
                            <Quote className="absolute top-6 right-8 text-white/10" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-lg text-cream/80 mb-8 italic leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">
                                    {t.name[0]}
                                </div>
                                <span className="font-bold">{t.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
