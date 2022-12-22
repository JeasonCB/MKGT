import city from '../../public/city.jpg'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
const clase10 = () => {
  return (
    <>
      <Head>
        <title>Marketing Mix: Promoción</title>
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
                  Clase  10 <br />
                  <span className="sm:block pt-2"> Promoción </span>
                </h1>
                <br />
                <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                  &quot;Forjar buenas relaciones con el cliente requiere más que solo desarrollar un bien producto, fijarle un precio atractiv y ponerlo a disposición de los clientes meta.&quot;
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
                <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> ¿QUE ES PROMOCIÓN?</h1>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none hidden md:block lg:my-40 lg:hidden " alt="Maslow" src={city} />
                <div className='md:hidden'> <br /> </div>
                <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none md:hidden" alt="Maslow" src={city} />
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Promocion es la comunicacion empresarial que informa, persuade y recuerda un producto a los compradores potenciales con el proposito de influir en una opinion o generar una respuesta”. <span className="text-gray-700">Lamb, Hair, McDaniel</span> </p>
                <h2 className='font-bold text-lg text-pink-600'>Mezcla de promoción: Herramientas. </h2>
                <div className="mb-8 text-base leading-relaxed text-left text-gray-700">
                  <br />

                  <li>
                    <b>Publicidad: </b> Cualquier forma pagada e impersonal de
                    presentación y promoción de ideas, bienes o servicios por
                    un patrocinador identificado.
                    ‣ Incluye la emitida por radio o televisión, la impresa,
                    Internet, móvil, medios sociales, exterior, entre otras.
                  </li>

                  <br />

                  <li>
                    <b>Relaciones públicas: </b> Forjar buenas relaciones con los diversos públicos de la empresa al obtener publicity (publicidad no pagada) favorable, construir una buena imagen corporativa y manejar o desviar rumores, historias y eventos desfavorables. <br /> ‣ Incluyen comunicados de prensa, eventos.
                  </li>

                  <br />

                  <li> <b>Promoción de ventas: </b> : incentivos por tiempo limitado para fomentar la compra o venta de un producto o servicio. Generan resultados en el corto plazo. <br /> ‣ Incluye descuentos, cupones, exhibiciones y demostraciones.
                  </li>

                  <br />

                  <li> <b>Marketing directo: </b>  conexiones directas con consumidores individuales cuidadosamente seleccionados, tanto para obtener una respuesta inmediata, como para cultivar relaciones duraderas con los clientes. ‣ Incluye catálogos y boletines, email marketing, mensajes por SMS, WhatsApp Facebook Messenger (chatbots). Mensaje personal. <br /> ‣ Es más rentable porque se intenta vender a los individuos que ya han sido identificados como potenciales compradores. <br /> ‣ Es posible enviar mensajes específicos a grupos particulares de clientes. <br /> ‣ Puedes obtener retroalimentación sobre tus productos, servicios y precios.
                  </li>

                  <br />

                  <li> <b>Ventas personales: </b> presentación personal por la fuerza de ventas de la empresa, con el propósito de realizar ventas y construir relaciones con los clientes. ‣ Incluye presentaciones de ventas, ferias comerciales, entre otros. <br /> Son útiles cuando: <br /> ‣ El producto o servicio es complejo o nuevo, y los clientes requieren de una explicación detallada o de una demostración. <br /> ‣ El precio del producto o servicio justifica el costo que implica mantener una fuerza de ventas (comisiones, incentivos, sueldos, viáticos, transporte, etc.). <br /> ‣ La venta del producto o servicio requiere que el cliente llene un formulario de pedido o que firme un contrato de compra.
                  </li>

                  <br />

                  <h2 className='font-bold text-lg text-pink-600'>Metas de la promoción: </h2>
                  <br />
                  <li>
                    <b>Informar:</b> Se enfoca en los atributos (tangibles e intangibles) del producto.Suele usarse cuando un producto/servicio es nuevo, o se le realizan cambios o mejoras.

                  </li>
                  <br />
                  <li>
                    <b>Persuadir: </b>Busca tocar las actituddes y desarrollar creencias. Se emplea cuando los consumidores identifican bien nuestro producto, y se busca diferenciarlo de la competencia.
                  </li>
                  <br />
                  <li>
                    <b>Recordar: </b> Es la utilizada con productos maduros.
                  </li>
                  <br />
                  <li>
                    <b>Conectar:</b> Busca crear un lazo emocional con el consumidor.
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
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
              <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Estrategias de mezcla de promoción</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">Comprende 2 grandes estrategias push y pull. <br />
                <b className='text-black'>Push: </b> Es la estrategia de promoción en la cual se utiliza la fuerza de ventas y las promociones comerciales para empujar al producto a través de canales. El fabricante promueve su producto con los miembros del canal quienes a su vez lo promuevan a los consumidores finales. <br />
                <b className='text-black'>Pull: </b> Es la estrategia de promoción en la cual una empresa invierte mucho dinero en promoción y publicidad al consumidor para inducir a los consumidores finales a comprar el producto, creando así una atracción en la demanda que hala al producto a través del canal.</p>
              <div className="mb-8 text-base leading-tight text-left text-gray-700">
                <h2 className="font-bold text-lg text-pink-600">Tipos de publicidad: </h2>
                <br />
                <li className="m-0"><b>Publicidad ATL: </b> Significa “Above The Line” y Se refiere al tipo de publicidad que tiene un amplio alcance, y una segmentación indiferenciada, Suele usarse para campañas de posicionamiento.
                  <br />
                  Publicidad ATL se caracteriza por:
                  <br />
                  ▸ Utilizar medios masivos.
                  <br />
                  ▸ Son más efectivos ante target extensos.
                  <br />
                  ▸ El feedback no es inmediato.
                  <br />
                  ▸ Es difícil de medir el impacto de las campañas.
                  <br />
                  La publicidad ATL se enfoca en, principalmente, en: Tv, Radio, Cine, Revistas, Prensa, Exterior</li>
                <br />
                <li><b>Publicidad BTL: </b>Significa “Below The Line” y Es la publicidad que está segmentada a grupos específicos de personas; es la publicidad ideal para buscar respuestas directas.
                  <br />
                  La Publicidad BTL se caracteriza por:
                  <br />
                  ▸ Emplear canales de comunicación directa.
                  <br />
                  ▸ Campañas con niveles altos de creatividad.
                  <br />
                  ▸ El feedback es casi instantáneo.
                  <br />
                  ▸ Es posible medir con mayor efectividad el impacto de las
                  campañas.
                  <br />
                  ▸ Utiliza espacios específicos para colocar mensajes del interés
                  del target.
                  <br />
                  Los medios del marketing BTL principales son: Product placement, Advergaming, Punto de Venta, Marketing Directo, Publicidad online y medios sociales, Patrocinios, Marketing de guerrilla.</li>
                <br />
                <li><b>Publicidad TTL: </b> Este término significa “Through The Line”. Tiene un
                  acercamiento bastante integrado, ya que la compañía puede
                  utilizar ambos métodos (tanto el ATL como el BTL) para
                  alcanzar a una buena cantidad de clientes y, al mismo
                  tiempo, generar conversiones.</li>
                <br />

              </div>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex"></div>
            <div className='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <Image className='' src={city} />
              <br />
              <hr />
            </div>
            <br />
          </div>
        </section>
      </div>

    </>
  )
}

export default clase10
