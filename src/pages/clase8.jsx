import ps from '../../public/7PS.png'
import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
import TopB from '../components/TopB'
import Footer from '../components/Footer'
const clase8 = () => {
  return (
    <>
      <Head>
        <title>Marketing Mix: Producto 2</title>
        <meta name="description" content="Created by Jeason Campos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopB />
      <Nav nc="7" nci="9" urli="/clase7" urlii="/clase9" />
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
                  Clase 8 <br />
                  <span className="sm:block pt-2"> Producto 2 </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed lowercase">
                  &quot;NO TODOS LOS CONSUMIDORES VEN LA PUBLICIDAD DE UNA MARCA O ESTÁN EXPUESTOS A LAS EMOCIONANTES ACTIVIDADES DE REDES SOCIALES QUE ELLA ORGANIZA, PERO TODOS LOS CONSUMIDORES QUE COMPRAN EL PRODUCTO INTERACTÚAN CON SU HUMILDE EMPAQUE&quot;
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Etiquetado y empaque</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold"> Tradicionalmente, la función principal del empaque era mantener y proteger el producto. Ahora se ha convertido en una importante herramienta de marketing. Mientras que el etiquetado puede describir varias cosas sobre el producto, como quién lo hizo, dónde se hizo, cuándo fue hecho, su contenido, con qué fin se usa y cómo utilizarlo de forma segura.<span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Los 3 tipos de empaques son: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>Primario:</b> Material o envoltorio que está en contacto directo con el producto real.
                  </li>

                  <li>
                    <b>Secundario:</b> Caja o envoltorio que contiene al empaque primario y se utiliza como presentación principal del producto.
                  </li>

                  <li>
                    <b>Transporte o terciario:</b> Caja o se transporta al detallista o se almacena.
                  </li>

                  <br />

                  <h2 className='font-bold text-lg text-pink-600'>Los 3 tipos de etiquetas son: </h2>
                  <li>
                    <b>Identificativa:</b> La finalidad es, como su nombre indica, favorecer el recordatorio de la marca del producto y conseguir una mayor fidelización de marca.
                  </li>
                  <li>
                    <b>Descriptiva o informativa:</b> distintiva e informativa. Permite que el cliente pueda identificar fácilmente el producto y sus características.
                  </li>
                  <li>
                    <b>Promocional:</b> Destaca alguna propiedad o característica del producto para generar confianza al posible comprador y atraerlo. Frases tipo: Sin aceite de palma o contiene vitaminas y minerales.
                  </li>
                  <br />
                </div>

                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                </div>
              </div>

            </div>
            <br />
            <hr />

          </div>
        </section>
        {/* Seccion 2 */}
        <section className='px-4 lg:pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14'>
          <div className='flex flex-wrap items-center mx-auto max-w-7xl'>
            <div className='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0'>
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿Que es ciclo de vida del producto?</h1>
              <Image className='md:hidden' src={city} />
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">Es la evolución de las ventas y ganancias de un producto o servicio a lo largo de su existencia </p>
              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">Pasando así por 4 grandes etapas las cuales son: </h2>
                <br />
                <li className="m-0"><b>Introducción: </b> es un periodo de lento crecimiento de las ventas, el producto es lanzado al mercado. Las utilidades son bajas o negativas debido a las bajas ventas y a los altos gastos de distribución y promoción.</li>
                <br />
                <li><b>Crecimiento: </b>Es un periodo de rápida aceptación en el mercado y utilidades crecientes. En esta etapa pueden entrar al mercado nuevos competidores. Se pueden introducir nuevas características del producto y el mercado se expandirá. Los precios permanecerán donde están o disminuirán ligeramente. Las empresas mantendrán sus gastos de promoción en el mismo nivel o en uno ligeramente mayor</li>
                <br />
                <li><b>Madurez: </b> z es un periodo de desaceleración en el crecimiento de las ventas porque el producto ha logrado la aceptación por la mayoría de los compradores potenciales. Esta etapa por lo general dura más que las etapas anteriores y plantea fuertes desafíos para la dirección de marketing. Las utilidades se estabilizan o declinan debido a los crecientes desembolsos de marketing para defender al producto contra la competencia</li>
                <br />
                <li><b>Declive: </b>  es el periodo en que las ventas caen y las ganancias disminuyen de manera drástica. Las ventas disminuyen, por ejemplo, a causa de cambios tecnológicos, en los gustos del consumidor y una mayor competencia. A medida que disminuyen las ventas y utilidades, algunas empresas se retiran del mercado. Las empresas deben identificar los productos en la fase de declinación y decidir si deben mantenerlos o quitarlos.</li>
                <br />
              </div>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image className='hidden lg:block' src={city} />
              <br />
              <hr />
            </div>
            <hr />
          </div>
        </section>
        {/* Seccion 3 */}
        <section>
          <div className="px-4 lg:pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div ></div>

                    <div className="absolute rounded-full bg-indigo-200 -bottom-24 lg:top-[calc(-380px)] sm:right-96 left-[8vw] w-72 h-72 mix-blend-multiply filter blur-xl lg:blur-[64px] opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                    </div>
                  </div>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={city} />
                  {/* abajo de la */}
                </div>
              </div>
              <div className="flex flex-col items-start mt-8 lg:mt-16 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES MARCA?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />

                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“ Una marca es un nombre o un termino, simbolo, diseño o combinacion de ellos que identifica a los roductos de una empresa y que lo diferencia de los productos de los competidores”. Sus partes son: Nombre y simbolo.</p>
                <h2 className='font-bold text-lg text-pink-600'>Estrategias de marca: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <li><b>Extensión de línea: </b>El mismo nombre de marca se aplica a distintas versiones, tamaños o sabores dentro de una misma categoría de producto.</li>
                  <br />
                  <li><b>Extensión de Marca: </b>El mismo nombre de marca se aplica a distintas categorías de producto.</li>
                  <br />
                  <li><b>Multimarcas: </b> Nombres de marca distintos en la misma categoría de producto.</li>
                  <br />
                  <li><b>Nuevas marcas: </b> Nombres de marca distintos en categorías de producto diferentes.</li>
                  <br />
                </div>

                <h2 className='font-bold text-lg text-pink-600'>Patriocinio de marcas:</h2>
                <div className="">
                  <li className="text-gray-700"><b>Marca del fabricante (o marca nacional):</b>  es la denominación comercial utilizada por una empresa que es especialista en la fabricación de ciertos productos
                  </li>
                  <li className="text-gray-700"><b> Marca privada (o propia):</b> marca creada y que es propiedad de un revendedor de un producto o servicio</li>
                  <li className="text-gray-700"><b>Marca por licencia: </b>es la que una empresa reconocida cede para su uso comercial a través de acuerdos contractuales. <br />
                  </li>
                  <li className="text-gray-700"><b>Alianzas (o combinación de marcas): </b>práctica en la cual se combinan las marcas reconocidas de dos o más empresas diferentes en un mismo producto. Se suele dar entre nombres de marcas establecidas de diferentes empresas. Estas relaciones usualmente involucran licencias y contratos legales complejos. <br />
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
        {/* Seccion 4 */}
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
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={ps} />
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES SERVICIO?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={ps} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={ps} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Servicio es la actividad, beneficio o satisfacción que se ofrece a la venta y que es esencialmente intangible y no da como resultado la propiedad de algo” <span className="text-gray-700"></span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Las 4 I de los servicios: </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>Intangibilidad:</b> Los servicios no pueden ser vistos, probados, sentidos, escuchados u olfateados antes de ser comprados.
                  </li>

                  <br />

                  <li> <b>Inconsistencia:</b> La calidad de los servicios podría variar en gran medida dependiendo de quién los provea y cuándo, dónde y cómo son provistos.
                  </li>

                  <br />

                  <li> <b>Inseparabilidad:</b> Los servicios se producen y consumen al mismo tiempo y no pueden ser separados de sus proveedores.
                  </li>

                  <br />

                  <li>
                    <b>Inventario:</b> Los servicios no pueden ser almacenados para
                    su uso o venta posterior.
                  </li>

                  <br />

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

export default clase8
