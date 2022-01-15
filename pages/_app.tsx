import React from 'react'
import Layout from '@components/Layout/Layout'
import 'antd/dist/antd.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

function MyApp({Component, pageProps}) {
  const [queryClient] = React.useState(() => new QueryClient())
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional Props

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
