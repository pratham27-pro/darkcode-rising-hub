import { Code2, Users, Trophy, Zap } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: Code2,
            title: "Innovation Sprint",
            description:
                "10 intense hours of coding, building, and creating groundbreaking solutions.",
        },
        {
            icon: Users,
            title: "Collaborative",
            description:
                "Team up with talented developers, designers, and innovators from diverse backgrounds.",
        },
        {
            icon: Trophy,
            title: "Win Big",
            description:
                "Compete for a ₹50,000+ prize pool and exclusive mentorship opportunities.",
        },
        {
            icon: Zap,
            title: "Fast-Paced",
            description:
                "Experience the thrill of rapid prototyping and instant feedback from industry experts.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary text-glow">What is</span>{" "}
                        DarkCode Rising?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        DarkCode Rising is not just another hackathon. It's
                        where innovation emerges from the shadows of Gotham,
                        where code becomes your superpower, and where you'll
                        join forces with fellow vigilantes to build the future
                        of technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-lg bg-card border border-border hover-glow transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Icon className="text-primary" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
