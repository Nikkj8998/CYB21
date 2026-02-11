import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    Shield,
    MonitorCheck,
    Zap,
    ArrowRight,
    CheckCircle2,
    Check,
    ShieldCheck,
    Clock,
    Briefcase,
    AlertCircle,
    Users,
    BarChart3,
    Server,
    Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import { Link } from "react-router-dom";

const ManagedITSupport = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const [heroRef, heroInView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [plansRef, plansInView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const [coverageRef, coverageInView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const whyChoose = [
        "Professional MSP delivery model (not basic IT AMC)",
        "Pricing aligned with Indian Tier-1 MSP market",
        "Business-hours and 24×7 support options",
        "SLA-driven service delivery and reporting",
        "Security-focused IT operations",
        "Scalable plans as your organization grows",
    ];

    const standardPlan = [
        "L1 & L2 remote IT support",
        "Ticket-based support with defined SLAs",
        "Desktop, laptop, server, and network support",
        "System monitoring and health checks",
        "Patch management and routine maintenance",
        "Email, OS, and application support",
    ];

    const premiumPlan = [
        "All Standard plan services",
        "24×7 IT support coverage",
        "L3 escalation support",
        "Priority incident handling",
        "Faster SLA response and resolution",
    ];

    const premiumPlusPlan = [
        "All Premium plan services",
        "Endpoint security (AV / EDR) management",
        "Security monitoring and alert handling",
        "Vulnerability and patch risk tracking",
        "Security incident coordination",
        "Monthly IT and security health reports",
    ];

    const pricingStandard = [
        { users: "10 – 25", price: "₹25,000" },
        { users: "26 – 50", price: "₹40,000" },
        { users: "51 – 75", price: "₹55,000" },
        { users: "76 – 100", price: "₹70,000" },
        { users: "100+", price: "Custom" },
    ];

    const pricingPremium = [
        { users: "10 – 25", price: "₹40,000" },
        { users: "26 – 50", price: "₹65,000" },
        { users: "51 – 75", price: "₹85,000" },
        { users: "76 – 100", price: "₹1,05,000" },
        { users: "100+", price: "Custom" },
    ];

    const pricingPremiumPlus = [
        { users: "10 – 25", price: "₹55,000" },
        { users: "26 – 50", price: "₹90,000" },
        { users: "51 – 75", price: "₹1,20,000" },
        { users: "76 – 100", price: "₹1,50,000" },
        { users: "100+", price: "Custom" },
    ];

    const coverageItems = [
        { icon: Users, text: "End-user IT support (L1, L2, L3)" },
        { icon: Server, text: "Desktop, laptop, and server management" },
        { icon: MonitorCheck, text: "Network and firewall monitoring" },
        { icon: Cloud, text: "Cloud and on-premise infrastructure support" },
        { icon: ShieldCheck, text: "Backup and disaster recovery monitoring" },
        { icon: Briefcase, text: "Security and compliance readiness" },
        { icon: BarChart3, text: "Monthly SLA and performance reporting" },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/managed-it-hero.jpg"
                        alt="Managed IT Support Background"
                        className="w-full h-full object-cover opacity-20 scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/60 to-black"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
                    <div
                        className={`transition-all duration-1000 ${heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                        <div className="inline-block">
                            <Badge className="mb-6 px-4 py-1.5 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm uppercase tracking-widest font-bold backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                Professional Managed IT Support for Indian Businesses
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 md:mb-8 text-balance leading-[1.1] px-4 tracking-tighter">
                            <span
                                className={`block transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                            >
                                CYBAEM TECH DELIVERS
                            </span>
                            <span
                                className={`block text-blue-500 mt-2 transition-all duration-1000 delay-500 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                            >
                                ENTERPRISE-GRADE MSP
                            </span>
                        </h1>
                        <div
                            className={`transition-all duration-1000 delay-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <p className="text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-slate-300 max-w-4xl mx-auto mb-12 font-medium">
                                Helping businesses maintain stable, secure, and well-governed IT
                                environments for organizations with 10–100+ employees. Proactive
                                monitoring, structured operations, and security-ready support.
                            </p>
                        </div>
                        <div
                            className={`transition-all duration-1000 delay-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        className="px-10 py-7 text-lg font-bold rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 group"
                                    >
                                        Get Free Consultation
                                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-500" /> Security First
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-500" /> 24/7 Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section
                ref={whyRef}
                className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/10 relative"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                            <span className="text-white">Why Choose </span>
                            <span className="text-blue-500">Cybaem Tech?</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Our services are designed for SMEs and mid-market companies that
                            require structured IT operations and security-ready support.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChoose.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/[0.04] group"
                            >
                                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Check className="w-5 h-5" />
                                </div>
                                <p className="text-lg font-medium text-slate-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section ref={plansRef} className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                        <span className="text-white">Managed IT Support </span>
                        <span className="text-blue-500">Plans – India</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Standard Plan */}
                    <Card className="bg-white/[0.05] border-white/10 overflow-hidden rounded-3xl backdrop-blur-xl flex flex-col">
                        <CardContent className="p-8 flex-grow">
                            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 font-bold uppercase tracking-widest">
                                8×5 Support
                            </Badge>
                            <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                            <p className="text-slate-400 mb-6 text-sm">
                                Best suited for SMEs operating during standard business hours
                            </p>
                            <div className="space-y-3 mb-8">
                                {standardPlan.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-slate-300"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <h4 className="text-sm font-semibold text-slate-400 mb-4 border-t border-white/10 pt-4">
                                    Monthly Pricing (INR)
                                </h4>
                                <div className="space-y-2">
                                    {pricingStandard.map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-400">{row.users} Users</span>
                                            <span className="text-white font-bold">{row.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="bg-blue-600/10 border-blue-500/30 overflow-hidden rounded-3xl backdrop-blur-xl relative flex flex-col">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Most Popular
                        </div>
                        <CardContent className="p-8 flex-grow">
                            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/40 font-bold uppercase tracking-widest">
                                24×7 Support
                            </Badge>
                            <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                            <p className="text-slate-400 mb-6 text-sm">
                                Designed for businesses with extended operations or critical
                                systems
                            </p>
                            <div className="space-y-3 mb-8">
                                {premiumPlan.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-slate-300"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <h4 className="text-sm font-semibold text-slate-400 mb-4 border-t border-white/10 pt-4">
                                    Monthly Pricing (INR)
                                </h4>
                                <div className="space-y-2">
                                    {pricingPremium.map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-400">{row.users} Users</span>
                                            <span className="text-white font-bold">{row.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Premium Plus Plan */}
                    <Card className="bg-white/[0.05] border-white/10 overflow-hidden rounded-3xl backdrop-blur-xl flex flex-col">
                        <CardContent className="p-8 flex-grow">
                            <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 font-bold uppercase tracking-widest">
                                24×7 + Security
                            </Badge>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Premium Plus
                            </h3>
                            <p className="text-slate-400 mb-6 text-sm">
                                Recommended for security-focused and compliance-driven
                                organizations
                            </p>
                            <div className="space-y-3 mb-8">
                                {premiumPlusPlan.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-slate-300"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <h4 className="text-sm font-semibold text-slate-400 mb-4 border-t border-white/10 pt-4">
                                    Monthly Pricing (INR)
                                </h4>
                                <div className="space-y-2">
                                    {pricingPremiumPlus.map((row, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-400">{row.users} Users</span>
                                            <span className="text-white font-bold">{row.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Coverage Section */}
            <section
                ref={coverageRef}
                className="py-24 bg-white/[0.02] border-y border-white/10"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                                <span className="text-white">What Our Managed </span>
                                <span className="text-blue-500">IT Services Cover</span>
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                            <div className="grid gap-6">
                                {coverageItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                                    >
                                        <item.icon className="w-6 h-6 text-blue-500 shrink-0" />
                                        <span className="text-slate-200 font-medium">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <Card className="bg-white/[0.05] border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                                    Plan Comparison
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="py-4 text-slate-400">Feature</th>
                                                <th className="py-4 text-blue-400">Standard</th>
                                                <th className="py-4 text-blue-500">Premium</th>
                                                <th className="py-4 text-purple-400">Plus</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 text-slate-300">Coverage</td>
                                                <td className="py-4 text-slate-400">8×5</td>
                                                <td className="py-4 text-slate-400">24×7</td>
                                                <td className="py-4 text-slate-400">24×7</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 text-slate-300">Levels</td>
                                                <td className="py-4 text-slate-400">L1–L2</td>
                                                <td className="py-4 text-slate-400">L1–L3</td>
                                                <td className="py-4 text-slate-400">L1–L3</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-4 text-slate-300">Security</td>
                                                <td className="py-4 text-red-500">No</td>
                                                <td className="py-4 text-red-500">No</td>
                                                <td className="py-4 text-green-500">Yes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                            <h4 className="font-bold text-white mb-2">
                                Is this pricing aligned with the Indian market?
                            </h4>
                            <p className="text-slate-400 text-sm">
                                Yes. These prices reflect professional MSP rates in India and
                                are aligned with Tier-1 and Tier-2 service providers.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                            <h4 className="font-bold text-white mb-2">
                                Is this an AMC service?
                            </h4>
                            <p className="text-slate-400 text-sm">
                                No. This is a Managed IT Services (MSP) model, including
                                proactive monitoring, SLAs, escalation, and reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ManagedITSupport;
