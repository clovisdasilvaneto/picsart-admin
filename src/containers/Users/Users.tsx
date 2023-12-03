'use client'

import React from 'react'
import UserList from './components/UserList/UserList'
import { mockUserData } from './constants'
import useSearch from '@/hooks/useSearch/useSearch'
import { TUser } from './types'
import useSort from '@/hooks/useSort'
import usePagination from '@/hooks/usePagination'
import Pagination from '@/components/Pagination'
import Topbar from '@/components/TopBar'

function Users() {
  const { paginatedData, page, rowsPerPage, onPageChange, onRowsPerPageChange } = usePagination<TUser>(mockUserData)
  const { results, search, onSearch } = useSearch(paginatedData, 'name')
  const { sortBy, sortedData, onSortBy } = useSort(results)

  return (
    <div>
      <Topbar searchValue={search} onSearch={onSearch} onSortBy={onSortBy} sortByValue={sortBy} />

      <UserList users={sortedData} sortBy={sortBy} onSort={onSortBy} />

      <Pagination
        count={mockUserData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </div>
  )
}

export default Users
