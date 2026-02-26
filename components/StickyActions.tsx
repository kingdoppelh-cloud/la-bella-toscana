"use client";

import { Phone, MessageCircle, ArrowUp, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

export default function StickyActions() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="w-14 h-14 bg-charcoal text-cream rounded-full flex items-center justify-center shadow-2xl hover:bg-charcoal/90 transition-all"
                        >
                            <ArrowUp size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsCartOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-14 h-14 bg-accent text-charcoal rounded-full flex items-center justify-center shadow-2xl hover:shadow-accent/40 transition-all"
                >
                    <ShoppingBag size={24} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-cream text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-cream">
                            {totalItems}
                        </span>
                    )}
                </motion.button>

                <motion.a
                    href="tel:056525280049"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-primary text-cream rounded-full flex items-center justify-center shadow-2xl hover:shadow-primary/40 transition-all"
                >
                    <Phone size={24} />
                </motion.a>

                <motion.a
                    href="https://wa.me/4956525280049"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all"
                >
                    <MessageCircle size={28} />
                </motion.a>
            </div>

            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
