
import { motion } from 'framer-motion'
// import useScreenSize from '../hooks/useScreenSize'
import { useRef } from 'react'

const Top = () => {
  const constraintsRef = useRef(null)

  function topFunction () {
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <motion.div className='h-screen w-full absolute inset-0' ref={constraintsRef}>
        <motion.div initial={{ scale: 0, y: 0 }} animate={{ scale: 1, y: 80, x: [200, 0, 200, 0] }} transition={{ duration: 1 }} drag dragConstraints={constraintsRef} className='z-50 ml-1 grid place-items-center fixed rounded-full bg-pink-500/80 h-[32px] w-[32px]' onClick={topFunction}>
          <div className='text-white pl-1 z-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
          </svg>
          </div>
        </motion.div>
      </motion.div>

    </>
  )
}

export default Top
