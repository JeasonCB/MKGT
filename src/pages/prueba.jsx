import { useState, useEffect } from 'react'

function getSize () {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  return sizes
}

function prueba () {
  const [size, setSize] = useState(null)

  useEffect(() => {
    setSize(getSize())
  }, [])

  if (!size) return null

  const { width, height } = size
  console.log(width, height)

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  )
}
export default prueba
