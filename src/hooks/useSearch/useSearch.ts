'use client'

import { useCallback, useMemo, useState } from 'react'

interface IUseSearch<T> {
  search?: string
  results: T[]
  onSearch: (val: string) => void
}

function useSearch<T>(data: T[], key: keyof T): IUseSearch<T> {
  const [search, setSearch] = useState<string>('')

  const onSearch = useCallback((currentSearch: string) => {
    setSearch(currentSearch.toLowerCase())
  }, [])

  const results = useMemo(
    () => data.filter((current) => (current[key] as string).toLowerCase().startsWith(search)),
    [search, data, key],
  )

  return { search, onSearch, results }
}

export default useSearch
