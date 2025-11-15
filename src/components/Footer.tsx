import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/Tech-Dome", label: "GitHub" },
        {
            icon: Twitter,
            href: "https://x.com/Techdome226490?t=GVs3NewJUtEpTQxMKG9eeg&s=09",
            label: "Twitter",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/company/techdome-dev/",
            label: "LinkedIn",
        },
        {
            icon: Instagram,
            href: "https://www.instagram.com/techdome.official?igsh=MTJ0Zmdzd3lhbHA2YQ==",
            label: "Instagram",
        },
    ];

    return (
        <footer className="bg-card/50 border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-primary text-glow">
                                DarkCode
                            </span>
                            <span className="text-foreground"> Rising</span>
                        </div>
                        <p className="text-muted-foreground">
                            Where darkness meets innovation. Join us for an
                            unforgettable hackathon experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#themes"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Themes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#prizes"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Prizes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover-glow transition-all"
                                        aria-label={social.label}
                                    >
                                        <Icon
                                            className="text-primary"
                                            size={20}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="mt-6">
                            <a
                                href="https://discord.gg/darkcode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 neon-border rounded-lg text-primary hover-glow transition-all"
                            >
                                Join our Discord
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border text-center text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} DarkCode Rising. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
