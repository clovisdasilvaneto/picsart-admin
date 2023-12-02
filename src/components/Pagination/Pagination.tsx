import { TablePagination } from '@mui/material'
import React from 'react'

interface IPaginationProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (page: number) => void
}

function Pagination({ count, page, onPageChange, rowsPerPage, onRowsPerPageChange }: IPaginationProps) {
  const handleChangePage = (_e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onPageChange(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onRowsPerPageChange(parseInt(event.target.value, 10))
    onPageChange(0)
  }

  return (
    <TablePagination
      component="nav"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default Pagination
