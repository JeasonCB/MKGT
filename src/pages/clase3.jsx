import city from '../../public/city.jpg'
import Image from 'next/image'

const clase3 = () => {
  return (
    <>
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
                  Clase  3 <br />
                  <span className="sm:block pt-2"> MACROENTORNO </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  "Estas fuerzas dan forma a las oportunidades y representan
                  amenazas para la empresa."
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
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Factores </span>
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES MACROENTORNO?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“El macroentorno es el conjunto de factores que existen en la economía, considerando a esta como un todo” <span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Las 6 fuerzas que componen el macroentorno son: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>T</b>ecnológico: Fuerzas que crean tecnologías, lo que a su vez genera oportunidades de nuevos productos y de mercado.Como por ejemplo por medio de la adquisición de datos para ofrecer experiencias personalizadas a los clientes.
                  </li>

                  <br />

                  <li>
                    <b>E</b>conómico: Son los factores económicos que afectan el poder de compra del consumidor y sus patrones de gastos. Incluye ingresos, costo de vida, tasas de interés y patrones
                    de ahorro y crédito, entre otros.
                  </li>

                  <br />

                  <li>
                    <b>N</b>atural: Abarca los recursos naturales que los mercadólogos necesitan como insumos, o que son afectados por las actividades de marketing. El entorno natural muestra tres tendencias principales: escasez de ciertas materias primas, niveles más altos de contaminación y más intervención gubernamental en la gestión de los recursos naturales.
                  </li>

                  <br />

                  <li>
                    <b>P</b>olítico-Social: Comprende las leyes, agencias y grupos que influyen o limitan las acciones de marketing. Incluye: legislación que regula los negocios, normas sobre competencia, prácticas de comercio justo, protección ambiental, privacidad del consumidor, etc...
                  </li>

                  <br />

                  <li>
                    <b>C</b>ultural: Consiste en las instituciones y otras fuerzas que afectan los valores básicos de una sociedad, sus percepciones, preferencias y comportamientos.
                  </li>

                  <br />

                  <li>
                    <b>D</b>emográfico: La demografía es el estudio de las poblaciones humanas en términos de su tamaño, densidad, ubicación, edad, género, raza, ocupación, entre otras.
                    <br /> Representados por el acrónimo <b>"(T.E.N.P.C.D)"</b>
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
        {/* <section className='px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
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
              <Image className='' src={city} />
            </div>
          </div>
          <hr />
        </section> */}
      </div>

    </>
  )
}

export default clase3