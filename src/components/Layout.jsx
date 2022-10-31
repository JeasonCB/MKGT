
const Layout = ({ children }) => {
  return (
    <>

      <div className='grid md:grid-cols-2 gap-1 m-1 mr-[5px] sm:mr-1'>
        {children}
      </div>
    </>
  )
}

export default Layout
