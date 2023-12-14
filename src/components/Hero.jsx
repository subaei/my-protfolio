import { motion } from 'framer-motion';

import { styles  } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-between gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00a69c]" />
          <div className="w-1 sm:h-80 h-40 cyan-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#00a69c]">Subaei</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, <br className="sm:block hidden" /> mobile apps & user interfaces
          </p>
          <br />
          <p className='mt-2 text-white-100 text-sm font-medium max-w-1xl md:max-w-2xl'>
            I am not the most talkative guy, and prefer my work to do the talk. 
            You can check my portfolio here . As you can see, 
            I custom-coded a variety of websites, ranging from simple e-shops 
            to complex platforms with a variety of functions.
          </p>
        </div>

        <div className='flex justify-end items-center mt-5'>
          <div className='p-1 md:p-2 rounded-full bg-[#00a69c]'>
            <img 
              src="/profile.jpg"
              className='h-auto max-w-lg rounded-full w-[100px] md:w-[150px]'
            />
          </div>
        </div>
      </div>

      {/* <p
        className='absolute xs:top-20 top-42 w-full flex justify-center items-center'
      >
        fsjgbkjdfbgkjfgbdjbfgjkdbfgjbdf
      </p> */}

      <div className='absolute xs:bottom-20 bottom-42 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero