import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import g_bg from '../assets/images/gamify_bg.svg';
import rank1 from '../assets/images/rank1.svg';
import rank2 from '../assets/images/rank2.svg';
import rank3 from '../assets/images/rank3.svg';
import rank4 from '../assets/images/rank4.svg';

const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};



function GamifySection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
         
        rootMargin: '0px 0px -350px 0px' 
    });

    return (
        <section className="h-[174vh] pt-44 relative font-lexend" ref={ref}>
            <div
                className="w-full h-[180vh] bg-contain bg-no-repeat absolute z-10"
                style={{ backgroundImage: ` url(${g_bg}) ` }}
            >
                <div className="h-[75%] flex flex-row justify-between gap-16 items-center">
                    <div className="w-1/2 flex flex-col justify-end pt-96">
                        <motion.img
                            className="w-[48rem]"
                            src={rank1}
                            alt=""
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={imageVariants}
                            transition={{ delay: 0.4, duration: 1 }}
                        />
                        <motion.img
                            className="w-[36rem]"
                            src={rank2}
                            alt=""
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={imageVariants}
                            transition={{ delay: 0.7, duration: 1 }}
                        />
                        <motion.img
                            className="w-[28rem]"
                            src={rank3}
                            alt=""
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={imageVariants}
                            transition={{ delay: 1.1, duration: 1 }}
                        />
                        <motion.img
                            className="w-[20rem]"
                            src={rank4}
                            alt=""
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={imageVariants}
                            transition={{ delay: 1.3, duration: 1 }}
                        />
                    </div>
                    <div className="w-1/2 text-white">
                        <motion.h1
                            className="text-8xl pb-20"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            Gamify your & your mates’ savings
                        </motion.h1>
                        <motion.p
                            className="w-3/4 pb-10"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                            transition={{ delay: 0.9, duration: 1 }}
                        >
                            One up your savings game by inviting your friends to yearly or monthly “Saving Challenges”, and race till the end of the year to save the most out of everyone to earn 3 months of 40% P.A interest bonus on your savings accounts. (Funded by Enron & FTX, thanks Enron©️)
                        </motion.p>
                        <motion.button
                            className="px-4 py-2 font-bold text-sm rounded-full text-white border-4 border-white bg-transparent  hover:bg-white hover:text-black transform hover:scale-120" 
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariants}
                            transition={{ delay: 1.1, duration: 1 }}
                        >
                            Learn more
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GamifySection;