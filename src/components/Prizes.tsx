import { Trophy, Award, Gift } from "lucide-react";

const Prizes = () => {
    const prizes = [
        {
            icon: Trophy,
            place: "1st Place",
            amount: "₹25,000",
            perks: [
                "Exclusive mentorship",
                "LinkedIn feature",
                "Tech goodie bag",
            ],
            highlight: true,
        },
        {
            icon: Award,
            place: "2nd Place",
            amount: "₹15,000",
            perks: ["Industry connections", "Certificate", "Premium swag"],
            highlight: false,
        },
        {
            icon: Gift,
            place: "3rd Place",
            amount: "₹10,000",
            perks: [
                "Recognition badge",
                "Networking access",
                "Tech merchandise",
            ],
            highlight: false,
        },
    ];

    return (
        <section id="prizes" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary text-glow">Prizes</span> &
                        Rewards
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Compete for incredible prizes, recognition, and
                        opportunities that will elevate your career.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {prizes.map((prize, index) => {
                        const Icon = prize.icon;
                        return (
                            <div
                                key={index}
                                className={`relative p-8 rounded-xl border transition-all duration-300 animate-slide-up ${
                                    prize.highlight
                                        ? "bg-card border-primary neon-border scale-105 md:scale-110"
                                        : "bg-card border-border hover-glow"
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {prize.highlight && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="px-4 py-1 bg-primary rounded-full text-sm font-semibold text-primary-foreground neon-glow">
                                            Winner
                                        </div>
                                    </div>
                                )}

                                <div className="text-center space-y-4">
                                    <div
                                        className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
                                            prize.highlight
                                                ? "bg-primary/20 neon-glow"
                                                : "bg-primary/10"
                                        }`}
                                    >
                                        <Icon
                                            className="text-primary"
                                            size={40}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            {prize.place}
                                        </h3>
                                        <div className="text-4xl font-bold text-primary text-glow">
                                            {prize.amount}
                                        </div>
                                    </div>

                                    <div className="pt-4 space-y-2">
                                        {prize.perks.map((perk, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 text-muted-foreground"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                <span>{perk}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Plus special category prizes, sponsor awards, and more
                        surprises!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
