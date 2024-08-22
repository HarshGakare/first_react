import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import phone1 from "../assets/images/phone1.svg";
import phone2 from "../assets/images/phone2.svg";
import phone3 from "../assets/images/phone3.svg";

function LikeSection() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const phone1Variant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
    };

    const phone2And3Variant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
    };


    return (
        <section className="bg-[#97F0FF]  font-lexend" ref={ref}>
            <div className="flex flex-col items-center justify-center">
                <div className="w-1/2 flex flex-col items-center justify-center text-center py-10">
                    <motion.h1
                        className="text-7xl py-10"
                        variants={textVariant}
                        initial="hidden"
                        animate={controls}
                    >
                        Just like the others but better
                    </motion.h1>
                    <motion.p
                        className="w-3/4 pb-10"
                        variants={textVariant}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 0.3 }}
                    >
                        You’ll get the essentials just like on other services such as savings, credit & debit accounts, virtual debit cards and more!.
                    </motion.p>
                    <motion.div
                        variants={textVariant}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 0.6 }}
                    >
                        <button 
                        className="px-4 py-2 font-bold text-sm rounded-full text-black border-4 border-white bg-transparent hover:bg-white hover:text-black transition-transform duration-300 transform hover:scale-120" 
                        >
                            Compare
                        </button>
                    </motion.div>
                </div>

                <div className="w-full h-[70.3vh] relative">
                    <motion.img
                        className="absolute left-[13%] bottom-[-5%]"
                        src={phone2}
                        alt="phone-right-img"
                        variants={phone2And3Variant}
                        initial="hidden"
                        animate={controls}
                    />
                    <motion.img
                        className="absolute left-[50%] bottom-[0%]"
                        src={phone3}
                        alt="phone-left-img"
                        variants={phone2And3Variant}
                        initial="hidden"
                        animate={controls}
                    />
                    <motion.img
                        className="absolute left-[36%]"
                        src={phone1}
                        alt="phone-center-img"
                        variants={phone1Variant}
                        initial="hidden"
                        animate={controls}
                    />
                </div>
            </div>
        </section>
    );
}

export default LikeSection;

