import { useCallback, useMemo, useState } from 'react'
import { TSort } from './types'
import { compare } from './utils'

interface IUseSort<T> {
  sortBy: TSort<T>
  sortedData: T[]
  onSortBy: (key: TSort<T>) => void
}

function useSort<T>(data: T[]): IUseSort<T> {
  const [sortBy, setSortBy] = useState<TSort<T>>('')

  const onSortBy = useCallback((key: TSort<T>) => {
    setSortBy(key)
  }, [])

  const sortedData = useMemo(() => (sortBy ? [...data].sort(compare(sortBy)) : data), [data, sortBy])

  return { sortBy, sortedData, onSortBy }
}

export default useSort
