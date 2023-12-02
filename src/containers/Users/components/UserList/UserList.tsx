'use client'

import React from 'react'

import Table from '@/components/Table'
import { TUser } from '@/containers/Users/types'
import { headers } from '@/containers/Users/constants'
import { UserListWrapper } from './styled'

interface IUserListProps {
  users: TUser[]
  sortBy?: string
  onSort: (key: keyof TUser) => void
}

function UserList({ users, sortBy, onSort }: IUserListProps) {
  return (
    <UserListWrapper>
      <Table<TUser>
        sortBy={sortBy}
        onSort={onSort}
        identifier="id"
        headers={headers}
        data={users}
        noDataText={!users.length ? 'Nothing found for this search' : undefined}
      />
    </UserListWrapper>
  )
}

export default UserList
