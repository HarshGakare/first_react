import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import star from '../assets/images/Star1.svg';

const GoalSection = () => {
  const [showStars, setShowStars] = useState(false);

  const sections = [
    {
      title: 'Set goals that matter',
      description: 'Never lose sight of what matters the most by saving up and achieving your financial goals. Unlike our competitors, goals are not only for savings but also expenses. Set goals on how much you don’t want to spend and be rewarded (and be disciplined).',
      buttons: ['Rewards', 'Disciplinary fees'],
    },
    {
      title: 'Track your progress',
      description: 'Keep an eye on your goals and track your spending and savings. Our system provides detailed analytics to help you stay on track and make informed financial decisions.',
      buttons: ['Analytics', 'Reports'],
    },
    {
      title: 'Achieve your dreams',
      description: 'Set achievable goals and work towards them with our platform. We help you every step of the way, so you can reach your financial dreams faster and with confidence.',
      buttons: ['Goal Setting', 'Dream Tracker'],
    },
    {
      title: 'Stay disciplined follow',
      description: 'Discipline is key to achieving your goals. Our tools help you stay focused and avoid unnecessary spending. Earn rewards for meeting your targets and stay motivated.',
      buttons: ['Motivation', 'Focus Tools'],
    },
  ];

  const borderColors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700'];

  const textVariants = {
    hidden: { opacity: 0, y: 100, backgroundColor: '#fff' },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      backgroundColor: custom.borderColor,
      transition: {
        duration: 0,
        ease: 'easeInOut',
        backgroundColor: { duration: 0.8 },
      },
    }),
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const handleMouseEnter = () => {
    setShowStars(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setShowStars(false), 10);
  };

  return (
    <section className="flex flex-col md:flex-row font-lexend">
      <motion.div
        className="md:w-[32.7%] h-auto md:h-[100vh] flex justify-center items-center bg-contain bg-right bg-no-repeat relative"
      >
        <div className="cursor-pointer flex justify-center items-center relative">
          <motion.img
            src={star}
            initial="hidden"
            animate="visible"
            variants={imgVariants}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="Star"
            className="w-40 h-40"
          />
          {showStars && (
            <div className="absolute inset-0 flex justify-center items-center">
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const radius = 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.img
                    key={i}
                    src={star}
                    alt="Little Star"
                    className="w-6 h-6 absolute"
                    initial="hidden"
                    animate="visible"
                    variants={starVariants}
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      top: '50%',
                      left: '50%',
                      opacity: showStars ? 1 : 0,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </motion.div>

      <div className="h-[48rem] overflow-scroll overflow-x-hidden text-div flex flex-col gap-0 w-full md:w-2/3 scrollbar-hide -mt-5">
        {sections.map((section, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="text-div w-full md:p-32 border-l-8"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={textVariants}
              custom={{ borderColor: borderColors[index] }}
              style={{ borderColor: borderColors[index] }}
            >
              <h1 className="text-4xl md:text-8xl py-10 md:py-20">{section.title}</h1>
              <p className="w-full md:w-3/4 pb-5 md:pb-10">{section.description}</p>
              <div className="flex flex-col md:flex-row gap-4">
                {section.buttons.map((button, btnIndex) => (
                  <motion.button
                    key={btnIndex}
                    className="px-4 py-2 font-bold text-sm rounded-full border-4 border-white hover:bg-white hover:text-black transition-all duration-300"
                    variants={buttonHoverVariants}
                    whileHover="hover"
                  >
                    {button}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GoalSection;
