import React from 'react'
import LayoutComponent from '@components/Layout/Layout'
import 'antd/dist/antd.css'
// import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AppContextProvider} from '../reducerContext/provider'

function MyApp({Component, pageProps}) {
  const [queryClient] = React.useState(() => new QueryClient())
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional Props

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <LayoutComponent>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </LayoutComponent>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
