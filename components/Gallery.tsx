"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1974&auto=format&fit=crop",
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">Impressionen</h2>
                    <p className="text-charcoal/60 max-w-xl mx-auto">
                        Ein Blick in unsere Küche und unser gemütliches Ambiente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
