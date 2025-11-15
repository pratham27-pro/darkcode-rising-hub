import Spline from "@splinetool/react-spline";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Spline 3D Background */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full relative">
                    {/* Gradient Overlay - behind Spline on desktop, above on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80 z-0"></div>
                    <div className="absolute inset-0 md:z-10 z-0">
                        <Spline
                            scene="https://prod.spline.design/pitI-6BUBA8sj8ox/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                    {/* Blocking overlay for mobile only */}
                    <div className="absolute inset-0 md:hidden z-20 pointer-events-auto"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-20 text-center relative">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
                    {/* Event Badge */}
                    <div className="inline-block px-4 py-2 neon-border rounded-full bg-background/50 backdrop-blur-sm relative z-20">
                        <span className="text-primary text-glow font-semibold">
                            10-Hour Innovation Sprint
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span className="text-primary text-glow block mb-2">
                            DarkCode Rising
                        </span>
                        <span className="text-foreground">
                            Where Darkness Meets Innovation
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Join the ultimate Batman-themed hackathon. Code in the
                        shadows, innovate in the light.
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap justify-center gap-6 text-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" size={20} />
                            <span className="hidden sm:inline">
                                January 17, 2026
                            </span>
                            <span className="sm:hidden">Jan 17, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-primary" size={20} />
                            <span>10 Hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" size={20} />
                            <span className="hidden sm:inline">
                                In-Person Event
                            </span>
                            <span className="sm:hidden">In-Person</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 neon-glow hover-glow"
                        >
                            Register Now
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="neon-border text-lg px-8 py-6 hover-glow"
                        >
                            View Schedule
                        </Button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="pt-12 animate-float">
                        <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
                            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
