'use client';
import { motion } from "framer-motion";
import { TypingText, NewFeatures, TitleText } from "../components";

import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| People on the world' textStyles='text-center' />
        <TitleText title={<>
          Track friends around and invite them to play together in the same world
        </>} 
        textStyles='text-center'
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='relative mt-[68px] flex w-full h-[550px]'
        >
          <img src="/map.png" alt="map" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <img src="people-01.png" alt="people" className="w-full h-full"/>
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <img src="people-02.png" alt="people" className="w-full h-full"/>
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <img src="people-03.png" alt="people" className="w-full h-full"/>
          </div>
          <div className="absolute top-[60px] left-[745px] w-[166px] h-[130px] p-[6px] rounded-[25%] ">
            <p className="text-white absolute z-10 left-[20.5%] top-[70%] font-bold">Hawkins Labs</p>
            <img src="planet-02.png" alt="planet" className="w-full h-full rounded-[22px] object-cover"/>
          </div>
          <div className="absolute top-[360px] left-[245px] w-[166px] h-[130px] p-[6px] rounded-[25%] ">
            <p className="text-white absolute z-10 left-[20.5%] top-[70%] font-bold">Morrowind</p>
            <img src="planet-01.png" alt="planet" className="w-full h-full rounded-[22px] object-cover"/>
          </div>
        </motion.div>
      </motion.div>
  </section>
);

export default World;
