import React from 'react'
import Layout from '@components/Layout/Layout'
import SSRProvider from 'react-bootstrap/SSRProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

function MyApp({Component, pageProps}) {
  const [queryClient] = React.useState(() => new QueryClient())
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional Props

  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Layout>
      </SSRProvider>
    </QueryClientProvider>
  )
}

export default MyApp
