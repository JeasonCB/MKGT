import Top from '../components/Top'

const TopB = () => {
  return (

    <div className=" z-50 h-screen w-full flex items-center justify-center absolute pointer-events-none">
      <div className="bg-transparent fixed h-[calc(100vh)] w-full flex items-start">
        <Top />
      </div>
    </div>
  )
}

export default TopB
