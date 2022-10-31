import Nav from '../components/nav'
import Quiz from '../components/quizzapp/Quiz'

const quizApp = () => {
  return (
    <>
    <Nav/>
    <div className='grid columns-2 h-screen w-full place-content-center '>
      <Quiz />
    </div>
    </>
  )
}

export default quizApp
