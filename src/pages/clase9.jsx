import distribucion from '../../public/Distribucion.png'
import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
import TopB from '../components/TopB'
import Footer from '../components/Footer'
const clase9 = () => {
  return (
    <>
      <Head>
        <title>Marketing Mix: Precio y Plaza</title>
        <meta name="description" content="Created by Jeason Campos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopB />
      <Nav nc="8" nci="10" urli="/clase8" urlii="/clase10" />
      {/* presentacion - con blob ⬇ */}
      <div id='top' className='bg-gradient-to-tr from-white  via-slate-100/10 to-indigo-200 h-[50vh] sm:h-[70vh] w-full'>
        <div>
          <section className="bg-transparent text-black">
            <div
              className="flex h-[92vh] sm:h-[70vh] md:h-[100vh] items-center flex-col justify-center p-[1vw]"
            >
              <div className="mx-auto max-w-3xl text-center">
                <h1
                  className="bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                  Clase  9 <br />
                  <span className="sm:block pt-2"> Precio y Plaza </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;Estas fuerzas dan forma a las oportunidades y representan
                  amenazas para la empresa.&quot;
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
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={distribucion} />
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES PLAZA?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={distribucion} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={distribucion} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Estos representas los canales de distribucion y pueden estar tanto en el medio físico como en el medio virtual. <br /> ➡ El Fisico puede ser: inmóvil (local comercial),móvil (foodtruck); o autoservicio (máquina expendedora). <br />➡ El virtual: Es el espacio que se encuentra en internet. Se diferencia entre el e-commerce, aquel punto de venta propio de la compañía, o el marketplaces, un punto de venta en el que nuestro producto se encuentra junto a otros productos similares. ” <span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Funciones del canal de marketing: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>Transaccionales: </b>Compra, venta y asunción de riesgo.
                  </li>
                  <br />
                  <li>
                    <b>Logística:</b> Transporte, almacenamiento, consolidación, distribución.
                  </li>
                  <br />
                  <li>
                    <b>Facilitación: </b>Investigación y financiamiento.
                  </li>
                  <br />
                  <li>
                    <b>Promoción: </b>Desarrollar y difundir comunicaciones
                    persuasivas sobre una oferta.
                  </li>
                  <br />
                  <li>
                    <b>Contacto: </b>Encontrarse y comunicarse con los posibles
                    compradores.
                  </li>

                  <br />

                  <h2 className='font-bold text-lg text-pink-600'>Estrategias de distribución: </h2>
                  <br />
                  <li> <b>Exclusiva: </b> se limita intencionalmente el número de intermediarios al mínimo para aumentar el sentido de prestigio de la marca. Permite fijar márgenes de precio más elevados. Funciona con productos de especialidad.
                  </li>
                  <br />
                  <li> <b>Selectiva: </b>se designa como intermediario sólo a un grupo de empresas con características especiales. Ofrece una buena cobertura del mercado con mayor control sobre el producto.
                  </li>
                  <br />
                  <li> <b>Intensiva: </b> se comercializa el producto a través del mayor número posible de puntos de venta. El control sobre la marca es bajo, pero asegura altos volúmenes de venta. Funciona con productos de conveniencia.
                  </li>
                </div>

                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                </div>
              </div>

            </div>
            <br />
            <hr />

          </div>
        </section>
        {/* Segunda seccion */}
        <section>
          <div className="px-4 lg:pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14">
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES PRECIO?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Precio es la cantidad de dinero que se cobra oir un roducto o servicio; la suma de valores que los clientes intercambian por los bebeficios de tener o usar el producto o servicio” <span className="text-gray-700">Kotler (2013)</span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Tipos de coste que influyen en el precio:  </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li> <b>Fijos: </b> No dependen del nivel de producción o ventas. <br /> Ejemplo: <br /> ▸ Alquiler de local. <br /> ▸ Nómina
                  </li>

                  <br />

                  <li> <b>Variables: </b>Cambian con el nivel de producción o ventas. <br /> Ejemplo: <br /> ▸ Materia prima e insumos. <br /> ▸ Servicios: electricidad, agua, teléfono. <br /> ▸ Costos de almacenamiento. <br /> ▸ Impuestos.
                  </li>

                  <br />

                  <li> <b>Totales: </b>Suma de los costos fijos y variables para cualquier nivel determinado de producción.
                  </li>

                  <br />
                  <h2 className='font-bold text-lg text-pink-600'>Fijación de precios:  </h2>
                  <br />
                  <li> <b>Valor para el cliente: </b>Utiliza las percepciones de valor de los compradores como la clave para la fijación de precios.
                    <br />
                    ‣ Fijación de precios de valor agregado: se aumentan
                    características y servicios de valor agregado para
                    diferenciar las ofertas de la empresa a la vez que ésta
                    cobra precios más altos.
                    <br />
                    ‣ Fijación de precios basada en el buen valor: ofrecer la
                    combinación correcta de calidad y buen servicio a un
                    precio justo.
                  </li>

                  <li> <b>Basada en la competencia: </b>Implica la fijación de precios con base en las estrategias de los competidores, sus costos, precios y ofertas de mercado. Los consumidores basarán sus juicios de valor del producto en los precios que los competidores cobran por productos similares.
                  </li>
                  <br />
                  <li> <b>Basada en costos: </b>Suma de los costos fijos y variables para cualquier nivel determinado de producción.
                  </li>
                  <br />
                  <h2 className='font-bold text-lg text-pink-600'>Fijación de precios para productos nuevos:  </h2>
                  <br />
                  <li> <b>Descremado de precios: </b>Suma de los costos fijos y variables para cualquier nivel determinado de producción.
                  </li>
                  <li> <b>Precio de penetración: </b>Suma de los costos fijos y variables para cualquier nivel determinado de producción.
                  </li>
                  <li> <b>Mantener status quo: </b> colocar tus precios con respecto a los de la competencia.
                  </li>
                </div>

                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                </div>
              </div>

            </div>
            <br />

          </div>
        </section>
        <Footer />

      </div>
    </>
  )
}

export default clase9
