import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

function Contact() {
    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background decoration or video could go here if generic */}

            <Link to="/" className="absolute top-10 left-10 text-white flex items-center gap-2 text-xl font-[one] hover:text-gray-300 transition-colors z-20">
                <FaArrowLeft /> Back to Home
            </Link>

            <div className="z-10 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-[one] mb-6 md:mb-10">Get In Touch</h1>

                <div className="flex flex-col gap-6 items-center">
                    <p className="text-gray-400 font-[two] text-xl md:text-2xl max-w-xs md:max-w-lg">
                        Ready to start your next project? Feel free to reach out!
                    </p>

                    <a
                        href="https://wa.me/7767827126"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-xl md:text-2xl font-[one] hover:bg-[#128C7E] transition-all transform hover:scale-105"
                    >
                        <FaWhatsapp className="text-2xl md:text-3xl" />
                        Chat on WhatsApp
                    </a>

                    {/* Fallback or additional info */}
                    <p className="text-gray-500 font-[two] mt-5 text-sm md:text-base px-4">
                        Or email me at: <a href="mailto:arajjayraj18@gmail.com" className="hover:text-white transition-colors break-all">arajjayraj18@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
