import { TTableHeader } from '@/components/Table/types'
import { TNote } from '../AddNote/types'

export const headers: TTableHeader<TNote>[] = [
  {
    label: 'Id',
    key: 'id',
    sx: {
      width: '150px',
    },
  },
  {
    label: 'Title',
    key: 'title',
  },
  {
    label: 'Title',
    key: 'body',
  },
]
