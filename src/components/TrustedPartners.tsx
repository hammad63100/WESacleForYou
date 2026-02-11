import amazonAdPartner from '@/assets/Amazon ad verified partner.jfif';
import amazonAdvertising from '@/assets/Amazon advertising.jfif';
import helium10 from '@/assets/helium 10.jpg';
import pickFu from '@/assets/pickFu.png';
import { Highlight } from '@/components/ui/hero-highlight';

export const TrustedPartners = () => {
    const badges = [
        { src: amazonAdPartner, alt: 'Amazon Ad Verified Partner' },
        { src: amazonAdvertising, alt: 'Amazon Advertising' },
        { src: helium10, alt: 'Helium 10' },
        { src: pickFu, alt: 'PickFu' },
    ];

    return (
        <section className="py-8 sm:py-10 lg:py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <Highlight className="text-black dark:text-white text-sm font-medium px-4 py-1">
                            Trusted Partner
                        </Highlight>
                    </div>
                    <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 flex-wrap">
                        {badges.map((badge, index) => (
                            <img
                                key={index}
                                src={badge.src}
                                alt={badge.alt}
                                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain transition-transform duration-300 hover:scale-110"
                                style={{ mixBlendMode: 'multiply', background: 'transparent' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
