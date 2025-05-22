import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function TopBar() {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY < 40);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-2 text-sm z-[100] transition-all duration-300">
            <div className="flex items-center gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaPhoneAlt /> +91 9876543210
                </a>
                <a href="mailto:support@otcsolutions.com" className="flex items-center gap-1 hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaEnvelope /> support@otcsolutions.com
                </a>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaLinkedin size={18} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaInstagram size={18} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaFacebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[oklch(0.623_0.214_259.815)] transition-colors">
                    <FaTwitter size={18} />
                </a>
            </div>
        </div>
    );
}

export default function WebLayout() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}