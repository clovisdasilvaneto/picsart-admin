import { SxProps } from '@mui/material'

export type TTableHeader<T> = {
  key: keyof T
  sx?: SxProps
  scope?: 'row'
  sortable?: boolean
  component?: 'th'
  render?: (data: T) => React.ReactNode
  label: string
}

export type TTableData<T> = T & Record<string, string>

export interface ITableProps<T> {
  headers: TTableHeader<T>[]
  identifier: keyof T
  data: TTableData<T>[]
  noDataText?: string
  sortBy?: string
  onSort?: (key: keyof T) => void
}
