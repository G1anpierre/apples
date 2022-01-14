import Layout from '@components/Layout/Layout'
import SSRProvider from 'react-bootstrap/SSRProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional Props
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
