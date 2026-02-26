"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/data/menu";
import { Plus, Check, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const categories = ["Alle", "Pizza", "Pasta", "Salate", "Desserts"];

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("Alle");
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const handleAddToCart = (e: React.MouseEvent, item: any) => {
        e.stopPropagation();
        addToCart(item);
        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const filteredItems = activeCategory === "Alle"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">Unsere Speisekarte</h2>
                    <p className="text-charcoal/60 max-w-xl mx-auto">
                        Entdecken Sie unsere Auswahl an authentischen Gerichten, zubereitet mit frischen Zutaten direkt aus Italien.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-2 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat
                                ? "bg-primary text-cream border-primary shadow-lg"
                                : "bg-transparent text-charcoal border-charcoal/10 hover:border-primary/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedItem(item)}
                                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-charcoal/5 flex flex-col justify-between cursor-pointer"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-1">
                                            {item.tags?.includes("Bestseller") && (
                                                <span className="text-[10px] w-fit font-bold uppercase tracking-tighter bg-accent text-charcoal px-2 py-0.5 rounded-sm mb-1">
                                                    Bestseller
                                                </span>
                                            )}
                                            <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <span className="text-lg font-bold text-primary">
                                            {item.price.toFixed(2)}€
                                        </span>
                                    </div>
                                    <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    {item.tags && (
                                        <div className="flex gap-2 mb-6">
                                            {item.tags.filter(tag => tag !== "Bestseller").map(tag => (
                                                <span
                                                    key={tag}
                                                    className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${tag === "Vegan" ? "bg-green-100 text-green-700" :
                                                        tag === "Vegetarisch" ? "bg-secondary/10 text-secondary" :
                                                            tag === "Scharf" ? "bg-red-100 text-red-700" : "bg-charcoal/5 text-charcoal/60"
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={(e) => handleAddToCart(e, item)}
                                    className={`w-full py-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all group/btn ${addedId === item.id
                                        ? "bg-green-500 border-green-500 text-white"
                                        : "border-primary/20 text-primary hover:bg-primary hover:text-cream"
                                        }`}
                                >
                                    {addedId === item.id ? (
                                        <>
                                            <Check size={18} />
                                            Hinzugefügt
                                        </>
                                    ) : (
                                        <>
                                            <Plus size={18} className="group-hover/btn:rotate-90 transition-transform" />
                                            Hinzufügen
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Item Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[120]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 m-auto w-full max-w-md h-fit bg-white z-[121] rounded-3xl shadow-2xl overflow-hidden p-8"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-charcoal/5 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6">
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{selectedItem.category}</span>
                                <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">{selectedItem.name}</h3>
                                <p className="text-charcoal/60 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                                <div className="flex justify-between items-center p-4 bg-cream rounded-2xl">
                                    <span className="text-charcoal/40 font-medium">Preis</span>
                                    <span className="text-2xl font-bold text-primary">{selectedItem.price.toFixed(2)}€</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-bold text-charcoal uppercase text-xs tracking-widest">Inhaltsstoffe & Allergene</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Gluten", "Laktose", "Frische Kräuter", "Hausgemacht"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-charcoal/5 text-charcoal/60 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    handleAddToCart(e, selectedItem);
                                    setSelectedItem(null);
                                }}
                                className="w-full bg-primary text-cream py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
                            >
                                <Plus size={20} />
                                Zum Warenkorb hinzufügen
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
