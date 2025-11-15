import { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    try {
      const resp = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });

      // try to parse response body for better debug info
      let body: any = null;
      const ct = resp.headers.get('content-type') || '';
      try {
        if (ct.includes('application/json')) body = await resp.json();
        else body = await resp.text();
      } catch (err) {
        body = '(unparsable response)';
      }

      if (!resp.ok) {
        console.error('Contact POST failed', { status: resp.status, body });
        throw new Error(`Server responded ${resp.status} - ${JSON.stringify(body)}`);
      }

      console.log('Contact POST success', { status: resp.status, body });
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="text-primary" size={24} />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-primary text-glow">Get In Touch</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Have questions about DarkCode Rising? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-foreground font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-foreground font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-foreground font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                There was an error sending your message. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg neon-glow hover-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
