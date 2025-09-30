import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
      <Hero />
      <RateSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

const Navbar = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-lg py-3 shadow-lg"
        : "bg-white/90 backdrop-blur-md py-5"
    }`}
  >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
      <motion.div
        className="flex items-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <a href="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ConfidenSee
          </div>
        </a>
      </motion.div>

      <ul className="hidden items-center gap-8 lg:flex">
        {["Features", "Pricing", "Testimonials"].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="relative font-medium text-gray-700 hover:text-primary transition-colors duration-300 after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/dashboard"
            className="font-medium text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Sign In
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/register"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </a>
        </motion.li>
      </ul>

      <button
        className="flex flex-col gap-1.5 lg:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
          className="w-6 h-0.5 bg-gray-700 rounded-full"
        />
        <motion.div
          animate={{ opacity: isMenuOpen ? 0 : 1 }}
          className="w-6 h-0.5 bg-gray-700 rounded-full"
        />
        <motion.div
          animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
          className="w-6 h-0.5 bg-gray-700 rounded-full"
        />
      </button>
    </div>

    <motion.ul
      initial={false}
      animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
      className="flex flex-col items-center gap-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg overflow-hidden lg:hidden"
    >
      {isMenuOpen && (
        <>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="pt-4"
          >
            <a href="#features" className="font-medium text-gray-700">
              Features
            </a>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <a href="#pricing" className="font-medium text-gray-700">
              Pricing
            </a>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#testimonials" className="font-medium text-gray-700">
              Testimonials
            </a>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <a href="/dashboard" className="font-medium text-gray-700">
              Sign In
            </a>
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pb-4"
          >
            <a
              href="/register"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-white font-medium"
            >
              Get Started
            </a>
          </motion.li>
        </>
      )}
    </motion.ul>
  </motion.nav>
);

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 px-6 sm:px-8 ">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-64 -left-64 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-72 -right-72 h-[600px] w-[600px] rounded-full bg-secondary/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-3/4 h-[400px] w-[400px] rounded-full bg-tertiary/30 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-30 [background-size:30px_30px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 py-2 px-5 text-sm font-semibold text-primary shadow-lg backdrop-blur-sm"
        >
          <span>✨ AI-Powered Interview Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
        >
          Master Your Next Interview
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed"
        >
          Practice with AI-generated questions, get real-time feedback, and
          track your progress.
          <br />
          ConfidenSee helps you build confidence for your dream job interview.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/register"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-10 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Practicing Free
          </motion.a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-1/4 left-[10%] hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-xl backdrop-blur-lg"
          >
            <div className="text-center">
              <div className="mb-4 text-5xl">🎤</div>
              <h4 className="text-sm font-semibold text-gray-900">
                Voice Analysis
              </h4>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-1/4 left-[15%] hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-xl backdrop-blur-lg"
          >
            <div className="text-center">
              <div className="mb-4 text-5xl">📊</div>
              <h4 className="text-sm font-semibold text-gray-900">
                Performance Metrics
              </h4>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-1/2 right-[10%] hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-xl backdrop-blur-lg"
          >
            <div className="text-center">
              <div className="mb-4 text-5xl">🤖</div>
              <h4 className="text-sm font-semibold text-gray-900">
                AI Feedback
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto mb-2 h-12 w-px bg-gradient-to-b from-primary to-transparent"
        />
        <p className="text-sm text-gray-600">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

const RateSection = () => {
  const stats = [
    { value: "10,000+", label: "Auto-crafted interview questions" },
    { value: "95%", label: "User-reported improvement" },
    { value: "5,000+", label: "Happy users and counting…" },
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl sm:text-5xl font-black text-transparent">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Questions",
      desc: "AI generates questions tailored to your target role and industry",
    },
    {
      icon: "⚡",
      title: "Real-time Feedback",
      desc: "Get instant analysis on your answers with actionable insights",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      desc: "Monitor your improvement with detailed analytics and reports",
    },
    {
      icon: "🎤",
      title: "Voice Practice",
      desc: "Practice speaking your answers with voice recognition technology",
    },
    {
      icon: "💡",
      title: "Smart Hints",
      desc: "Receive contextual hints when you need guidance during practice",
    },
    {
      icon: "🏆",
      title: "Confidence Building",
      desc: "Build real interview confidence through repeated practice",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive platform provides all the tools you need to excel
            in your next interview
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ConfidenSee completely transformed my interview preparation. The AI feedback was incredibly accurate and helped me identify my weak spots. I landed my dream job at Google thanks to this platform!",
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
    },
    {
      quote:
        "The personalized questions and real-time feedback were game-changers. I went from nervous and unprepared to confident and ready. I aced 3 interviews in a row and got multiple offers!",
      name: "Michael Chen",
      role: "Product Manager at Amazon",
    },
    {
      quote:
        "As someone who struggled with interview anxiety, ConfidenSee gave me the practice and confidence I needed. The performance analytics helped me track my progress. Highly recommend to anyone job hunting!",
      name: "Emily Rodriguez",
      role: "Data Scientist at Netflix",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from professionals who landed their dream jobs with ConfidenSee
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 text-4xl text-primary">❝</div>
              <p className="mb-6 text-gray-700 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <h5 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h5>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic Pack",
      price: "৳200",
      desc: "Perfect for getting started",
      features: [
        "10 hours of interview practice",
        "AI generated questions",
        "Basic AI feedback and scoring",
        "Voice + text hybrid mode",
        "Basic performance tracking",
        "Use anytime within 30 days",
        "Email support",
      ],
    },
    {
      name: "Standard Pack",
      price: "৳400",
      desc: "Ideal for serious candidates",
      popular: true,
      features: [
        "20 hours of interview practice",
        "AI generated questions",
        "Advanced AI feedback with insights",
        "Voice + text hybrid mode",
        "Detailed performance analytics",
        "Progress tracking & recommendations",
        "Use anytime within 30 days",
        "Priority email support",
        "Offline simulation mode",
      ],
    },
    {
      name: "Premium Pack",
      price: "৳600",
      desc: "For comprehensive preparation",
      features: [
        "30 hours of interview practice",
        "AI generated questions",
        "Advanced AI with personalized learning",
        "Voice + text hybrid mode",
        "Comprehensive analytics dashboard",
        "Custom question creation",
        "Use anytime within 30 days",
        "Priority support + live chat",
        "Offline simulation mode",
        "Interview scheduling assistant",
        "Export performance reports",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600">
            Flexible options designed for every stage of your career journey
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary ring-4 ring-primary/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>
              <p className="mb-6 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {plan.price}
              </p>
              <p className="mb-6 text-gray-600">{plan.desc}</p>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-6 sm:px-8 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              ConfidenSee
            </div>
            <p className="mb-6 text-gray-400 max-w-xs">
              Master your interview skills with AI-powered practice and
              feedback.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin-in", "instagram", "facebook-f"].map(
                (social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm">🔗</span>
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary">
              Product
            </h4>
            {["Features", "Pricing", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block mb-3 text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1"
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary">
              Resources
            </h4>
            {["Blog", "Help Center"].map((item) => (
              <a
                key={item}
                href="#"
                className="block mb-3 text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1"
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary">
              Company
            </h4>
            {["About Us", "Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="block mb-3 text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ConfidenSee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default IndexPage;
