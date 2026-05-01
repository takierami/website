import { motion } from "motion/react";
import { Code, Palette, Server, Zap, CheckCircle2, ArrowRight, Sparkles, Rocket, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Tailored web solutions built from scratch to match your exact requirements.",
      features: [
        "Responsive design that works on all devices",
        "Modern tech stack (React, Next.js, TypeScript)",
        "SEO-optimized architecture",
        "Fast loading times and smooth animations"
      ],
      outcome: "A unique website that stands out and converts visitors into customers"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Pixel-perfect execution of designs with attention to every detail.",
      features: [
        "Transform Figma designs into production code",
        "Interactive animations and micro-interactions",
        "Accessibility (WCAG) compliance",
        "Cross-browser compatibility"
      ],
      outcome: "Beautiful interfaces that users love to interact with"
    },
    {
      icon: Server,
      title: "Backend Development & APIs",
      description: "Robust server-side solutions to power your web applications.",
      features: [
        "RESTful and GraphQL API development",
        "Database design and optimization",
        "Authentication and security",
        "Third-party integrations"
      ],
      outcome: "Scalable backend systems that grow with your business"
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Speed optimization to ensure your website loads instantly.",
      features: [
        "Lighthouse score 95+ guaranteed",
        "Image optimization and lazy loading",
        "Code splitting and bundle optimization",
        "Caching strategies"
      ],
      outcome: "Lightning-fast websites that keep users engaged"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We discuss your goals, target audience, and technical requirements."
    },
    {
      step: "02",
      title: "Planning",
      description: "I create a detailed project plan with timeline, milestones, and deliverables."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with regular updates and feedback sessions."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment to production with post-launch support and maintenance."
    }
  ];

  const pricingTiers = [
    {
      icon: Sparkles,
      name: "Starter",
      price: "$399",
      duration: "one-time",
      description: "Perfect for small businesses and personal brands getting started online.",
      features: [
        "Single page website (Landing Page)",
        "Responsive mobile-first design",
        "Contact form integration",
        "Basic SEO optimization",
        "2 rounds of revisions",
        "1 month post-launch support"
      ],
      highlight: false,
      deliveryTime: "5-7 days"
    },
    {
      icon: Rocket,
      name: "Professional",
      price: "$1,999",
      duration: "one-time",
      description: "Comprehensive websites for growing businesses that need more features.",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, etc.)",
        "Custom design & animations",
        "CMS integration (easy content updates)",
        "Advanced SEO & performance optimization",
        "Contact forms & social media integration",
        "Google Analytics setup",
        "3 months post-launch support",
        "Unlimited revisions during development"
      ],
      highlight: true,
      popular: true,
      deliveryTime: "2-3 weeks"
    },
    {
      icon: Crown,
      name: "Premium",
      price: "$4,999",
      duration: "starting at",
      description: "Full-featured web applications with custom functionality and integrations.",
      features: [
        "Unlimited pages",
        "Custom web application features",
        "Database & backend integration",
        "User authentication & dashboards",
        "Third-party API integrations",
        "E-commerce functionality (optional)",
        "Advanced animations & interactions",
        "Performance optimization (95+ Lighthouse score)",
        "6 months post-launch support",
        "Priority support & maintenance"
      ],
      highlight: false,
      deliveryTime: "4-8 weeks"
    },
    {
      icon: Zap,
      name: "Enterprise",
      price: "$7,000+",
      duration: "custom",
      description: "Complex platforms and enterprise solutions with full-stack capabilities.",
      features: [
        "Everything in Premium",
        "Custom architecture & infrastructure",
        "Multi-user systems & role management",
        "Advanced security & compliance",
        "Real-time features (chat, notifications)",
        "Payment processing integration",
        "API development & documentation",
        "DevOps & deployment automation",
        "Dedicated project manager",
        "12 months priority support"
      ],
      highlight: false,
      deliveryTime: "8-16 weeks"
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
          >
            <span className="font-mono text-sm text-cyan-400">Services</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Web Development
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            End-to-end web development services for businesses that want to stand out online.
            Modern, fast, and built to convert.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={32} className="text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </motion.div>

                <motion.p 
                  className="text-white/60 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {service.description}
                </motion.p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 + fIndex * 0.05 }}
                    >
                      <CheckCircle2 
                        size={20} 
                        className="text-cyan-400 flex-shrink-0 mt-0.5" 
                      />
                      <span className="text-sm text-white/70">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6 }}
                >
                  <div className="flex items-start gap-2">
                    <Zap size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-mono text-purple-400">
                      {service.outcome}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              How We Work Together
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer group"
              >
                <motion.div 
                  className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 opacity-30 group-hover:opacity-50 transition-opacity"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.2,
                    duration: 0.6,
                    ease: "backOut"
                  }}
                >
                  {item.step}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-white/60 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Connection line to next item (except last) */}
                {index < process.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </motion.h2>

          <motion.p 
            className="text-white/60 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose a package that fits your needs. All prices are one-time payments with no hidden fees.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 60, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm transition-all group ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20' 
                      : 'bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/30'
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {tier.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="text-xs font-mono font-bold">MOST POPULAR</span>
                    </motion.div>
                  )}

                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      duration: 0.6,
                      ease: "backOut"
                    }}
                  >
                    <Icon size={28} className="text-cyan-400" />
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {tier.name}
                  </motion.h3>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                    </div>
                    <span className="text-sm text-white/60 font-mono">{tier.duration}</span>
                  </motion.div>

                  <motion.p 
                    className="text-sm text-white/70 mb-6 leading-relaxed min-h-[60px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {tier.description}
                  </motion.p>

                  <motion.div 
                    className="mb-6 p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="text-xs text-white/50 mb-1 font-mono">Delivery Time:</div>
                    <div className="text-sm font-semibold text-cyan-400">{tier.deliveryTime}</div>
                  </motion.div>

                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <motion.div 
                        key={feature}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7 + fIndex * 0.03 }}
                      >
                        <CheckCircle2 
                          size={16} 
                          className="text-cyan-400 flex-shrink-0 mt-0.5" 
                        />
                        <span className="text-xs text-white/70 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-mono font-semibold transition-all ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-center text-white/50 text-sm mt-8 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            💡 Need something custom? <Link to="/contact" className="text-cyan-400 hover:underline">Let's talk</Link>
          </motion.p>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Work With Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                description: "Clean, maintainable code following industry best practices. No shortcuts."
              },
              {
                title: "Clear Communication",
                description: "Regular updates, transparent process, and always available for questions."
              },
              {
                title: "On Time Delivery",
                description: "Realistic timelines and consistent delivery. Your deadline matters."
              },
              {
                title: "Modern Stack",
                description: "Latest technologies ensuring your website stays relevant for years."
              },
              {
                title: "Performance Focused",
                description: "Every website optimized for speed, SEO, and user experience."
              },
              {
                title: "Post-Launch Support",
                description: "I don't disappear after launch. Support and maintenance included."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 2,
                  transition: { duration: 0.2 }
                }}
                className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3 
                  className="text-lg font-mono font-semibold text-cyan-400 mb-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-white/60 leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Ready to get started?
          </motion.h3>
          <motion.p 
            className="text-white/60 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Let's discuss your project and see how I can help bring your vision to life.
          </motion.p>
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-mono font-semibold flex items-center gap-2 mx-auto group"
            >
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};