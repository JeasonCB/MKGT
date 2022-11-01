import Head from 'next/head'
import Layout from '../components/Layout'
import marketing from '../../public/marketing.jpg'
import Card from '../components/Card'
import { Header } from '../components/Header'

export default function Home () {
  return (
    <>
      <Head>
        <title>Principios de Marketing</title>
        <meta name="description" content="Created by Jecb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='pb-[10vh]'> </div>
      <div className='text-center w-[100%] text-5xl font-bold mb-10'> Cursos 👇</div>
      <Layout>
        <Card titulo='clase 1' link='./clase1' subtitulo='Principios de marketing' descripcion={'lorem ipsum'} url={marketing} />
        <Card titulo='clase 2' link='./clase2' subtitulo='Factores de microentorno' descripcion={''} url={marketing} />
        <Card titulo='clase 3' link='./clase3' subtitulo='Factores de macroentorno' descripcion={''} url={marketing} />
        <Card titulo='clase 4' link='./clase4' subtitulo='Principios de marketing' descripcion={''} url={marketing} />
        <Card titulo='clase 5' link='./clase5' subtitulo='Principios de marketing' descripcion={''} url={marketing} />
        <Card titulo='clase 6' link='/' subtitulo='proximamente...' descripcion={''} url={marketing} />
      </Layout>
    </>
  )
}
