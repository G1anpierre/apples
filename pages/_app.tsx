import React from 'react'
import LayoutComponent from '@components/Layout/Layout'
import 'antd/dist/antd.css'
// import '../styles/globals.css'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AppContextProvider} from '../reducerContext/provider'

export function reportWebVitals(metric) {
  // analytics - calibre
  console.log(metric)
  // serverAnalitics(metric)
}

function MyApp({Component, pageProps}) {
  const [queryClient] = React.useState(() => new QueryClient())
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional Props

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppContextProvider>
          <LayoutComponent>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </LayoutComponent>
        </AppContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
