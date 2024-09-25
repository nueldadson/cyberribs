import React from 'react';
import { motion } from "framer-motion";

const HeroBottom = () => {
  return (
    <div className='px-20 absolute w-full -mt-32 max-sm:px-8'>
      <motion.ul
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="backdrop-blur-[10px] w-full h-60 rounded-[30px]"
      >
        <div className=' w-[inherit] h-[inherit] rounded-[30px] bg-white px-16 flex justify-center flex-col  opacity-75'  style={{ boxShadow: '1px 8px 20px gray' }}>
          f
        </div>
      </motion.ul>
    </div>
    // <div className='px-20 absolute w-full -mt-32'>
    // </div>
  )
}

export default HeroBottom
