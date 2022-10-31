import ed from '../../public/ed.jpg'
import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'

const clase4 = () => {
  return (
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
                  Clase  4 <br />
                  <span className="sm:block pt-2"> TIPOS DE MERCADO Y SEGMENTACION </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;Existen 2 tipos de mercados en terminos generales, mercados de consumo (B2C) y mercados industriales (B2B). <br /> El primero dirigido a personas que adquieren el producto para utilizarlo de manera individual o en su entorno cercano y el segundo dirigido a empresas que adquieren el producto para utilizarlo en sus actividades de producción.&quot;
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES EL MERCADO DE CONSUMO (B2C)?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“La combinacion de todos los consumidores crea el mercado de consumo, este tipo de mercado se caracteriza por ser heterogeneo en nececidades y preferencias, debido a esto se hace necesario estudiar los factores y procesos que afectan las decisiones de compra.” <span className="text-gray-700">Kotler(2013)</span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Proceso de la decisión de compra: </h2>
                <div className="mb-8 text-base leading-tight text-left text-gray-700">
                  <br />
                  <li>
                    <b>1.- Reconocimiento de la nececidad:</b> se trata de un impulso humano o motivación dirigido a satisfacer una carencia de naturaleza variable como alimento, agua, vivienda, protección, afecto, seguridad, etc.
                  </li>
                  <br />
                  <li>
                    <b>2.- Busqueda de información:</b> Es el proceso mediante el cual un consumidor interesado, podría o no buscar más información de este modo las fuentes comerciales informan al comprador, pero las fuentes personales legitiman o evalúan los productos.
                  </li>
                  <br />
                  <li>
                    <b>3.- Evaluación de alternativas:</b> los consumidores evalúan todas sus opciones de productos y marcas en una escala de atributos que tengan la posibilidad de proveer el beneficio que están buscando.
                  </li>
                  <br />
                  <li>
                    <b>4.- Decisión de compra:</b> En la etapa de evaluación se clasifican las marcas y se forma intenciones de compra, que luego pasaran a convertirse en una decisión de compra final.
                  </li>
                  <br />
                  <li>
                    <b>5.- Comportamiento postcompra:</b> Después de comprar el producto, el consumidor estará satisfecho o insatisfecho. es importante recordar en este punto que un cliente plenamente satisfecho, volverá a comprar productos de la marca y hablara bien de la empresa.
                  </li>
                </div>
                <h2 className='font-bold text-lg text-pink-600 '>Proceso de compra para productos nuevos:</h2>
                <div className="">
                  <br />
                  <li className="text-gray-700 text-base leading-tight"><b>Conciencia:</b> el consumidor se percata del nuevo producto, pero no tiene información sobre él.
                  </li>
                  <br />
                  <li className="text-gray-700 text-base leading-tight"><b>Interes:</b> el consumidor busca información sobre el nuevo producto.
                  </li>
                  <br />
                  <li className="text-gray-700 text-base leading-tight"><b>Evaluación:</b> el consumidor considera si probar el nuevo producto tiene sentido.
                  </li>
                  <br />
                  <li className="text-gray-700 text-base leading-tight"><b>Prueba:</b> el consumidor prueba el nuevo producto en pequeña escala para mejorar su propia estimación de su valor.
                  </li>
                  <br />
                  <li className="text-gray-700 text-base leading-tight"><b>Adopción:</b> el consumidor decide hacer un uso pleno y regular del nuevo producto.
                  </li>

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
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES EL MERCADO EMPRESARIAL (B2B)?</h1>
              <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
              <div className='md:hidden'> <br /> </div>
              <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Los mercados empresariales poseen destacadas diferencias respecto a los mercados de consumo como por ejemplo la forma en la que se estructura el mercado, al tener menos compradores, pero de mayor volumen o la forma en la que se compra ya que son muchos los participantes a la hora de tomar una decisión de compra de forma profesional” <span className="text-gray-700">Kotler (2013)</span> </p>

              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">Principales tipos de recompra: </h2>
                <br />
                <li className="m-0"><b>Recompra directa</b> el comprador vuelve a hacer un pedido sin modificaciones.</li>
                <br />
                <li><b>Recompra modificada:</b> el comprador quiere modificar las especificaciones del producto, precios, condiciones o proveedores.</li>
                <br />
                <li><b>Compra nueva:</b> cuanto mayor sea el costo o el riesgo, mayor será el número de participantes en la decisión y mayores serán los esfuerzos de la empresa para recopilar información.</li>
                <br />
              </div>
              <h2 className='font-bold text-lg text-pink-600 '>Proceso de compra para empresas:</h2>
              <div className="">
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>1.- Reconocimiento del problema:</b> se busca un producto o servicio que solucione el inconveniente en cuestión.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>2.- Descripción general de las nececidades:</b> Describe las características y cantidades de los artículos o soluciones necesarias.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>3.- Especificaciones del producto:</b> Es realizado por especialistas debido a su caracter técnico.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>4.- Busqueda de proveedores:</b> Esta se realiza por medio de directorios comerciales, búsquedas en el entorno digital o recomendaciones de los demás.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>5.- Solicitud de propuestas:</b> El comprador invita a los proveedores calificados a presentar propuestas.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight "><b>6.- Selección de proveedor:</b> El comprador examinará los atributos del proveedor: calidad del producto y del servicio, reputación, entrega a tiempo, comportamiento empresarial ético, precios competitivos.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight"><b>7.- Especificación de rutina de pedido:</b> El comprador incluye el pedido final con el proveedor o proveedores elegidos, listas de artículos tales como especifi caciones técnicas, cantidades necesarias, tiempos previstos de entrega, políticas de devoluciones y garantías.
                </li>
                <br />
                <li className="text-gray-700 text-base leading-tight mb-10"><b>8.- Revisión del desempeño del proveedor:</b> Es la etapa final en el proceso de compra empresarial. El comprador evalúa el desempeño del proveedor y le proporciona retroalimentación.
                </li>
                <br />
                <hr />
              </div>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={city} />
            </div>
          </div>
          {/* tercera seccion */}
          <section>
            <div className="px-4 pt-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-14">
              <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                  <div>
                    <div className="relative w-full max-w-lg">
                      <div ></div>

                      <div className="absolute rounded-full bg-indigo-200 -bottom-24 lg:top-[calc(-380px)] sm:right-96 left-[20vw] w-72 h-72 mix-blend-multiply filter blur-xl lg:blur-[64px] opacity-70 animate-blob animation-delay-4000"></div>
                      <div className="relative">
                      </div>
                    </div>
                    <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:hidden lg:block lg:my-40 " alt="Maslow" src={city} />
                    {/* abajo de la */}
                  </div>
                </div>
                <div className="flex flex-col items-start mt-16 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                  <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                  <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES SEGMENTACION?</h1>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                  <div className='md:hidden'> <br /> </div>
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />

                  <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Es la accion, de dividir un mercado en grupos de compradores que tienen diferentes nececidades, caracteristicas y comportamientos; a quienes podrían requerir productos o programas de marketing separados, con el fin de concentrar los esfuerzos y recursos de la empresa, protegerse de la competencia y crear nexos a largo plazo con los clientes”. <span className="text-gray-700">Kotler(2013)</span> </p>
                  <h2 className='font-bold text-lg text-pink-600'>Criterios para elegir un segmento: </h2>
                  <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                    <span className='m-0'>Entre los principales criterios podemos destacar: Mensurabilidad, Accesibilidad, Sustancialidad, Abarcabilidad y Rentabilidad.
                    </span>

                  </div>

                  <h2 className='font-bold text-lg text-pink-600'>Estrategias de Cobertura de Mercado:</h2>
                  <div className="">
                    <li className="text-gray-700"><b>Marketing diferenciado vs indeferenciado:</b> Uno vende en generalidad como Frutas (indiferenciado) y el otro vehiculos con sus distintas gamas para cada tipo de público (diferenciado).
                    </li>
                    <li className="text-gray-700"><b>Marketing de nicho:</b> Es la práctica de personalizar productos y programas de marketing a los gustos de individuos y ubicaciones específicas.</li>
                    <li className="text-gray-700"><b>Micromarketing:</b> El micromarketing se divide en: <br />

                      <ul className='pl-4'><span className='text-gray-700 font-medium '>▸Marketing local:</span> Implica adaptar las marcas y promociones a las necesidades y los deseos de los grupos de clientes locales: ciudades, barrios e incluso tiendas específicas.</ul>
                      <ul className='pl-4'><span className='text-gray-700 font-medium'>▸Marketing individual:</span> Se trata de productos y programas de marketing confeccionados a la medida de las necesidades y preferencias de cada cliente.</ul></li>
                  </div>
                  <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                  </div>
                </div>

              </div>
              <br />
              <hr />

            </div>
          </section>
        </section>
        {/* tercera seccion */}
        <section className='container '>
          <div className='flex flex-col justify-center mb-8 mx-16 lg:mx-64'>
            <h1 className='text-4xl text-pink-600 text-center font-bold '>¿CÓMO SE SELECCIONA LA ESTRATEGIA DE COBERTURA DE MERCADO?</h1>
            <br />
            <Image src={ed} />
            <br />

            <h3 className='text-justify'>Para seleccionar la estrategia de forma optima se deben tomar en cuenta los siguientes factores:
              <li className='pt-8'><b>Recursos de la empresa:</b> recursos limitados = marketing concentrado.</li>
              <br />
              <li><b>Grado de variabilidad del producto:</b> marketing indiferenciado es más adecuado para los productos
                uniformes (toronjas, acero) </li>
              <br />
              <li><b>Etapa del ciclo de vida del producto.</b> (lanzamiento de un nuevo producto)</li>
              <br />
              <li><b>Variabilidad del mercado: </b>si la mayoría de los compradores tiene los mismos gustos, compra la misma cantidad y reacciona de la misma manera a los esfuerzos de marketing = marketing indiferenciado.</li>
              <br />
              <li> <b>Estrategias de marketing de los competidores:</b>
                <ul className='pl-5'>‣ Competencia utiliza marketing diferenciado o concentrado, marketing indiferenciado puede ser suicida.</ul>

                <ul className='pl-5'>‣ Competidores utilizan marketing indiferenciado, la empresa puede tener una ventaja mediante el uso del marketing diferenciado o concentrado.</ul> </li>

            </h3>
            <br />
            <h2 className='font-bold text-lg text-pink-600'>Tipos de Segmentacion (B2C):</h2>
            <br />

            <div className="mb-6">
              <li className="text-gray-700"> <b>Geográfica:</b> Requiere dividir al mercado en diferentes unidades geográficas como naciones, regiones, ciudades etc.</li>
              <br />
              <li className="text-gray-700">
                <b>Demográfica:</b> Divide al mercado en segmentos con base en variebles como la edad, género, religión etc.</li>
              <br />
              <li className="text-gray-700"> <b>Psicográfica:</b> divide a los compradores en diferentes segmentos con base en características como la personalidad, o el estilo de vida. </li>
              <br />
              <li className="text-gray-700"><b>Conductual:</b> divide a los compradores en segmentos basados en sus conocimientos, actitudes, usos o respuestas a un producto.</li>
              <br />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default clase4
