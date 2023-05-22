import Nav from '../components/Nav'

const prueba = () => {
  return (
    <>

      <div id='cover' className="bg-orange-400/50 fixed h-full w-full flex items-end z-10 pointer-events-none">
        <p>This is some content inside the Top component.</p>
      </div>
      <Nav id='navbar' nc="1" nci="2" urli="/clase1" urlii="/clase2" />
      <div className="h-screen w-screen flex items-center justify-center bg-gray-100 pointer-events-auto">
        <a href="/prueba">
          <p>This is some text that should be behind the Top component.</p></a>
      </div>
    </>
  )
}

export default prueba
