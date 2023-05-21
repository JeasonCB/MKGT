import Link from 'next/link'

const Nav = ({ nc, nci, urli, urlii }) => {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className=" mx-auto flex max-w-3xl items-center justify-between p-4"
      >
        <Link
          href="/"
          className="z-20 inline-flex h-10 w-18 items-center justify-center rounded-lg "
        >
          <span className="z-50 sr-only w-20">Logo</span>
          👋 Home
        </Link>

        <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <li className="block">
            <Link
              href={urli}
              className="z-10 inline-flex h-10 w-18 items-center justify-center rounded-lg bg-transparent"
            >
              <span className='z-10'>⬅ Clase {nc}</span>
            </Link>
          </li>

          <li className='block'>
            <Link
              href={urlii}
              className="z-10 inline-flex h-10 w-18 items-center justify-center rounded-lg bg-transparent"
            >
              <span className='z-10'>Clase {nci} ➡</span>
            </Link>
          </li>

          <li className='block mx-4'>
            <Link
              href="/quizApp"
              className="z-10 inline-flex h-10 w-18 items-center justify-center rounded-lg bg-transparent"
            >
              <span className='z-10'>QuizApp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-1.5 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
