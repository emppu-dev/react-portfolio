import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='text-white' id='home'>
      <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }}>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>emppu.dev</h1>
          <p className='text-xl mt-4'>16 year old developer from the land of a thousand lakes.</p>
          <a href='#projects' className='bg-[#00df9a] w-[200px] rounded-md font-semibold my-6 mx-auto px-6 py-3 text-[#000300]'>Projects</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Home