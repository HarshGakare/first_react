import React, { useState } from "react";
import img_bg from '../assets/images/security_bg.svg';
import lock_bg from '../assets/images/lock.svg';
import unlock_bg from '../assets/images/unlock.svg';
import star from '../assets/images/star.svg';
import line from '../assets/images/star_line.svg';
import box from '../assets/images/small_box.svg';
import leaf from '../assets/images/eye.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const leafPositions = [
    { x: '220%', y: '10%', size: 'w-32 h-32' },      
    { x: '20%', y: '210%', size: 'w-24 h-24' }, 
    { x: '160%', y: '170%', size: 'w-40 h-40' },  
];

const buttonHoverVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
        },
    },
};

function SecuritySection() {
    const [isHovered, setIsHovered] = useState(false);  
    const { ref, inView } = useInView({
        triggerOnce: true,  
        threshold: 0.9,     
    });

    return (
        <section ref={ref} className="relative h-screen pt-36 font-lexend">
            <div 
                className="w-full h-[170vh] bg-cover pb-52 flex items-center" 
                style={{ backgroundImage: `url(${img_bg})` }} // Corrected usage
            >
                <div className="w-full flex flex-row px-16 justify-around">
                    <div>
                        <motion.h1 
                            className="w-[70%] text-8xl pb-10"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        >
                            Security at its foundation
                        </motion.h1>
                        <motion.p 
                            className="w-[53%] pb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        >
                            We use sophisticated and future-proof end-to-end encryption and decentralized storage to ensure your data is protected at all times. All identity documents are never viewed or verified by humans but instead through our machine learning algorithm. 
                            With our adaptive 5-factor or password-less authentication powered by zero-knowledge proofs, everything is safe and sound. 😇
                        </motion.p>
                        <motion.button 
                            className="px-4 py-2 font-bold text-sm rounded-full border-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                            variants={buttonHoverVariants}
                            initial={{ scale: 1 }}
                            whileHover="hover"
                            animate={{ scale: 1 }}
                        >
                            See how it works
                        </motion.button>
                    </div>
                    <div className="leavemotion w-11/12 pt-10 pr-20 relative">
                        {inView && leafPositions.map((pos, index) => (
                            <motion.img
                                key={index}
                                src={leaf}
                                className={`absolute ${pos.size}`}  // Fixed className usage
                                initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }} 
                                animate={{
                                    x: ['-50%', '50%', pos.x], 
                                    y: ['-50%', '50%', pos.y], 
                                    rotate: [0, 180, 0], 
                                    opacity: [0, 1, 1],  
                                }}
                                transition={{
                                    duration: 5, 
                                    ease: 'easeInOut',
                                    delay: index * 1.5,
                                }}
                            />
                        ))}
                        <motion.img 
                            className="w-[200%] cursor-pointer" 
                            src={isHovered ? unlock_bg : lock_bg}  
                            alt="Lock illustration"
                            onMouseEnter={() => setIsHovered(true)}  
                            onMouseLeave={() => setIsHovered(false)} 
                        />
                    </div>
                </div>
            </div>

            <img className="animate-bounce absolute top-[125%] left-[28.3%] w-16 h-16"        
                src={star}  
                alt="Star"  
            />      
            <img className="absolute top-[135%] left-[28%] w-20 h-28" 
                src={line}  
                alt="line"    
            />
            <img 
                className="absolute -bottom-[65%] w-32 h-32" 
                src={box} 
                alt="Box" 
            />
        </section>
    );
}

export default SecuritySection;
