import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    Mail,
    Shield,
    MonitorCheck,
    RefreshCw,
    Zap,
    ArrowRight,
    Users,
    CheckCircle2,
    Lock,
    Search,
    Check,
    Globe,
    Award,
    Clock,
    Briefcase,
    AlertCircle,
    FileText,
    ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import { Link } from "react-router-dom";

const EmailManagement = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [supportRef, supportInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [migrationRef, migrationInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [monitoringRef, monitoringInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [bundledRef, bundledInView] = useInView({ threshold: 0.1, triggerOnce: true });

    const whyChoose = [
        "Experienced Microsoft 365 & Google Workspace specialists",
        "India-based support with global best practices",
        "Structured migration and change management",
        "Proactive monitoring and incident prevention",
        "Security-focused email operations",
        "SLA-driven delivery with predictable pricing",
    ];

    const supportScope = [
        "User mailbox creation, modification, and deletion",
        "Outlook, mobile, and webmail configuration",
        "Password reset and access troubleshooting",
        "Mail flow and delivery issue resolution",
        "Shared mailbox and distribution list management",
        "Email quota and usage monitoring",
        "Basic email security policy support",
    ];

    const migrationScenarios = [
        "On-premise Exchange to Microsoft 365",
        "Google Workspace to Microsoft 365",
        "Microsoft 365 to Google Workspace",
        "IMAP / POP to cloud email",
        "Microsoft 365 tenant-to-tenant migration",
    ];

    const migrationScope = [
        "Mailboxes, calendars, and contacts",
        "Shared and resource mailboxes",
        "Distribution groups",
        "DNS, MX, SPF, DKIM, DMARC configuration",
        "Post-migration validation and stabilization",
    ];

    const monitoringScope = [
        "Mail flow and delivery monitoring",
        "Service availability monitoring",
        "Queue and latency tracking",
        "License usage monitoring",
        "Basic security alert monitoring",
        "Monthly email health report",
    ];

    const pricingTable = [
        { users: "10 – 25", price: "₹8,000", perUser: "₹320–800" },
        { users: "26 – 50", price: "₹15,000", perUser: "₹300–580" },
        { users: "51 – 75", price: "₹22,000", perUser: "₹290–430" },
        { users: "76 – 100", price: "₹30,000", perUser: "₹300–395" },
        { users: "100+", price: "Custom", perUser: "Volume-based" },
    ];

    const migrationPricing = [
        { users: "10 – 25", price: "₹35,000" },
        { users: "26 – 50", price: "₹60,000" },
        { users: "51 – 75", price: "₹85,000" },
        { users: "76 – 100", price: "₹1,10,000" },
        { users: "100+", price: "Custom" },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            <Header />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20"
            >
                {/* Background Image with Enhanced Tech Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/email-management-hero.jpg"
                        alt="Email Management Background"
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>

                    {/* Floating Glows */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
                    <div className={`transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                        <div className={`transition-all duration-1000 delay-100 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                            <Badge className="mb-6 px-4 py-1.5 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm uppercase tracking-wider font-semibold backdrop-blur-md">
                                Professional Email Management for Indian Businesses
                            </Badge>
                        </div>
                        <h1 className="main-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-balance leading-tight px-4 tracking-tight">
                            <span className="line line-first text-white block opacity-100 translate-y-0">
                                ENTERPRISE-GRADE
                            </span>
                            <span className="line line-second text-blue-400 mt-4 md:mt-5 block drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] opacity-100 translate-y-0">
                                EMAIL OPERATIONS
                            </span>
                        </h1>
                        <div className={`transition-all duration-1000 delay-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                            <p className="text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed text-slate-400 max-w-3xl mx-auto mb-12 font-light">
                                Cybaem Tech provides enterprise-grade Email Support, Email Migration, and Email Monitoring services in India for organizations with 10–100+ users.
                            </p>
                        </div>
                        <div className={`transition-all duration-1000 delay-900 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link to="/contact">
                                    <Button size="lg" className="px-10 py-7 text-lg font-bold rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 group">
                                        Get Free Consultation
                                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-500" /> Microsoft 365</span>
                                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-500" /> Google Workspace</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section ref={whyRef} className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                            <span className="text-white">Why Choose </span>
                            <span className="text-blue-500">Cybaem Tech?</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Helping Indian businesses ensure email reliability, security, and compliance without depending on internal IT teams.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChoose.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/[0.04] group">
                                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Check className="w-5 h-5" />
                                </div>
                                <p className="text-lg font-medium text-slate-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Email Support Section */}
            <section ref={supportRef} className="py-24 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2">
                        <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 font-bold uppercase tracking-widest">India (8×5)</Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                            <span className="text-white">Email Support </span>
                            <span className="text-blue-500">Services</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
                            <Zap className="w-6 h-6" /> Managed Email Support (Ongoing)
                        </h3>
                        <p className="text-slate-400 mb-8 leading-relaxed text-lg">Designed for Indian organizations that require stable, secure, and professionally managed email environments.</p>

                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm shadow-xl">
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3"><Briefcase className="w-6 h-6 text-blue-500" /> Service Scope</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {supportScope.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 text-blue-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1 text-lg">24×7 Email Support (Optional Add-On)</h4>
                                    <p className="text-slate-400 text-sm mb-3">Round-the-clock incident handling & Priority response for email outages.</p>
                                    <div className="text-blue-400 font-bold font-mono">Add-on Cost: ₹10,000 per month (up to 100 users)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <Card className="bg-white/[0.05] border-white/10 overflow-hidden rounded-3xl backdrop-blur-xl shadow-2xl">
                            <CardContent className="p-0">
                                <div className="p-8 border-b border-white/10 bg-white/5">
                                    <h4 className="text-xl font-bold text-white">Email Support Pricing – India</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Number of Users</th>
                                                <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Monthly Price (INR)</th>
                                                <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Approx / User</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pricingTable.map((row, i) => (
                                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 border-b border-white/10 text-slate-200">{row.users}</td>
                                                    <td className="p-6 border-b border-white/10 text-blue-400 font-bold">{row.price}</td>
                                                    <td className="p-6 border-b border-white/10 text-slate-400 text-sm">{row.perUser}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-6 bg-green-500/10 text-green-400 text-sm flex items-center gap-3">
                                    <Check className="w-4 h-4" /> Market check: ₹300–₹600/user for managed email support is standard MSP pricing in India.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Email Migration Section */}
            <section ref={migrationRef} className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                        <div className="lg:w-1/2">
                            <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 font-bold uppercase tracking-widest backdrop-blur-md">One-Time</Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                                <span className="text-white">Email Migration </span>
                                <span className="text-purple-500">Services</span>
                            </h2>
                            <div className="w-20 h-1 bg-purple-600 mb-8"></div>
                            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
                                <RefreshCw className="w-6 h-6" /> Secure & Structured Email Migration
                            </h3>
                            <p className="text-slate-400 mb-8 leading-relaxed text-lg">Our Email Migration services follow a proven methodology to ensure minimal downtime and zero data loss.</p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all shadow-lg">
                                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-purple-500" /> Supported Scenarios
                                    </h4>
                                    <ul className="space-y-2">
                                        {migrationScenarios.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all shadow-lg">
                                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-purple-500" /> Migration Scope
                                    </h4>
                                    <ul className="space-y-2">
                                        {migrationScope.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                                <Check className="w-4 h-4 text-purple-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-purple-600/10 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
                                <h4 className="font-bold text-white mb-4 text-xl">Advanced Migration Add-Ons</h4>
                                <div className="space-y-4">
                                    {[
                                        { s: "Microsoft 365 Tenant-to-Tenant", p: "From ₹75,000" },
                                        { s: "Hybrid / Complex Migration", p: "From ₹90,000" },
                                        { s: "Weekend / After-Hours Cutover", p: "From ₹15,000" },
                                        { s: "Extended Post-Migration Support", p: "From ₹10,000" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 rounded px-2 transition-all">
                                            <span className="text-slate-300 text-sm">{item.s}</span>
                                            <span className="text-purple-400 font-bold font-mono">{item.p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <Card className="bg-white/[0.05] border-white/10 overflow-hidden rounded-3xl backdrop-blur-xl shadow-2xl">
                                <CardContent className="p-0">
                                    <div className="p-8 border-b border-white/10 bg-white/5">
                                        <h4 className="text-xl font-bold text-white">Email Migration Pricing – India</h4>
                                    </div>
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Number of Users</th>
                                                <th className="p-6 text-slate-300 font-semibold border-b border-white/10">One-Time Price (INR)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {migrationPricing.map((row, i) => (
                                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 border-b border-white/10 text-slate-200">{row.users}</td>
                                                    <td className="p-6 border-b border-white/10 text-purple-400 font-bold">{row.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="p-6 bg-green-500/10 text-green-400 text-sm flex items-center gap-3">
                                        <Check className="w-4 h-4" /> Market check: ₹1,000–₹1,500/user is realistic and acceptable for professional migrations in India.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Email Monitoring Section */}
            <section ref={monitoringRef} className="py-24 container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 font-bold uppercase tracking-widest backdrop-blur-md">India (8×5)</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                        <span className="text-white">Email Monitoring </span>
                        <span className="text-cyan-500">Services</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
                    <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center justify-center gap-2">
                        <MonitorCheck className="w-6 h-6" /> Proactive Email Monitoring & Health Management
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto">Designed for organizations that want early detection of issues before users are impacted.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {monitoringScope.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/[0.05] group shadow-lg">
                                    <MonitorCheck className="w-6 h-6 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 rounded-3xl bg-cyan-600/10 border border-cyan-500/30 backdrop-blur-sm shadow-2xl">
                            <h4 className="font-bold text-white mb-2 text-xl">24×7 Email Monitoring (Optional)</h4>
                            <p className="text-slate-400 text-sm mb-4 italic">Continuous monitoring, Critical alert escalation, Faster incident detection.</p>
                            <div className="text-cyan-400 font-bold font-mono text-lg">Add-on Cost: ₹8,000 per month</div>
                        </div>
                    </div>

                    <Card className="bg-white/[0.05] border-white/10 overflow-hidden rounded-3xl backdrop-blur-xl shadow-2xl">
                        <CardContent className="p-0">
                            <div className="p-8 border-b border-white/10 bg-white/5">
                                <h4 className="text-xl font-bold text-white">Email Monitoring Pricing – India</h4>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Number of Users</th>
                                        <th className="p-6 text-slate-300 font-semibold border-b border-white/10">Monthly Price (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { u: "10 – 25", p: "₹5,000" },
                                        { u: "26 – 50", p: "₹9,000" },
                                        { u: "51 – 75", p: "₹13,000" },
                                        { u: "76 – 100", p: "₹18,000" },
                                        { u: "100+", p: "Custom" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 border-b border-white/10 text-slate-200">{row.u}</td>
                                            <td className="p-6 border-b border-white/10 text-cyan-400 font-bold">{row.p}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="p-6 bg-green-500/10 text-green-400 text-sm flex items-center gap-3">
                                <Check className="w-4 h-4" /> Market check: ₹150–₹300/user for monitoring is aligned with Indian MSP models.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Recommended Bundles & Security */}
            <section ref={bundledRef} className="py-24 bg-gradient-to-t from-blue-900/20 to-black border-t border-white/10 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/30 relative overflow-hidden group backdrop-blur-md shadow-2xl">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award className="w-32 h-32 text-blue-400" />
                            </div>
                            <Badge className="mb-4 bg-blue-500 text-white font-bold tracking-widest">RECOMMENDED</Badge>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                                <span className="text-white">Managed </span>
                                <span className="text-blue-500">Bundle</span>
                            </h3>
                            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                            <p className="text-slate-400 mb-8 italic text-lg leading-relaxed">Support + Monitoring - Best value for Indian SMEs without dedicated email administrators.</p>

                            <div className="space-y-4">
                                {[
                                    { u: "10 – 25 Users", p: "₹12,000" },
                                    { u: "26 – 50 Users", p: "₹22,000" },
                                    { u: "51 – 75 Users", p: "₹32,000" },
                                    { u: "76 – 100 Users", p: "₹45,000" },
                                    { u: "100+ Users", p: "Custom Pricing" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-all group/item">
                                        <span className="font-semibold text-white group-hover/item:text-blue-400 transition-colors">{item.u}</span>
                                        <span className="text-blue-400 font-bold font-mono text-lg">{item.p}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact">
                                <Button className="w-full mt-10 py-7 text-lg font-bold bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all shadow-xl shadow-blue-600/20">
                                    Secure My Bundle
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                        <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Lock className="w-32 h-32 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                                <span className="text-white">Security </span>
                                <span className="text-blue-500">Focus</span>
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                            <div className="space-y-6">
                                {[
                                    { t: "Advanced Phishing Protection", d: "Protection against business email compromise (BEC)." },
                                    { t: "Data Loss Prevention (DLP)", d: "Prevent sensitive data from leaving your organization via email." },
                                    { t: "Email Archiving & Compliance", d: "Tamper-proof storage for legal and compliance needs." },
                                    { t: "Multi-Factor Authentication (MFA)", d: "Mandatory security layers for all mailbox access." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group/item shadow-lg">
                                        <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 group-hover/item:text-blue-400 transition-colors">{item.t}</h4>
                                            <p className="text-sm text-slate-400">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <div className="inline-block p-[1px] rounded-3xl bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12">
                            <div className="bg-black/80 backdrop-blur-xl px-12 py-12 rounded-3xl border border-white/10">
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to optimize your business emails?</h3>
                                <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">Join hundreds of businesses that trust Cybaem Tech for secure and efficient email management.</p>
                                <Link to="/contact">
                                    <Button size="lg" className="px-12 py-8 text-xl font-bold rounded-2xl bg-blue-600 text-white hover:bg-blue-500 shadow-2xl transition-all hover:-translate-y-2 group">
                                        Connect with our Email Experts
                                        <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EmailManagement;