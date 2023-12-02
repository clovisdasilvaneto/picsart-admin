import React from 'react'
import { TTableHeader } from './types'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material'

interface ITableNoDataProps<T> {
  headers: TTableHeader<T>[]
  noDataText?: string
}

function TableNoData<T>({ headers, noDataText }: ITableNoDataProps<T>) {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={headers.length}>
          <Typography fontWeight={700}>{noDataText}</Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default TableNoData
