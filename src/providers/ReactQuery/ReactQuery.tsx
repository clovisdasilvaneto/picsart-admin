'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ENV_MODE } from '@/infra/constants'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ReactQueryProps {
  children: React.ReactNode
}

export const queryClient = new QueryClient()

function ReactQueryProvider({ children }: ReactQueryProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={ENV_MODE !== 'production'} />

      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
