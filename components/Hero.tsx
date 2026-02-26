"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import ReservationModal from "./ReservationModal";

export default function Hero() {
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={containerRef} id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                    alt="Authentic Italian Food"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center text-cream">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 border border-cream/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                        Authentische Toskanische Küche
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
                        La Bella <br /> <span className="text-accent italic">Toscana</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-cream/90 font-light leading-relaxed">
                        Erleben Sie den Geschmack Italiens im Herzen der Stadt. Von handgemachter Pasta bis hin zu knuspriger Steinofenpizza – wir bringen die Toskana zu Ihnen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#menu" className="group bg-primary text-cream px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl">
                            Jetzt Bestellen
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <button
                            onClick={() => setIsReservationOpen(true)}
                            className="bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-cream/20 transition-all transform hover:scale-105"
                        >
                            <Utensils size={20} />
                            Tisch reservieren
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-cream/50 to-transparent mx-auto" />
            </motion.div>

            <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
        </section>
    );
}
