'use client'

import Table from '@/components/Table'
import React from 'react'
import { TNote } from '../AddNote/types'
import { headers } from './constant'
import usePagination from '@/hooks/usePagination'

function Notes({ notes }: { notes: TNote[] }) {
  const { paginatedData } = usePagination<TNote>(notes)

  return <Table<TNote> noDataText={'there is no notes yet.'} identifier="id" headers={headers} data={paginatedData} />
}

export default Notes
