import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bikergram.ap@gmail.com",
    href: "mailto:bikergram.ap@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bikergram_andrapradesh",
    href: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Andhra Pradesh, India",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary uppercase tracking-widest text-sm">
                Get In Touch
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-2">
                LET'S <span className="text-primary">CONNECT</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-6">
                Whether you're a brand looking to collaborate, an event organizer, 
                or a fellow rider wanting to join our community—we'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    REACH OUT <span className="text-primary">ANYTIME</span>
                  </h2>
                  <p className="text-muted-foreground">
                    We're always excited to connect with fellow enthusiasts, potential 
                    collaborators, and anyone passionate about the biking culture.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 glass-card rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Collaboration Types */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-display text-xl text-foreground">WE'RE OPEN TO:</h3>
                  <ul className="space-y-2">
                    {[
                      "Brand Collaborations & Sponsorships",
                      "Event Coverage & Partnerships",
                      "Content Creation Projects",
                      "Community Rides & Meetups",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 md:p-8"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      MESSAGE SENT!
                    </h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      SEND US A MESSAGE
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Your Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration Inquiry"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your idea..."
                        rows={5}
                        required
                        className="bg-background/50 border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
