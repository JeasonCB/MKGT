import { useState, useEffect, useRef } from 'react'


function getSize () {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  return sizes
}
const constraintsRef = useRef(null)
  const [size, setSize] = useState(null)

  useEffect(() => {
    setSize(getSize())
  }, [])

  if (!size) return null

  const { width, height } = size
  console.log(width, height)

  function topFunction () {
    document.documentElement.scrollTop = 0
  }
export default useScreenSize
