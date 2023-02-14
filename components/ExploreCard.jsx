'use client';
import { motion } from "framer-motion";

import styles from '../styles'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({handleClick, index, active, id, imgUrl, title}) => (
  <motion.div
  variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
  className={`relative ${
    active === id ? 'lg:flex-[3.5] flex-[10]': 'lg:flex-[0.5] flex-2'
  } flex items-center justify-center min-2-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    <img src={imgUrl} alt={title} 
    className='absolute w-full h-full object-cover rounded-[24px]' />
    {active !== id && (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-9">
        {title}
      </h3>
    )}
  </motion.div>
);

export default ExploreCard;
