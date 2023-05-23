import city from '../../public/maslow.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'

import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import TopB from '../components/TopB'
const clase1 = () => {
  return (
    <>
      <Head>
        <title>Principios de Marketing</title>
        <meta name="description" content="Created by Jecb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopB />
      <Nav id='navbar' nc="1" nci="2" urli="/clase1" urlii="/clase2" />
      {/* presentacion - con blob ⬇ */}
      <div id='top' className='bg-gradient-to-tr from-white  via-slate-100/10 to-indigo-200 h-[50vh] sm:h-[70vh] w-full'>
        <div>
          <section className="bg-transparent text-black">
            <div className="flex h-[92vh] sm:h-[70vh] md:h-[100vh] items-center flex-col justify-center p-[1vw]">

              <div className="mx-auto max-w-3xl text-center">
                <h1
                  className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Clase  1 <br />
                  <motion.span className="sm:block pt-2"> PRINCIPIOS DE MARKETING </motion.span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;La funcion del Marketing en una empresa es manejar y coordinar estrategias de venta&quot;
                </p>
              </div>
              <div className='grid justify-items-center mr-6 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-[6vh] absolute animate-bounce mr-6 sm:my-[9vh] md:mt-[12vh]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <br />
            </div>
          </section>
        </div>
        {/* primera seccion - original ⬇ */}
        <section>
          <div className="px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div ></div>

                    <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 lg:top-[calc(-380px)] sm:right-96 right-[50vw] w-72 h-72 mix-blend-multiply filter blur-xl lg:blur-[64px] opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                    </div>
                  </div>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={city} />
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES  MARKETING?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Es la actividad, conjunto de instituciones y procesos para crear comunicar, entregar e intercambiar ofertas que tienen valor para los consumidores, clientes, socios y la sociedad en general.” <span className="text-gray-700">AMA (2013)</span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Esta definicion implica: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <li className='m-0'>
                    Todo el negocio debe orientarse al cliente = los deseos de
                    los clientes deben reconocerse y satisfacerse.
                  </li>
                  <li> El mercadeo debe comenzar con una idea del producto capaz de satisfacer y debe continuar hasta que las necesidades de los clientes estén completamente satisfechas, lo cual puede ocurrir después de que se haga el intercambio.</li>
                </div>
                <h2 className='font-bold text-lg text-pink-600'>Objetivo actual del marketing:</h2>
                <div className="">
                  <li className="text-gray-700">Conservar a los actuales mediante la entrega de satisfacción.</li>
                  <li className="text-gray-700">Atraer nuevos clientes mediante la promesa de valor.</li>
                </div>
                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                </div>
              </div>
            </div>
            <hr />
          </div>
        </section>
        {/* segunda seccion - inversa ⬇ */}
        <section className='px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
          <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
            <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0'>
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">EVOLUCION DEL MERCADO</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“La evolución del marketing (según Philip Kotler, padre del marketing moderno) ha sido clara: ha pasado de centrarse en la producción a enfocarse en el cliente” <span className="text-gray-700">Kotler (2013)</span> </p>
              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">Pasando así por 5 grandes etapas las cuales son: </h2>
                <br />
                <li className="m-0"><b>Mercadeo 1.0 :</b> constituye los inicios del marketing centrado en el producto cuyo objetivo era crear los productos y servicios perfectos que producirían el más alto valor y satisfacción para los consumidores.</li>
                <br />
                <li><b>Mercadeo 2.0:</b> centrado en el consumidor, en esta etapa la atención estaba en entender la segmentación, el targeting y el posicionamiento y en construir relaciones con los clientes para retenerlos.</li>
                <br />
                <li><b>Mercadeo 3.0 :</b>  las nuevas generaciones empezaron a exigir que se desarrollaran productos, servicios y culturas que brindaran un impacto positivo en la sociedad y en el medioambiente.</li>
                <br />
                <li><b>Mercadeo 4.0 :</b> la digitalización complementó la tendencia hacia lo humano. El surgimiento del Internet móvil, los medios sociales y el comercio electrónico cambiaron la forma de comprar de los clientes.</li>
                <br />
                <li><b>Mercadeo 5.0 :</b> responde a los intereses principalmente de las generaciones Z y Alpha basados en mejorar la calidad de vida de los seres humanos y en hacer que los avances tecnológicos impacten en todos los aspectos de la vida.</li>
                <br />
              </div>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image alt='city' className='' src={city} />
              <br />

            </div>
            <br />
          </div>
        </section>
        <Footer />

      </div>

    </>
  )
}

export default clase1
