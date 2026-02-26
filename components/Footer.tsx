import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-serif font-bold text-primary mb-6 block">
                            La Bella Toscana
                        </Link>
                        <p className="text-cream/60 max-w-sm leading-relaxed mb-8">
                            Erleben Sie die kulinarische Vielfalt der Toskana. Wir laden Sie ein auf eine Reise voller Geschmack und Tradition.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Links</h4>
                        <ul className="space-y-4 text-cream/60">
                            <li><a href="#menu" className="hover:text-cream transition-colors">Speisekarte</a></li>
                            <li><a href="#about" className="hover:text-cream transition-colors">Über uns</a></li>
                            <li><a href="#gallery" className="hover:text-cream transition-colors">Galerie</a></li>
                            <li><a href="#contact" className="hover:text-cream transition-colors">Kontakt</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Rechtliches</h4>
                        <ul className="space-y-4 text-cream/60">
                            <li><a href="#" className="hover:text-cream transition-colors">Impressum</a></li>
                            <li><a href="#" className="hover:text-cream transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="hover:text-cream transition-colors">AGB</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-cream/40 text-sm">
                    <p>© {new Date().getFullYear()} La Bella Toscana. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
}
