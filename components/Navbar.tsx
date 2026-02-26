"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import ReservationModal from "./ReservationModal";
import Link from "next/link"; // Keep Link import if it's still used, but the provided code replaces it with motion.div

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Über uns", href: "#about" },
    { name: "Speisekarte", href: "#menu" },
    { name: "Galerie", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isReservationOpen, setIsReservationOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-2xl font-serif font-bold ${isScrolled ? "text-charcoal" : "text-cream"}`}
                    >
                        La Bella <span className="text-primary italic">Toscana</span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors ${isScrolled ? "text-charcoal" : "text-cream"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setIsReservationOpen(true)}
                            className="bg-primary text-cream px-6 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all transform hover:scale-105"
                        >
                            Reservieren
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 ${isScrolled ? "text-charcoal" : "text-cream"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-cream border-t border-charcoal/5 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-serif font-bold text-charcoal hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsReservationOpen(true);
                                    }}
                                    className="bg-primary text-cream px-6 py-4 rounded-xl font-bold text-center"
                                >
                                    Tisch reservieren
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
        </>
    );
}
