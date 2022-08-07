import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, Header } from '../components'

export default function Home() {
  return (
    <>
      <Header />
      <div style={{height: '80vh', marginLeft: '10px'}}>
        <h1>Aplicação feita com node no backend e React/Next no frontend</h1>
        <p>Essa é uma aplicação feita por Erikson Santos para testar os conhecimentos de javascript.
          Nessa aplicação, foi desenvolvido um backend em Node que é alimentado por um banco de dados SqlLite.
          As informações são recebidas e enviadas para o front através de API's.
        </p>
        <p>Para testar essa aplicação, clique em Login ou Register, insira as informações pedidas
          e veja o resultado na tela.</p>
      </div>
      <Footer />
    </>
  )
}
