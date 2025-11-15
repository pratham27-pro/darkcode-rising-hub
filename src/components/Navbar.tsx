import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Themes", href: "#themes" },
        { name: "Prizes", href: "#prizes" },
        { name: "Schedule", href: "#schedule" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact us", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-lg border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-2">
                        <div className="w-20">
                            <img
                                src="/td.png"
                                alt="TechDome"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            variant="outline"
                            className="neon-border hover-glow"
                            onClick={() =>
                                window.open(
                                    "https://discord.gg/tUGexW6J8d",
                                    "_blank"
                                )
                            }
                        >
                            Join Discord
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow">
                            Register Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-lg border-b border-border">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            variant="outline"
                            className="w-full neon-border"
                            onClick={() =>
                                window.open(
                                    "https://discord.gg/tUGexW6J8d",
                                    "_blank"
                                )
                            }
                        >
                            Join Discord
                        </Button>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Register Now
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
