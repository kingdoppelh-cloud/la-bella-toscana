"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, removeFromCart, totalPrice, clearCart } = useCart();

    const handleWhatsAppOrder = () => {
        const itemsText = cart
            .map((item) => `${item.quantity}x ${item.name} (${(item.price * item.quantity).toFixed(2)}€)`)
            .join("%0A");
        const totalText = `Gesamt: ${totalPrice.toFixed(2)}€`;
        const message = `Hallo La Bella Toscana, ich möchte gerne bestellen:%0A%0A${itemsText}%0A%0A${totalText}%0A%0ABitte um Bestätigung. Danke!`;
        window.open(`https://wa.me/4956525280049?text=${message}`, "_blank");
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
                        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[101] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-charcoal/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-primary" />
                                <h2 className="text-2xl font-serif font-bold">Ihr Warenkorb</h2>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-charcoal/5 rounded-full transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-charcoal/5 rounded-full flex items-center justify-center">
                                        <ShoppingBag size={40} className="text-charcoal/20" />
                                    </div>
                                    <p className="text-charcoal/40 font-medium">Ihr Warenkorb ist noch leer.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Jetzt Gerichte entdecken
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center gap-4 group">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                                            <p className="text-sm text-charcoal/60">
                                                {item.quantity} x {item.price.toFixed(2)}€
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-primary">
                                                {(item.price * item.quantity).toFixed(2)}€
                                            </span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-charcoal/20 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-charcoal/10 bg-white">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg text-charcoal/60">Gesamtsumme</span>
                                    <span className="text-2xl font-serif font-bold text-primary">
                                        {totalPrice.toFixed(2)}€
                                    </span>
                                </div>
                                <button
                                    onClick={handleWhatsAppOrder}
                                    className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#20ba5a] transition-all shadow-lg hover:shadow-[#25D366]/20"
                                >
                                    <MessageCircle size={24} />
                                    Bestellen via WhatsApp
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="w-full mt-4 text-sm text-charcoal/40 hover:text-charcoal transition-colors"
                                >
                                    Warenkorb leeren
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
