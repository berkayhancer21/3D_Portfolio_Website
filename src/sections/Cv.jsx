import TitleHeader from "../components/TitleHeader.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Önizleme ikonu (sağ üst)
const PreviewIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3h6v6M14 10l7-7M10 3H4v16h16v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// İndirme ikonu (hareket eden ok)
const DownloadIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="download-arrow">
        <path d="M12 3v13M12 16l-4-4M12 16l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
);

// Kilit ikonu (bulanık önizleme üzerinde)
const LockIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="15.5" r="1.5" fill="currentColor"/>
    </svg>
);

const Cv = () => {
    const cvPath = "/files/Berkay_HANÇER_CV_Ingilizce.pdf";
    // Bulanık, düşük çözünürlüklü önizleme (gerçek içerik sadece PDF'te)
    const cvPreviewPath = "/files/cv-preview-blurred.webp";

    useGSAP(() => {
        // Başlık animasyonu
        gsap.fromTo('.cv-title-wrapper',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.cv-title-wrapper',
                    start: 'top 80%'
                }
            }
        );

        // PDF container animasyonu
        gsap.fromTo('.cv-pdf-container',
            { y: 50, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cv-pdf-container',
                    start: 'top 80%'
                }
            }
        );

        // Download butonu animasyonu
        gsap.fromTo('.cv-download-btn',
            { x: -30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.cv-download-btn',
                    start: 'top 85%'
                }
            }
        );
    }, []);

    const handlePreview = () => {
        window.open(cvPath, '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Berkay_HANÇER_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="cv" className="cv-section w-full md:py-20 py-12">
            <div className="w-full h-full md:px-20 px-5">
                {/* Başlık */}
                <div className="cv-title-wrapper">
                    <TitleHeader
                        title="My Resume"
                        sub="📄 My Professional Curriculum Vitae"
                    />
                </div>

                {/* Ana CV Container */}
                <div className="cv-main-container flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                    {/* Sol: PDF Önizleme */}
                    <div className="cv-pdf-wrapper flex-1 w-full lg:max-w-3xl">
                        <div className="cv-pdf-container relative">
                            {/* Önizleme butonu (sağ üst) */}
                            <button
                                onClick={handlePreview}
                                className="cv-preview-btn"
                                aria-label="Preview CV in new tab"
                            >
                                <PreviewIcon />
                            </button>

                            {/* Bulanık CV önizlemesi */}
                            <div className="cv-pdf-embed cv-blurred">
                                <img
                                    src={cvPreviewPath}
                                    alt="Blurred preview of Berkay HANÇER's CV"
                                    className="cv-image"
                                    width="720"
                                    height="1018"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="cv-blur-overlay">
                                    <div className="cv-blur-badge">
                                        <LockIcon />
                                    </div>
                                    <p className="cv-blur-title">Full CV available as PDF</p>
                                    <p className="cv-blur-text">Download or open it to see all the details</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ: İndirme Butonu */}
                    <div className="cv-actions flex flex-col items-center lg:items-start gap-6">
                        <button
                            onClick={handleDownload}
                            className="cv-download-btn group"
                            aria-label="Download CV as PDF"
                        >
                            <span className="cv-download-text">Download CV (PDF)</span>
                            <DownloadIcon />
                        </button>

                        {/* İsteğe bağlı: Ek bilgi */}
                        <div className="cv-info text-center lg:text-left">
                            <p className="text-white-50 text-sm">
                                Click to download my resume in PDF format
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cv;
