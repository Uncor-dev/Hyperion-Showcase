import Logo from "@/assets/logo.svg";
import NavMenu from "@/components/Navbar/menu-hover-effects";
import { IoShareSocial } from "react-icons/io5";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    RedditShareButton,
} from "react-share";

const shareUrl = "https://hyperion.com/";
const shareTitle = "Découvrez Hyperion et transformez votre physique !";

import { FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

export default function Navbar() {
    return (
        <section className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center border-b border-gray-800 bg-[#0E0E12] px-6 md:px-16">
            <div className="absolute left-0 top-0 h-full flex items-center z-20">
                <div
                    className="
                        group flex items-center h-20
                        transition-all duration-300
                        bg-[#1A1A1F] pl-5 pr-5 cursor-pointer
                        relative
                        hover:pl-70 hover:border-r-3 border-[#1F6CFF]
                    "
                >
                    <img src={Logo} className="relative z-20 h-15 rounded-2xl" alt="Logo" />
                    <span
                        className="
                            absolute right-30 top-1/2 -translate-y-1/2
                            opacity-0 group-hover:opacity-100
                            translate-x-8 group-hover:translate-x-0
                            transition-all duration-300 z-20
                            font-bold text-lg
                            whitespace-nowrap
                        "
                    >
                        Try Hyperion now ! -{">"}
                    </span>
                </div>
            </div>
            <div className="flex-1 flex justify-center mb-7.5">
                <NavMenu />
            </div>
            <div className="absolute top-0 right-0 h-full flex items-center z-10">
                <div
                    className="
                        group flex items-center h-20
                        transition-all duration-300
                        bg-[#1A1A1F] pl-5 pr-4 cursor-pointer
                        relative overflow-hidden
                        w-25 hover:w-90 hover:border-l-3 border-[#1F6CFF]
                    "
                >
                    <span
                        className="
                            absolute left-5 top-1/2 -translate-y-1/2
                            z-10 font-bold
                            transition-all duration-300
                            group-hover:translate-x-0
                            whitespace-nowrap
                        "
                    >
                        Share ❤️
                    </span>
                    <div
                        className="
                            absolute left-28 top-0 h-full flex items-center gap-7
                            opacity-0 group-hover:opacity-100
                            translate-x-8 group-hover:translate-x-0
                            transition-all duration-300 z-20
                        "
                    >
                        <FacebookShareButton url={shareUrl} title={shareTitle}>
                            <FaFacebook className="hover:text-[#1877f3] text-2xl" />
                        </FacebookShareButton>
                        <LinkedinShareButton url={shareUrl} title={shareTitle}>
                            <FaLinkedin className="hover:text-[#0a66c2] text-2xl" />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={shareUrl} title={shareTitle}>
                            <FaWhatsapp className="hover:text-[#25d366] text-2xl" />
                        </WhatsappShareButton>
                        <RedditShareButton url={shareUrl} title={shareTitle}>
                            <FaReddit className="hover:text-[#ff4500] text-2xl" />
                        </RedditShareButton>
                        <EmailShareButton url={shareUrl} subject={shareTitle}>
                            <FaMailBulk className="hover:text-[#ea4335] text-2xl" />
                        </EmailShareButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
