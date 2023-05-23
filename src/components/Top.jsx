
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
      <div className='w-full grid place-items-center'>
        <motion.div
          className='h-[calc(100vh-1rem)] w-[99%] flex items-center m-2 mb-2 cursor-pointer'
          ref={constraintsRef}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            drag dragConstraints={constraintsRef}
            onDoubleClick={topFunction}
            className='ml-1 grid place-items-center rounded-full bg-pink-500/80 h-[32px] w-[32px] sticky pointer-events-auto'
          >
            <div
              className='text-white pl-1 '
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Top
