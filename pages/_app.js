import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="public/touch_icon.png" /> 
    </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
