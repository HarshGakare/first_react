import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon1 from "../assets/images/twitter.svg";
import logo from "../assets/images/logo.svg";
import icon2 from "../assets/images/linkedin.svg";
import icon3 from "../assets/images/insta.svg";



function FooterSection() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <footer className="relative w-full h-[80vh] flex flex-row   font-lexend" ref={ref}>
            <div className="w-[55%] bg-[#001F24] flex flex-col pl-10 justify-center gap-10">

                <motion.h1 
                className="w-2/3 text-8xl text-white"
                    variants={textVariant}
                    initial="hidden"
                    animate={controls}
                >
                Do not wait, join Ultra8!
                
                </motion.h1>

                <motion.div className="flex flex-row gap-4"
                      variants={textVariant}
                      initial="hidden"
                      animate={controls}
                      transition={{ delay: 0.6 }}
                >
                    <button className="px-4 py-2 font-bold text-[#002116] bg-[#87b0a1] text-sm rounded-full border-4 border-[#80F8CC] hover:bg-[#80F8CC] transition-transform duration-300 transform hover:scale-120" >Register now</button>
                    <button  className="px-4 py-2 font-bold text-sm rounded-full text-white border-4 border-white bg-transparent hover:bg-white hover:text-black transition-transform duration-300 transform hover:scale-120" >Download the app</button>
                </motion.div>
            </div>
            <div className="z-10 w-[45%] flex flex-col justify-around items-center" >
                <div className="w-full flex flex-row justify-around items-start pt-16">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Features</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Create Account</li>
                            <li>ID Verification</li>
                            <li>Account Information</li>
                            <li>Payment Methods</li>
                            <li>Account Access</li>
                            <li>Security</li>
                            <li>Supported Countries</li>
                            <li>Saving Challenges</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">Terms & Info</h3>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Trademarks</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">Useful links</h3>
                            <ul>
                                <li>Bank Trading Cards (Merch)</li>
                                <li>Trading hours</li>
                                <li>Contact & Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around w-full px-10 mt-10">
                    <div className="flex items-center gap-2 pr-20">
                        <img className="w-16 h-16" src={logo} alt="Ultra8 Logo" />
                        <h2 className="text-4xl font-semibold">ULTRA8</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={icon1} alt="Icon" />
                        <img src={icon2} alt="Icon" />
                        <img src={icon3} alt="Icon" />
                    </div>
                </div>
                <div className="flex flex-row gap-10 mt-10">
                    <p>Ultra8 ©️ Copyright 2022. All rights reserved</p>
                    <p>An opus crafted by</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;