import Lovemarks from '../../public/Lovemarks.png'
// import bl from '../../public/bl.png'
import Image from 'next/image'
import Nav from '../components/Nav'
import Head from 'next/head'
import TopB from '../components/TopB'
const clase6 = () => {
  return (
    <>
      <>
        <Head>
          <title>Lovemarks</title>
          <meta name="description" content="Created by Jecb" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopB />
        <Nav nc="5" nci="7" urli="/clase5" urlii="/clase7" />
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
                    Clase  6 <br />
                    <span className="sm:block pt-2"> LOVEMARKS </span>
                  </h1>
                  <br />
                  <p className="mx-auto mt-1 max-w-xl sm:text-xl sm:leading-relaxed">
                    &quot;Una lovemark es la mezcla perfecta entre respeto y amor; priorizando así, la lealtad por sobre la razón.&quot;.
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
              <div className="flex flex-wrap items-center mx-auto max-w-7xl bg">
                <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                  <div>
                    <div className="relative w-full max-w-lg">
                      <div ></div>

                      <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 lg:top-[calc(-380px)] sm:right-96 right-[50vw] w-72 h-72 mix-blend-multiply filter blur-xl lg:blur-[64px] opacity-70 animate-blob animation-delay-4000"></div>
                      <div className="relative">
                      </div>
                    </div>
                    <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none lg:block lg:my-40 " alt="Maslow" src={Lovemarks} />
                  </div>
                </div>
                <div className="flex flex-col items-start mt-12 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                  <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Definición </span>
                  <h1 className="mb-8 bg-gradient-to-r from-pink-600/90 via-pink-700 to-pink-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">¿QUE ES UNA LOVEMARK?</h1>

                  <p className="mb-8 text-base leading-relaxed text-left text-gray-500 font-bold">“Es una marca que ha logrado posicionarse como la primera opcion de su publico objetivo, gracias a la generacion de vinculos emocionales que hacen que la fidelidad y el compromiso de sus consumidores llegue al punto en que estos sienten amor por la marca” <span className='text-black'>RockContent (2019). </span></p>
                  <h2 className='font-bold text-lg text-pink-600'>El amor se compone de 3 atributos: </h2>
                  <div className="mb-8 text-base leading-relaxed text-left text-gray-700">

                    <li>
                      <b>M</b>isterio: crea grandes historias, despierta los sueños e inspira y apela a mitos e iconos.
                    </li>
                    <br />
                    <li>
                      <b>S</b>ensualidad: Los protagonistas son los 5 sentidos: sonido, vista, olor, tacto y gusto.
                    </li>
                    <br />
                    <li>
                      <b>I</b>ntimidad: Se trata de compromiso, se debe probar que se esta en una relacion a largo plazo;
                      Se debe tener empatia, es decir comprender y responder las emociones de los demás, así como tambien pasión.
                      En conclusion intimidad se trata de: <br />
                      Tomar acciones, invitar a participar y compartir.
                    </li>

                  </div>
                  <h2 className='font-bold text-lg text-pink-600'>El respeto se compone de 3 atributos: </h2>
                  <div className="mb-8 text-base leading-relaxed text-left text-gray-700">

                    <li>
                      <b>D</b>esempeño: Innovación, Calidad, Servicio, Identidad, Valor.
                    </li>
                    <br />
                    <li>
                      <b>C</b>onfianza: Confiabilidad, Sostenibilidad, Facilitar, Franqueza, Seguridad.
                    </li>
                    <br />
                    <li>
                      <b>R</b>eputación: Liderazgo, Honestidad, Responsabilidad, Eficacia.
                    </li>
                    <br />
                  </div>
                  <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                  </div>
                </div>

              </div>
              <br />

            </div>
            {/* segunda seccion - inversa ⬇ */}
            {/* <div className='grid place-content-center'>
              <Image className="object-cover object-center mx-auto rounded-lg shadow-lg bg-white blur-none h-[50vh] w-[40vw]" alt="Maslow" src={bl} />
            </div> */}
          </section>

        </div>
      </>
    </>
  )
}

export default clase6
