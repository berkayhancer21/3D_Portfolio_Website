import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/Contact/ContactExperience";

// Gönderim sonucu uyarı kutusu
const StatusAlert = ({ status, onClose }) => {
    if (status !== "success" && status !== "error") return null;
    const isSuccess = status === "success";

    return (
        <div className={`contact-alert ${isSuccess ? "contact-alert-success" : "contact-alert-error"}`} role="status">
            <span className="contact-alert-icon" aria-hidden="true">
                {isSuccess ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 7v6M12 17h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                )}
            </span>
            <div className="contact-alert-content">
                <p className="contact-alert-title">
                    {isSuccess ? "Your message has been sent." : "Your message couldn’t be sent."}
                </p>
                <p className="contact-alert-text">
                    {isSuccess
                        ? "Thanks for reaching out — I’ll get back to you soon."
                        : "Please try again in a moment or email me at hberkay2159@gmail.com."}
                </p>
            </div>
            <button type="button" className="contact-alert-close" onClick={onClose} aria-label="Close notification">
                ×
            </button>
        </div>
    );
};

const Contact = () => {
    const formRef = useRef(null);
    // "idle" | "sending" | "success" | "error"
    const [status, setStatus] = useState("idle");
    const isSending = status === "sending";
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSending) return;
        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Formu temizle ve başarı uyarısını göster
            setForm({ name: "", email: "", message: "" });
            setStatus("success");
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    // Başarı uyarısı birkaç saniye sonra kendiliğinden kapanır
    useEffect(() => {
        if (status !== "success") return;
        const timer = setTimeout(() => setStatus("idle"), 6000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let’s Connect"
                    sub="💬 Have questions or ideas? Let’s talk! 🚀"
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your good name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit" disabled={isSending} aria-busy={isSending}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {isSending ? (
                                                <>
                                                    Sending
                                                    <span className="sending-dots" aria-hidden="true">
                                                        <span>.</span><span>.</span><span>.</span>
                                                    </span>
                                                </>
                                            ) : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>

                                <div aria-live="polite">
                                    <StatusAlert status={status} onClose={() => setStatus("idle")} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;