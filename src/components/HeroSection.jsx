import React, { useRef } from "react";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.svg';
import home from '../assets/images/home_logo.svg';
import top_img from '../assets/images/hero_top.svg';
import hero_img from '../assets/images/hero_img.svg';
import mouse from '../assets/images/mouse.svg';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const slideIn = (direction = 'left') => ({
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0 }
});

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const textHover = {
    hover: { color: "#00363D", transition: { duration: 0, ease: "easeInOut" } }
};

function HeroSection() {
    const targetRef = useRef(null);

    const handleScroll = () => {
        if (targetRef.current) {
            window.scrollTo({
                top: targetRef.current.offsetTop + 850, 
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pb-20 font-lexend">
            <motion.div
                className="w-full h-[80vh] bg-contain bg-right bg-no-repeat"
                style={{ backgroundImage: `url(${top_img})` }}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="Navbar flex justify-between items-center p-4 px-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.img
                        className="w-24 h-24"
                        src={logo}
                        alt="Company Logo"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="flex flex-row items-center gap-8">
                        <div className="flex flex-row gap-6 text-sm items-center text-color">
                            <motion.img
                                className="w-10 h-10"
                                src={home}
                                alt="Home icon"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                            <motion.h5
                                className="font-bold"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                variants={textHover}
                                whileHover="hover"
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                Pricing & Rates
                            </motion.h5>
                            <motion.h5
                                className="font-bold"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                variants={textHover}
                                whileHover="hover"
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                About Us
                            </motion.h5>
                            <motion.h5
                                className="font-bold"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                variants={textHover}
                                whileHover="hover"
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                Support
                            </motion.h5>
                        </div>
                        <motion.button
                            className="px-4 py-2 font-bold text-white text-sm rounded-full border-4 border-[#1e6b4c] hover:bg-[#80F8CC] transition-transform duration-300 transform hover:scale-110"
                        >
                            Get started
                        </motion.button>
                    </div>
                </motion.div>
                <div className="Hero flex flex-row mt-20 px-16 relative">
                    <motion.div
                        className="w-2/3"
                        initial="hidden"
                        animate="visible"
                        variants={slideIn()}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-9xl pb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            Revolutionary and intuitive banking
                        </motion.h1>
                        <motion.div
                            className="flex flex-row gap-2 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.5, ease: "easeOut" }}
                        >
                            <motion.img
                                className="w-8 h-8"
                                src={mouse}
                                alt=""
                                onClick={handleScroll}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <p>Explore what makes Ultra8 ultra great...</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        ref={targetRef}
                        className="pt-8 w-[60rem]"
                        initial="hidden"
                        animate="visible"
                        variants={scaleIn}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <img className="w-full" src={hero_img} alt="" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default HeroSection;
