"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section id="about" ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                            <motion.div style={{ y, height: "120%", top: "-10%", position: "relative" }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                    alt="Restaurant Interior"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-0 blur-3xl" />
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full -z-0 blur-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Unsere Geschichte</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-charcoal leading-tight">
                            Tradition trifft auf <br /> <span className="text-primary">Leidenschaft</span>
                        </h2>
                        <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
                            <p>
                                La Bella Toscana wurde aus der Liebe zur authentischen italienischen Küche geboren. Unsere Rezepte wurden über Generationen hinweg verfeinert und bringen den wahren Geschmack der Toskana direkt auf Ihren Teller.
                            </p>
                            <p>
                                Wir glauben an die Kraft frischer, regionaler Zutaten. Deshalb beziehen wir unsere Produkte direkt von ausgewählten Produzenten, um Ihnen ein unvergleichliches Geschmackserlebnis zu bieten.
                            </p>
                            <div className="pt-8 border-t border-charcoal/10 flex items-center gap-8">
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-primary">15+</h4>
                                    <p className="text-sm uppercase tracking-wider">Jahre Erfahrung</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-primary">100%</h4>
                                    <p className="text-sm uppercase tracking-wider">Frische Zutaten</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
