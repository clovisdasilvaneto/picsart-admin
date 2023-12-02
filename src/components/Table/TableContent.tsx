import React from 'react'
import { ITableProps, TTableData, TTableHeader } from './types'
import { TableBody, TableCell, TableRow } from '@mui/material'

function TableContent<T>({ data, identifier, headers }: Omit<ITableProps<T>, 'noDataText'>) {
  return (
    <TableBody>
      {data.map((row: TTableData<T>, index: number) => (
        <TableRow
          key={`${row[identifier]}-${index}`}
          sx={{
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }}
        >
          {headers.map(({ key, scope, component, render }: TTableHeader<T>, index: number) => (
            <TableCell scope={scope} component={component} key={`${key as string}-${index}`}>
              {render ? render(row) : row[key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableContent
