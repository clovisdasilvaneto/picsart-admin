import { useMemo, useState } from 'react'

interface IUsePagination<T> {
  paginatedData: T[]
  page: number
  rowsPerPage: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (page: number) => void
}

function usePagination<T>(data: T[]): IUsePagination<T> {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const onPageChange = (page: number) => setPage(page)
  const onRowsPerPageChange = (page: number) => setRowsPerPage(page)

  const startIndex = page * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const paginatedData = useMemo(() => data.slice(startIndex, endIndex), [data, startIndex, endIndex])

  return {
    paginatedData,
    rowsPerPage,
    page,
    onPageChange,
    onRowsPerPageChange,
  }
}

export default usePagination
