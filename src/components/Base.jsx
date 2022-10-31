import city from '../../public/city.jpg'
import Image from 'next/image'

const Base = () => {
  return (
    <>
      <section className='px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
        <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
          <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0'>
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
            <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES  MARKETING?</h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Es la actividad, conjunto de instituciones y procesos para crear comunicar, entregar e intercambiar ofertas que tienen valor para los consumidores, clientes, socios y la sociedad en general.” <span className="text-gray-700">AMA (2013)</span> </p>

            <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
              <h2 className="font-bold text-lg text-pink-600">Esta definicion implica: </h2>
              <li className="m-0">Todo el negocio debe orientarse al cliente = los deseos de los clientes deben reconocerse y satisfacerse.</li><li> El mercadeo debe comenzar con una idea del producto capaz de satisfacer y debe continuar hasta que las necesidades de los clientes estén completamente satisfechas, lo cual puede ocurrir después de que se haga el intercambio.</li></div>
            <h2 className="font-bold text-lg text-pink-600">Objetivo actual del marketing:</h2>
            <li className="text-gray-700">Conservar a los actuales mediante la entrega de satisfacción.</li>
            <li className="text-gray-700">Atraer nuevos clientes mediante la promesa de valor.</li>
            div 2
          </div>
          <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
          <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
            <Image className='' src={city} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Base
