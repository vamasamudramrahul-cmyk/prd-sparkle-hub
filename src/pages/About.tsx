import { motion } from "framer-motion";
import { Target, Eye, Heart, Bike } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import communityImage from "@/assets/community.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every ride is fueled by our deep love for motorcycles and the freedom they represent.",
  },
  {
    icon: Bike,
    title: "Brotherhood",
    description: "More than a community—we're a family bound by the shared thrill of the open road.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for cinematic perfection in every piece of content we create.",
  },
  {
    icon: Eye,
    title: "Authenticity",
    description: "Real stories, real rides, real emotions—no filters on our journey.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary uppercase tracking-widest text-sm">
                Our Story
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-2">
                ABOUT <span className="text-primary">BIKERGRAM</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Born from the passion for motorcycles and the love for visual storytelling, 
                Bikergram AP has grown into Andhra Pradesh's most vibrant biker content community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={communityImage}
                  alt="Bikergram community"
                  className="rounded-xl w-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl blur-xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  FROM LOCAL RIDES TO <span className="text-primary">VIRAL REELS</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a small group of motorcycle enthusiasts sharing 
                    their weekend rides has evolved into a powerhouse of cinematic 
                    biker content that resonates with thousands across India.
                  </p>
                  <p>
                    Based in Andhra Pradesh, we capture the essence of biking culture—
                    the roar of engines, the camaraderie of riders, and the breathtaking 
                    landscapes that make every journey memorable.
                  </p>
                  <p>
                    Today, Bikergram AP stands as a digital identity for riders who 
                    want to be part of something bigger than solo rides. We're building 
                    a movement, one reel at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8"
              >
                <Eye className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-2xl text-foreground mb-3">OUR VISION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most recognized biker content platform, inspiring 
                  millions to embrace the riding lifestyle while showcasing the beauty 
                  of our nation's roads and communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-xl p-8"
              >
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-2xl text-foreground mb-3">OUR MISSION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create world-class cinematic content that celebrates the biker 
                  spirit, foster a supportive community of riders, and collaborate 
                  with brands that share our passion for motorcycles.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary uppercase tracking-widest text-sm">
                What Drives Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">
                OUR <span className="text-primary">VALUES</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
