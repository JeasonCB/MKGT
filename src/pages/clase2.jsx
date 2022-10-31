import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/nav'

const clase2 = () => {
  return (
    <>
      <>
        <Nav />
        {/* presentacion - con blob ⬇ */}
        <div className='bg-gradient-to-tr from-white  via-slate-100/10 to-indigo-200 h-[50vh] sm:h-[70vh] w-full'>
          <div>
            <section className="bg-transparent text-black">
              <div
                className="flex h-[92vh] sm:h-[70vh] md:h-[100vh] items-center flex-col justify-center p-[1vw]"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <h1
                    className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                  >
                    Clase  2 <br />
                    <span className="sm:block pt-2"> MICROENTORNO </span>
                  </h1>
                  <br />
                  <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                    &quot;El entorno de marketing de una empresa consiste en los
                    actores y las fuerzas ajenas al marketing que afectan la
                    capacidad de la gerencia de marketing para construir y
                    mantener relaciones exitosas con los clientes objetivo&quot;.
                  </p>

                </div>

                <div className='grid justify-items-center mr-6 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-[6vh] absolute animate-bounce mr-6 sm:my-[9vh] md:mt-[12vh]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                  </svg>

                </div>

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
                  <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES  MICROENTORNO?</h1>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                  <div className='md:hidden'> <br /> </div>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                  <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Está formado por los actores cercanos a la empresa que afectan (positiva o negativamente) su capacidad para servir a los clientes: departamentos de la empresa, proveedores, intermediarios de marketing, clientes, competidores y públicos.” </p>
                  <h2 className='font-bold text-lg text-pink-600'>Son 6 los actores que forman el microentorno y ellos son: </h2>
                  <div className="mb-8 text-base leading-relaxed text-left text-gray-700">

                    <li>
                      <b>P</b>roveedores: brindan los recursos que la empresa
                      requiere para producir o vender sus bienes y servicios.
                    </li>
                    <br />
                    <li>
                      <b>E</b>mpresa: Abarca el entorno interno, de la empresa, fijando así sus políticas, objetivos, estrategia y mision de esta.
                    </li>
                    <br />
                    <li>
                      <b>P</b>úblicos: es cualquier grupo que tenga un interés real o potencial, o un impacto sobre la capacidad de una organización para alcanzar sus objetivos.
                    </li>
                    <br />
                    <li>
                      <b>C</b>lientes: Un cliente es quien adquiere los productos o servicios de un negocio o empresa.
                    </li>
                    <br />
                    <li>
                      <b>I</b>ntermediarios de Marketing: es un agente que media entre el productor o el fabricante y el consumidor final, como por ejemplo un mayorista. Tambien llamado, canales de distribución
                    </li>
                    <br />
                    <li>
                      <b>C</b>ompetidores: grupo de empresas que ofrecen un servicio o producto similar al nuestro o que dirigen sus acciones a un mismo segmento del mercado.
                      <br /> Representados por el acrónimo <b>&quot;(P.E.P.C.I.C)&quot;</b>
                    </li>

                  </div>
                  <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                  </div>
                </div>

              </div>
              <hr />

            </div>
            {/* segunda seccion - inversa ⬇ */}
          </section>

        </div>

      </>
    </>
  )
}

export default clase2
