import Link from 'next/link'
import Image from 'next/image'

const Card = ({ url, alt, titulo, subtitulo, link }) => {
  return (
    <>
      <div className="group h-[60vh] sm:h-[70vh] md:h-[44vh] relative block bg-black">

        <Link href={link} >
          <Image
            alt={alt}
            src={url}
            placeholder='blur'
            quality={10}
            className="absolute inset-0 h-full w-full object-contain sm:object-fill  opacity-[44%] transition-opacity group-hover:opacity-25"
          />

          <div className="relative p-4">
            <p className="text-base font-bold uppercase tracking-widest text-pink-500">
              {titulo}
            </p>

            <p className="text-2xl font-bold text-white">{subtitulo}</p>

            <div>
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                {/* <p className="text-sm text-white text-center">
                  {descripcion}
                </p> */}
              </div>
            </div>
          </div>
        </Link>

      </div>
    </>
  )
}

export default Card
