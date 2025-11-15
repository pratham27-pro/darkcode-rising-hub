import { Brain, Bot, Smartphone, Globe } from "lucide-react";

const Themes = () => {
    const themes = [
        {
            icon: Bot,
            title: "AI & Machine Learning",
            description:
                "Build intelligent systems that learn, adapt, and solve complex problems autonomously.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Brain,
            title: "Web Dev",
            description:
                "Develop innovative web solutions to solve real life problems for a better cause.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Smartphone,
            title: "Mobile Innovation",
            description:
                "Create cutting-edge mobile applications that revolutionize user experiences.",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Globe,
            title: "Web3 & Blockchain",
            description:
                "Pioneer decentralized solutions that redefine trust and transparency in the digital age.",
            color: "from-orange-500 to-yellow-500",
        },
    ];

    return (
        <section id="themes" className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary text-glow">
                            Hackathon
                        </span>{" "}
                        Themes
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Choose your battleground. Pick a theme that ignites your
                        passion and build something extraordinary.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {themes.map((theme, index) => {
                        const Icon = theme.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-xl bg-card border border-border hover-glow overflow-hidden animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                                    <Icon size={128} className="text-primary" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon
                                            className="text-primary"
                                            size={32}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                                        {theme.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {theme.description}
                                    </p>
                                </div>

                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Themes;
