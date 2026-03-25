"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { RESTAURANT } from "../lib/constants";

// Dynamic imports for performance
const ReservationModal = dynamic(() => import("./ReservationModal"), { ssr: false });
const ShareModal = dynamic(() => import("./ShareModal"), { ssr: false });
import Magnetic from "./ui/Magnetic";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Über Uns", href: "#about" },
    { name: "Speisekarte", href: "#menu" },
    { name: "Galerie", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);

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
                className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled
                    ? "bg-charcoal/80 backdrop-blur-md py-4 border-white/10 shadow-lg"
                    : "bg-gradient-to-b from-black/80 to-transparent py-6 border-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    {/* Logo Section - Replaced text with mustache logo */}
                    <Magnetic strength={0.15}>
                        <m.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="cursor-pointer flex-shrink-0"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="La Bella Toscana Logo"
                                width={110}
                                height={60}
                                className={`object-contain transition-all duration-300 drop-shadow-lg ${isScrolled
                                    ? "w-[90px]"
                                    : "w-[110px]"
                                    }`}
                                priority
                                sizes="110px"
                            />
                        </m.div>
                    </Magnetic>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-sans font-light text-gray-300 hover:text-white transition-colors tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Magnetic strength={0.2}>
                            <a
                                href={`tel:${RESTAURANT.phoneCanon}`}
                                className="flex items-center gap-3 text-white group"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/30 transition-colors">
                                    <Phone size={16} className="text-primary" />
                                </div>
                                <span className="font-sans font-light tracking-wider hover:text-primary transition-colors">{RESTAURANT.phoneDisplay}</span>
                            </a>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-4 -mr-2 text-white flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-charcoal absolute top-full left-0 w-full overflow-hidden border-t border-white/10"
                        >
                            <div className="flex flex-col p-8 gap-8 items-center pt-12">
                                <Image
                                    src="/images/logo.png"
                                    alt="La Bella Toscana"
                                    width={140}
                                    height={75}
                                    className="object-contain mb-2"
                                />
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-display text-white hover:text-primary transition-colors uppercase tracking-wider"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="w-full h-[1px] bg-white/10 my-4" />
                                <a
                                    href={`tel:${RESTAURANT.phoneCanon}`}
                                    className="flex items-center gap-3 text-primary text-xl font-display tracking-widest uppercase"
                                >
                                    <Phone size={20} />
                                    {RESTAURANT.phoneDisplay}
                                </a>
                                <div className="flex w-full mt-4">
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsReservationOpen(true);
                                        }}
                                        className="flex-1 bg-primary text-charcoal px-4 py-3 rounded-sm font-bold text-center tracking-wider uppercase text-xs"
                                    >
                                        Tisch reservieren
                                    </button>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </nav>
            <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
            <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
        </>
    );
}
