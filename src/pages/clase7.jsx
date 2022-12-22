import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
const clase7 = () => {
  return (
    <>
      <Head>
        <title>Marketing Mix: Producto 1</title>
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
                  Clase  7 <br />
                  <span className="sm:block pt-2"> Producto 1 </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;Algo que puede ser ofrecido a un mercado para su
                  atención, adquisición, uso o consumo, y que podría
                  satisfacer un deseo o una necesidad&quot;.
                </p>
                <span>Roberts (2015)</span>
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES UN PRODUCTO?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“El producto es un bien, servicio o idea que se obtiene en el intercambio y que además incluye organizaciones, personas, lugares, y eventos se dividen en: <br /> producto de consumo y producto empresarial”. <span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>El producto posee 2 tipos de beneficios </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>T</b>angibles: Empaque, sabor, modelo, color, tamaño, entre otras características.
                  </li>

                  <br />

                  <li>
                    <b>I</b>ntangibles: Servicio, imagen del minorista, reputación del fabricante, estatus social ligado al producto.
                  </li>

                </div>
                <h2 className='font-bold text-lg text-pink-600'>Niveles de producto: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    1.- Al diseñar los productos se debe definir primero los beneficios
                    o servicios esenciales que resuelven un problema y que los
                    consumidores buscan.
                  </li>

                  <br />

                  <li>
                    2.- En el segundo nivel, se debe transformar el beneficio esencial
                    en un producto real. Así desarrollar características para los
                    productos y servicios, además del diseño, nivel de calidad, marca
                    y empaque.
                  </li>

                  <br />
                  <li>
                    3.- El tercer paso es crear un producto aumentado alrededor de
                    los beneficios esenciales y del producto real, ofreciendo
                    beneficios y servicios adicionales al consumidor.
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
        <section className='px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
          <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
            <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0'>
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Tipología </span>
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Tipos de producto:</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Existen 4 tipos de producto de consumo que son: de conveniencia, de comparacion, de especialidad y producto no buscado”</p>
              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">Estos 4 se definen como: </h2>
                <br />
                <li className="m-0"><b>Conveniencia:</b> Producto de consumo que, por lo general, es adquirido por los consumidores con frecuencia, de inmediato y con esfuerzos mínimos de comparación y compra. <br /> <b>Caracteristicas:</b> No busca información adicional, Se adquieren sin mayor esfuerzo, Suelen ser de bajo precio, muchos puntos de venta y Se promueven por medios masivos.</li>
                <br />
                <li><b>Comparacion:</b> Son los productos y servicios de consumo que los clientes adquieren con menos frecuencia, los comparan de manera cuidadosa en su idoneidad, calidad, precio y estilo. <br /> <b>Caracteristicas:</b>  Mucha planificación y esfuerzo de compra, Se realiza un esfuerzo por reunir información y hacer comparaciones, Puntos de venta seleccionados, Frecuencia de compra reducida, Precio relativamente alto, Utiliza publicidad y venta personal.</li>
                <br />
                <li><b>Especialidad:</b> Producto de consumo con características o identificación de marca únicas, y por el cual un grupo significativo de compradores está dispuesto a hacer un esfuerzo de compra especial. <br /> <b>Caracteristicas:</b> Fuerte preferencia y fidelidad, Tiempo de búsqueda extenso, Pocos puntos de venta, Promoción directa, Poca sensibilidad al precio, Por lo general, los compradores no comparan los productos d, especialidad, Identifican los distribuidores que tienen los productos buscados. </li>
                <br />
                <li><b>No Buscado :</b> Producto de consumo que el consumidor no conoce, o que conoce pero que por lo general no consideraría comprar. <br /> <b>Caracteristicas:</b> El consumidor no sale con la intención de comprarlo, Interés inicial nulo, Precio variable, Dependen de publicidad agresiva, Usan la venta personal. Ejemplos clásicos de productos y servicios no buscados conocidos son los seguros de vida, servicios funerarios de manera previa planeados y las donaciones de sangre a la Cruz Roja.</li>
                <br />
              </div>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image className='' src={city} />
              <br />
            </div>
            <br />
          </div>
          <hr />
        </section>
        {/* tercera parte */}
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> Atributos de producto</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Los atributos de producto son características tangibles e intangibles de cualquier producto, pero no ventajas, descripciones o asociaciones emocionales que forman parte de otro tipo de contenido de producto, menos técnico y más enfocado a la personalización y originalidad en la venta del producto”. <span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>El producto posee 2 tipos de beneficios </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>C</b>alidad: La calidad tiene dos dimensiones: nivel y consistencia. En el desarrollo de un producto, primero se debe elegir un nivel de calidad que apoye el posicionamiento del producto o servicio. Aquí, la calidad del producto significa la capacidad del producto para realizar sus funciones. Mientras mas alta es la calidad mayor consistencia conlleva.
                  </li>

                  <li>
                    <b>C</b>aracteristicas: las características son una herramienta competitiva para diferenciar el producto de la compañía de los productos de los competidores. Ser el primer fabricante en lanzar una nueva y valiosa característica es una de las formas más eficaces para competir.
                  </li>

                  <li>
                    <b>D</b>iseño y Estilo: Un buen diseño contribuye tanto a la utilidad del producto, como a su apariencia
                  </li>
                </div>
                <h2 className='font-bold text-lg text-pink-600'>Cartera de producto: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />
                  <li>
                    <b>A</b>mplitud: Se refiere al número total de productos que maneja la compañía. Se mide por el número de líneas de productos que comprende. por ejemplo coca cola produce refrescos, bebidas energéticas, agua embotellada, té y café entre otros productos
                  </li>
                  <br />
                  <li>
                    <b>L</b>ongitud: Es la cantidad total de productos ofrecidos en esa línea. Por ejemplo gatorade y todos sus sabores o todos sus refrescos.
                  </li>
                  <br />
                  <li>
                    <b>P</b>rofundidad: Las diferentes variantes de los productos en cada línea. Un factor que indica la variación podría ser el tamaño. Esta se aplica a cada producto.
                  </li>
                  <br />
                  <li>
                    <b>C</b>onsistencia: Trata el grado de similitud y relación que tienen todas las líneas de productos entre ellas. Se analiza el uso que tienen, los canales de distribución o incluso los requisitos en la producción.
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
      </div>
    </>
  )
}

export default clase7
