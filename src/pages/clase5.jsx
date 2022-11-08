import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'

const clase5 = () => {
  return (
    <>
      <Head>
        <title>Posicionamiento</title>
        <meta name="description" content="Created by Jecb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  Clase  5 <br />
                  <span className="sm:block pt-2"> POSICIONAMIENTO </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;Consiste en organizar una oferta de mercado para ocupar un
                  lugar claro, distintivo y deseable en relación con los
                  productos competidores en las mentes de los consumidores
                  meta&quot;.
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES  POSICIONAMIENTO?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">&quot;POSICIONAMIENTO ES ES EL LUGAR QUE UN PRODUCTO, MARCA O GRUPO DE PRODUCTOS OCUPAN EN LA MENTE DE LOS CONSUMIDORES EN COMPARACIÓN CON LA COMPETENCIA.&quot; <span className="text-gray-700">LAMB,HAIR,MCDANIEL (2013)</span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Esta definicion implica que la empresa: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <li className='m-0'>
                    Pondere las posiciones que ocupan los productos de la competencia
                  </li>
                  <li> Destaque las características relevantes para el consumidor.</li>
                  <li>
                    Elija una posición relevante en el mercado, ya sea diferenciandote de la competencia o posicionandote como similar, decidiendo sobre una propuesta de valor y creando valor diferenciado para segmentos a los que se dirigirá
                  </li>
                </div>
                <h2 className='font-bold text-lg text-pink-600'>Ventajas competitivas:</h2>
                <div className="">
                  <br />
                  <li className="text-gray-700">Ventaja sobre los competidores que se adquiere al ofrecer mayor valor al cliente, ya sea por medio de precios más bajos o por proveer mayores beneficios que justifiquen los precios más altos, entre otros.</li>
                  <br />
                  <h2 className='font-bold text-lg text-pink-600'>¿Cuales son las ventajas competitivas?</h2>
                  <br />
                  <li className="text-gray-700"><b>Producto:</b> Caracteristicas, desempeño, estilo y diseño. por ejemplo nichos como ferrari o rolex </li>
                  <br />
                  <li className="text-gray-700"><b>Servicios:</b> Instalacion, asesoria, reparacion, Atencion al cliente. Servicios profesionales, Delivery, Servicios de alquiler de locales comerciales o viviendas, así como tambien empresas de telefonía.</li>
                  <br />
                  <li className="text-gray-700"><b>Imagen:</b> Simbolo, Colores, Voceros, Patrocinio. Como influencers, medios publicitarios, Amazon o Ebay</li>
                  <br />
                  <li className="text-gray-700"><b>Personal:</b> Amabilidad, atencion, capacitación, Experiencia. Muy común en marcas de lujo y servicios de alto valor, como servicios profesionales, restaurantes etc.</li>
                </div>
                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                </div>
              </div>

            </div>
            <br />
            <hr />

          </div>
          {/* segunda seccion - inversa ⬇ */}
        </section>
        <section className='px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
          <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
            <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0'>
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">BASES DEL POSICIONAMIENTO</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Conjunto de principios o normas iniciales a partir de los cuales se elabora, establece o crea una estrategia.” <span className="text-gray-700"></span> </p>

              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">El posicionamiento se construye sobre 8 pilares fundamentales estos son: </h2>
                <br />
                <li className="m-0"><b>Atributo:</b> El producto va asociado a una característica, atributo o beneficio para el cliente. por ejemplo FedEx (entrega puntual garantizada), Nike (desempeño), Lexus (calidad) y Walmart (precios bajos).</li>
                <br />
                <li><b>Precio y calidad:</b> ¿Precio elevado = calidad? El producto realmente vale la pena por su precio, algunos ejemplos, Ropa, alimentos o vehiculos de gama baja vs gama alta.</li>
                <br />
                <li><b>Ocasión de uso o aplicación :</b>  Son productos o servicios enfocados en cubrir una nececidad momentanea, como gatorade, hoteleria, cines o restaurantes.</li>
                <br />
                <li><b>Usuario del producto :</b> se enfoca en las necesidades de un perfil de usuario, considerando la personalidad o tipo de usuario. como axe, polar(deporte y vida activa).</li>
                <br />
                <li><b>Por iniciador de la categoría:</b>al crear un producto nuevo como intel, kleenex o apple.</li>
                <br />
                <li><b>En función de la competencia:</b> Ya sea como lider o seguidor, siendo el producto mejor posicionado o representando una alternativa economica respectivamente. Ejemplo cocacola, pepsi y glup. </li>
                <br />
                <li><b>Emoción:</b> Como Golden que representa una marca divertida y amigable o Cocacola celebrando la navidad en familia, evocando nostalgia y afecto, al igual que ronco.</li>
                <br />

                <br />
              </div>

            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image className='' src={city} />
              <hr />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default clase5
