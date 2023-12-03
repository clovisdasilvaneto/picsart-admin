import React from 'react'

import MuiTable from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { ITableProps } from './types'
import TableContent from './TableContent'
import TableNoData from './TableNoData'
import { TableSortLabel } from '@mui/material'

function Table<T>({ headers, data, onSort, identifier, sortBy, noDataText }: ITableProps<T>) {
  const handleRequestSort = (key: keyof T) => () => {
    if (key === sortBy || !onSort) return
    onSort(key)
  }

  return (
    <div>
      <MuiTable stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(({ label, key, sortable, sx }, index: number) => (
              <TableCell sortDirection={sortable && 'desc'} sx={sx} key={index}>
                {sortable ? (
                  <TableSortLabel
                    active={sortBy == key}
                    direction={sortable ? 'desc' : undefined}
                    onClick={handleRequestSort(key)}
                  >
                    {label}
                  </TableSortLabel>
                ) : (
                  label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {data.length ? (
          <TableContent<T> headers={headers} data={data} identifier={identifier} />
        ) : (
          <TableNoData<T> headers={headers} noDataText={noDataText} />
        )}
      </MuiTable>
    </div>
  )
}

export default React.memo(Table) as typeof Table
