import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-lighter-bg">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isScrolled={isScrolled} />
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg' : 'bg-white/90 backdrop-blur-md py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
            <div className="flex cursor-pointer items-center">
                <Link to="/">
                    <img src="/img/logo2.png" alt="Logo" className="h-16" />
                </Link>
            </div>
            <ul className="hidden items-center gap-10 lg:flex">
                <li><a href="#features" className="relative font-medium text-text-dark after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 after:content-[''] hover:text-primary hover:after:w-full">Features</a></li>
                <li><a href="#pricing" className="relative font-medium text-text-dark after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 after:content-[''] hover:text-primary hover:after:w-full">Pricing</a></li>
                <li><a href="#testimonials" className="relative font-medium text-text-dark after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 after:content-[''] hover:text-primary hover:after:w-full">Testimonials</a></li>
                <li><Link to="/dashboard" className="font-medium text-text-dark">Sign In</Link></li>
                <li><Link to="/register" className="rounded-full border border-primary/20 bg-primary/10 py-2 px-6 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:shadow-lg">Get Started</Link></li>
            </ul>
            <div className="flex cursor-pointer flex-col gap-1 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
        </div>
        {isMenuOpen && (
            <ul className="flex flex-col items-center gap-4 border-t border-gray-200 bg-white/95 py-4 backdrop-blur-lg lg:hidden">
                <li><a href="#features" className="font-medium text-text-dark">Features</a></li>
                <li><a href="#pricing" className="font-medium text-text-dark">Pricing</a></li>
                <li><a href="#testimonials" className="font-medium text-text-dark">Testimonials</a></li>
                <li><Link to="/dashboard" className="font-medium text-text-dark">Sign In</Link></li>
                <li><Link to="/register" className="rounded-full border border-primary/20 bg-primary/10 py-2 px-6 text-primary">Get Started</Link></li>
            </ul>
        )}
    </nav>
);

const Hero = () => (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-light-bg px-8">
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <div className="animate-pulse-slow absolute -top-64 -left-64 h-[500px] w-[500px] rounded-full bg-primary-light opacity-30 blur-3xl filter"></div>
            <div className="animate-pulse-slow animation-delay-2000 absolute -bottom-72 -right-72 h-[600px] w-[600px] rounded-full bg-secondary-light opacity-30 blur-3xl filter"></div>
            <div className="animate-pulse-slow animation-delay-4000 absolute top-1/2 left-3/4 h-[400px] w-[400px] rounded-full bg-secondary/30 opacity-30 blur-3xl filter"></div>
            <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-30 [background-size:30px_30px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl py-24 text-center">
            <div className="animate-fade-in mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 py-2 px-4 text-sm font-medium text-primary shadow-lg shadow-primary-light backdrop-blur-sm">
                <span>AI-Powered Interview Platform</span>
            </div>
            <h1 className="animate-fade-up mb-6 text-5xl font-bold leading-tight text-text-dark">
                <span className="block">Master Your Next Interview</span>
            </h1>
            <p className="animate-fade-up animation-delay-200 mx-auto mb-10 max-w-xl text-lg text-text-gray opacity-0">
                Practice with AI-generated questions, get real-time feedback, and track your progress.<br />ConfidenSee helps you build confidence for your dream job interview.
            </p>
            <div className="animate-fade-up animation-delay-400 flex items-center justify-center gap-4 opacity-0">
                <Link to="/register" className="relative z-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary py-4 px-10 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <span>Start Practicing Free</span>
                </Link>
            </div>
        </div>
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
            <div className="animate-float absolute top-1/4 left-[10%] flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-lg backdrop-blur-lg">
                <div className="text-center">
                    <i className="fas fa-microphone mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl text-transparent"></i>
                    <h4 className="text-sm font-semibold text-text-dark">Voice Analysis</h4>
                </div>
            </div>
            <div className="top-3/5 animate-float animation-delay-500 absolute left-[15%] flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-lg backdrop-blur-lg">
                <div className="text-center">
                    <i className="fas fa-chart-line mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl text-transparent"></i>
                    <h4 className="text-sm font-semibold text-text-dark">Performance Metrics</h4>
                </div>
            </div>
            <div className="top-2/5 animate-float animation-delay-1000 absolute right-[10%] flex h-44 w-44 items-center justify-center rounded-2xl border border-white/90 bg-white/80 shadow-lg backdrop-blur-lg">
                <div className="text-center">
                    <i className="fas fa-robot mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl text-transparent"></i>
                    <h4 className="text-sm font-semibold text-text-dark">AI Feedback</h4>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-text-gray">
            <div className="mx-auto mb-2 h-12 w-px bg-gradient-to-b from-primary to-transparent"></div>
            <p>Scroll to explore</p>
        </div>
    </section>
);

const RateSection = () => (
    <section className="bg-light-bg py-16 px-8 text-center">
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="w-56 rounded-2xl bg-lighter-bg p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <div className="my-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-black text-transparent">10,000+</div>
                <div className="text-sm text-text-gray">Auto-crafted interview questions</div>
            </div>
            <div className="w-56 rounded-2xl bg-lighter-bg p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <div className="my-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-black text-transparent">95%</div>
                <div className="text-sm text-text-gray">User-reported improvement</div>
            </div>
            <div className="w-56 rounded-2xl bg-lighter-bg p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <div className="my-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-black text-transparent">5,000+</div>
                <div className="text-sm text-text-gray">and counting…</div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-24 px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">Everything You Need to Succeed</h2>
            <p className="text-lg text-text-gray">Our comprehensive platform provides all the tools you need to excel in your next interview</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
        </div>
    </section>
);

const Testimonials = () => (
    <section id="testimonials" className="bg-light-bg py-24 px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">What Our Users Say</h2>
            <p className="text-lg text-text-gray">Hear from professionals who landed their dream jobs with ConfidenSee</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <p className="mb-6 text-lg text-text-gray">
                    "ConfidenSee completely transformed my interview preparation. The AI feedback was incredibly accurate and helped me identify my weak spots. I landed my dream job at Google thanks to this platform!"
                </p>
                <div className="flex items-center">
                    <div>
                        <h5 className="font-semibold text-text-dark">U1 User 1</h5>
                        <p className="text-sm text-text-gray">Software Engineer at Google</p>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <p className="mb-6 text-lg text-text-gray">
                    "The personalized questions and real-time feedback were game-changers. I went from nervous and unprepared to confident and ready. I aced 3 interviews in a row and got multiple offers!"
                </p>
                <div className="flex items-center">
                    <div>
                        <h5 className="font-semibold text-text-dark">U2 User 2</h5>
                        <p className="text-sm text-text-gray">Product Manager at Amazon</p>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <p className="mb-6 text-lg text-text-gray">
                    "As someone who struggled with interview anxiety, ConfidenSee gave me the practice and confidence I needed. The performance analytics helped me track my progress. Highly recommend to anyone job hunting!"
                </p>
                <div className="flex items-center">
                    <div>
                        <h5 className="font-semibold text-text-dark">U3 User 3</h5>
                        <p className="text-sm text-text-gray">Data Scientist at Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-24 px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">Choose Your Plan</h2>
            <p className="text-lg text-text-gray">Flexible options designed for every stage of your career journey</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="mb-4 text-2xl font-bold text-text-dark">Basic Pack</h3>
                <p className="mb-6 text-4xl font-bold text-primary">৳200</p>
                <p className="mb-6 text-text-gray">Perfect for getting started</p>
                <ul className="mb-8 space-y-3 text-left text-text-gray">
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>10 hours of interview practice</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>AI generated questions</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Basic AI feedback and scoring</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Voice + text hybrid mode</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Basic performance tracking</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Use anytime within 30 days</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Email support</li>
                </ul>
                <button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">Get Started</button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-bold text-white">Most Popular</div>
                <h3 className="mb-4 text-2xl font-bold text-text-dark">Standard Pack</h3>
                <p className="mb-6 text-4xl font-bold text-primary">৳400</p>
                <p className="mb-6 text-text-gray">Ideal for serious candidates</p>
                <ul className="mb-8 space-y-3 text-left text-text-gray">
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>20 hours of interview practice</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>AI generated questions</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Advanced AI feedback with insights</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Voice + text hybrid mode</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Detailed performance analytics</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Progress tracking & recommendations</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Use anytime within 30 days</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Priority email support</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Offline simulation mode</li>
                </ul>
                <button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">Get Started</button>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-lighter-bg p-8 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="mb-4 text-2xl font-bold text-text-dark">Premium Pack</h3>
                <p className="mb-6 text-4xl font-bold text-primary">৳600</p>
                <p className="mb-6 text-text-gray">For comprehensive preparation</p>
                <ul className="mb-8 space-y-3 text-left text-text-gray">
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>30 hours of interview practice</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>AI generated questions</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Advanced AI with personalized learning</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Voice + text hybrid mode</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Comprehensive analytics dashboard</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Custom question creation</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Use anytime within 30 days</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Priority support + live chat</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Offline simulation mode</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Interview scheduling assistant</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-3 text-primary"></i>Export performance reports</li>
                </ul>
                <button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">Get Started</button>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-light-bg px-8 pt-16 pb-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
                <div className="flex items-center gap-3 text-2xl font-bold text-text-dark"><span>ConfidenSee</span></div>
                <p className="my-4 max-w-xs text-text-gray">Master your interview skills with AI-powered practice and feedback.</p>
                <div className="flex gap-4">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-2">
                <div>
                    <h4 className="relative mb-6 pb-2 text-lg font-semibold text-text-dark after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary after:content-['']">Product</h4>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Features</a>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Pricing</a>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Testimonials</a>
                </div>
                <div>
                    <h4 className="relative mb-6 pb-2 text-lg font-semibold text-text-dark after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary after:content-['']">Resources</h4>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Blog</a>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Help Center</a>
                </div>
                <div>
                    <h4 className="relative mb-6 pb-2 text-lg font-semibold text-text-dark after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-gradient-to-r after:from-primary after:to-secondary after:content-['']">Company</h4>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">About Us</a>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Privacy Policy</a>
                    <a href="#" className="mb-3 block text-text-gray transition-all duration-300 hover:translate-x-1 hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-gray-200 pt-8 text-center text-sm text-text-gray">
            <p>&copy; ConfidenSee. All rights reserved.</p>
        </div>
    </footer>
);

export default IndexPage;