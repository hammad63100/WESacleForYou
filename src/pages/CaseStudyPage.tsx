import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { caseStudies } from '@/data/caseStudies';
import { Navbar } from '@/components/Navbar';

const CaseStudyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const study = caseStudies.find((s) => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section - Green Gradient Background */}
            <div className="bg-gradient-to-b from-green-800 via-green-600 to-green-200 pt-48 pb-16 sm:pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Stats */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                                    Case Study:
                                </h1>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                    {study.title}
                                </h2>
                            </div>

                            {/* Stats List */}
                            <div className="space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                {study.fullDetails?.yoyGrowth && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <span className="text-sm">📊</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">YOY Growth</p>
                                            <p className="text-xl font-bold text-gray-900">{study.fullDetails.yoyGrowth}</p>
                                        </div>
                                    </div>
                                )}

                                {study.stats?.map((stat: any, i: number) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <stat.icon className="w-4 h-4 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">{stat.label}</p>
                                            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                                        </div>
                                    </div>
                                ))}

                                {study.fullDetails?.marketplace && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <span className="text-sm">🌍</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">Marketplace</p>
                                            <p className="text-xl font-bold text-gray-900">{study.fullDetails.marketplace}</p>
                                        </div>
                                    </div>
                                )}

                                {study.fullDetails?.skus && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <span className="text-sm">📦</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">Number of products/SKUs</p>
                                            <p className="text-xl font-bold text-gray-900">{study.fullDetails.skus}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Images */}
                        <div className="flex items-center justify-center w-full">
                            <div className="relative w-full max-w-sm">
                                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                                {study.images && study.images.length > 1 ? (
                                    <div className="grid grid-cols-1 gap-4">
                                        {study.images.map((img: string, index: number) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`${study.title} ${index + 1}`}
                                                className="relative rounded-2xl shadow-2xl border-4 border-white/30 w-full h-auto"
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="relative rounded-2xl shadow-2xl border-8 border-white/30 w-full h-auto"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challenges Faced Section - Yellow/Cream Background */}
            {study.fullDetails?.sections && study.fullDetails.sections.length > 0 && (
                <div className="bg-amber-50 py-16 sm:py-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                            Challenges Faced:
                        </h2>
                        <div className="space-y-6">
                            {study.fullDetails.sections.slice(0, 2).map((section: any, idx: number) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                                    <ul className="space-y-2 pl-6">
                                        {section.content.map((point: string, pIdx: number) => (
                                            <li key={pIdx} className="text-gray-700 leading-relaxed list-disc">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Our Approach Section - White Background */}
            {study.fullDetails?.sections && study.fullDetails.sections.length > 2 && (
                <div className="bg-white py-16 sm:py-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                            Our Approach:
                        </h2>
                        <div className="space-y-8">
                            {study.fullDetails.sections.slice(2).map((section: any, idx: number) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                                    <ul className="space-y-3">
                                        {section.content.map((point: string, pIdx: number) => (
                                            <li key={pIdx} className="flex gap-3 text-gray-700 leading-relaxed">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* The Impact Section - Light Blue Background */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 sm:py-20">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 text-white mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        The Impact:
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                        By tackling these challenges with strategic bidding, timely monitoring, and efficient budget allocation,
                        we successfully boosted sales and significantly reduced TACOS in the highly competitive niche.
                    </p>

                    {/* Impact Stats */}
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-extrabold text-primary mb-2">
                                {study.mainStat.value}
                            </p>
                            <p className="text-lg text-gray-600 font-medium">
                                {study.mainStat.label}
                            </p>
                        </div>
                        {study.fullDetails?.netEbitda && (
                            <div className="text-center">
                                <p className="text-5xl sm:text-6xl font-extrabold text-primary mb-2">
                                    {study.fullDetails.netEbitda}
                                </p>
                                <p className="text-lg text-gray-600 font-medium">Net EBITDA</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Subscribe Section - Dark Blue Background */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 sm:py-20">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Subscribe for Email Updates
                    </h2>
                    <p className="text-blue-200 mb-8">
                        Stay updated with our latest case studies and success stories
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <Input
                            type="text"
                            placeholder="Name"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                        />
                    </div>

                    <Button
                        size="lg"
                        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-12 font-bold uppercase tracking-wider"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
