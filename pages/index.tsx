import React, { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { SchemaMarkup } from '../components/ui/SchemaMarkup';

const Solutions = lazy(() => import('../components/Solutions').then(module => ({ default: module.Solutions })));
const WhyVProject = lazy(() => import('../components/WhyVProject').then(module => ({ default: module.WhyVProject })));
const Portfolio = lazy(() => import('../components/Portfolio').then(module => ({ default: module.Portfolio })));
const Footer = lazy(() => import('../components/Footer').then(module => ({ default: module.Footer })));

const SectionLoader = () => <div className="section-placeholder bg-zinc-950/20 animate-pulse" />;

const Home: React.FC = () => {
    return (
        <div className="bg-[#09090b] text-zinc-50 min-h-screen selection:bg-cyan-500/30">
            <SchemaMarkup />
            <AnimatePresence>
                <Navbar />
                <main>
                    <Hero />
                    <Suspense fallback={<SectionLoader />}>
                        <Solutions />
                        <WhyVProject />
                        <Portfolio />
                        <Footer />
                    </Suspense>
                </main>
                <FloatingWhatsApp />
            </AnimatePresence>
        </div>
    );
};

export default Home;
