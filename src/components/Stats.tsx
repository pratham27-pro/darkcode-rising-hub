import { useEffect, useState, useRef } from "react";

interface StatProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

const StatCounter = ({ value, label, suffix = "", prefix = "" }: StatProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <div ref={statRef} className="text-center space-y-2 animate-slide-up">
            <div className="text-4xl md:text-5xl font-bold text-primary text-glow">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </div>
            <div className="text-muted-foreground text-lg">{label}</div>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { value: 500, label: "Participants", suffix: "+" },
        { value: 100, label: "Teams", suffix: "+" },
        { value: 50000, label: "Prize Pool", prefix: "₹" },
        { value: 24, label: "Mentors", suffix: "+" },
    ];

    return (
        <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatCounter key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
